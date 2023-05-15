## Installation

```sh
yarn add @layerzerolabs/covalent-sdk
or
npm i @layerzerolabs/covalent-sdk
```

## Usage

```typescript
import {Covalent} from '@layerzerolabs/covalent-sdk';

const client = new Covalent.Client(process.env.COVALENT_API_KEY);

const result = await client.getTokenBalancesForAddress({
  chainId: Covalent.ChainId.ETHEREUM,
  address: '0x6d9F1a927CBcb5e2c28D13CA735bc6d6131406da',
});
```
