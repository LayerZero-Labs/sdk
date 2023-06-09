import { defineConfig, getDefaultConfig } from "@layerzerolabs/tsup-config"

export default defineConfig({
    ...getDefaultConfig(),
    entry: ["src/index.ts"],
})
