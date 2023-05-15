import schema from "./schema.json"
import { camelCase } from "lodash"
import { compile } from "json-schema-to-typescript"
import prettier from "prettier"
import fs from "fs"
import path from "path"

// schema downloaded from
// https://api.covalenthq.com/v1/openapiv2/v20220805105331/
// todo: add zod

function mapType({ type, name }: { name: string; type: string }) {
    if (name === "chain_id") return "ChainId"
    return type === "integer" ? "number" : type
}
function mapParamName(n: string) {
    return camelCase(n)
}

function toUrlExpression(path: string, params: any[]) {
    params.forEach((param) => {
        path = path.replace(":" + param.name, "${" + mapParamName(param.name) + "}")
    })
    return "`" + path + "`"
}

function fixComponents<T>(schema: T): T {
    // very naive - parser fails otherwise
    return JSON.parse(JSON.stringify(schema).replaceAll("#/components/schemas/", "#/components/"))
}

Promise.all(
    schema.map(async (def) => {
        const methodName = camelCase(def.title)
        const response = fixComponents(def.response)

        const jsonSchema = {
            ...response.schema,
            description: def.description,
            title: response.name,
            components: response.components,
        }

        const responseType = def.response.name
        const responseDeclaration = await compile(jsonSchema as any, responseType)

        const jsDoc = `/**
    * ${def.description.split("\n").join(" ")}
    ${def.params.map((p) => `* @param ${mapParamName(p.name)} - ${p.description}`).join("\n")}  
    */`

        const args = "{" + def.params.map((p) => mapParamName(p.name)).join(", ") + "}"
        const argsType = "{" + def.params.map((p) => `${mapParamName(p.name)}${p.required === false ? "?" : ""} :${mapType(p)}`).join(", ") + "}"

        const queryParams = def.params
            .filter((p) => p.pathParam === false)
            .map((p) => `"${p.name}": ` + mapParamName(p.name))
            .join(", ")

        const signature = def.params.length ? `${args} : ${argsType}` : ""
        const functionDeclaration = `
    ${jsDoc}
    async ${methodName}(${signature}) {
        const url = ${toUrlExpression(def.path, def.params)};
        const {data} = await this.http.get<CovalentResponse<${responseType}>>(url, {params:{${queryParams}}});
        if(data.error){
          throw new Error(data.error_message);
        }
        return data.data;
    }`

        const moduleCode = {
            functionDeclaration,
            responseDeclaration,
        }

        return moduleCode
    })
)
    .then(async (modules) => {
        const responseDeclaration = `type CovalentResponse<T> = {
      data: T,
      error: false,
      error_code: null,
      error_message: null,
    } | {
      data: null,
      error: true,
      error_code: unknown,
      error_message: string
    }`
        const clientDeclaration = `
    export class Client {
        private http: Axios;
        constructor(private apiKey: string, private baseURL = "https://api.covalenthq.com") {
          this.http = axios.create({
            baseURL,
            params: {
              key: apiKey,
            },
          });
        }

        ${modules.map((m) => m.functionDeclaration).join("\n\n")}
    }`

        const typesDeclaration = modules.map((m) => m.responseDeclaration).join("\n\n")

        const fileName = path.resolve(__dirname, "../src/index.ts")
        const prettierConfig = await prettier.resolveConfig(fileName)

        const sourceCode = prettier.format(
            `
    // @ts-nocheck
    import axios, {Axios} from 'axios';

    export namespace Covalent {

      export enum ChainId {
        ETHEREUM = 1,
        ETHEREUM_KOVAN = 42,
        POLYGON = 137,
        POLYGON_MUMBAI = 80001,
        AVALANCHE = 43114,
        AVALANCHE_FUJI = 43113,
        BSC = 56,
        BSC_TESTNET = 97,
        FANTOM = 250,
        FANTOM_TESTNET = 4002,
        RONIN = 2020,
        MOONBEAM_TESTNET = 1287,
        MOONBEAM_POLKADOT = 1284,
        MOONRIVER_KUSAMA = 1285,
        RSK_MAINNET = 30,
        RSK_TESTNET = 31,
        ARBITRUM_MAINNET = 42161,
        ARBITRUM_TESTNET = 421611,
        PALM_MAINNET = 11297108109,
        PALM_TESTNET = 11297108099,
        KLAYTN_MAINNET_CYPRESS = 8217,
        HECO_MAINNET = 128,
        HECO_TESTNET = 256,
        POLYJUICE_TESTNET = 71393,
        IOTEX_MAINNET = 4689,
        IOTEX_TESTNET = 4690,
        EVMOS_TESTNET = 9000,
        ASTAR_MAINNET = 592,
        ASTAR_TESTNET = 81,
        SHIDEN = 336,
        HARMONY_MAINNET = 1666600000,
        AURORA_MAINNET = 1313161554,
        CRONOS_MAINNET = 25,
        SOLANA = 1399811149,
      }

        export ${clientDeclaration};
        export ${responseDeclaration}

        ${typesDeclaration}
    }`,
            { ...prettierConfig, parser: "typescript" }
        )

        fs.writeFileSync(fileName, sourceCode)
    })
    .catch(console.error)
