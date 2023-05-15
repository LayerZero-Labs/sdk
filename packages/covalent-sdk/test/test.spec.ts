import {assert, it} from 'vitest';
import {Covalent} from '../src';

assert(process.env.COVALENT_API_KEY, 'COVALENT_API_KEY env missing');
const sdk = new Covalent.Client(process.env.COVALENT_API_KEY);

it('getTokenBalancesForAddress', async () => {
  const result = await sdk.getTokenBalancesForAddress({
    chainId: Covalent.ChainId.ETHEREUM,
    address: '0x6d9F1a927CBcb5e2c28D13CA735bc6d6131406da',
  });
  assert(result, 'no result');
});

it('getTransactionsForAddress', async () => {
  const result = await sdk.getTransactionsForAddress({
    chainId: Covalent.ChainId.ETHEREUM,
    address: '0x6d9F1a927CBcb5e2c28D13CA735bc6d6131406da',
  });
  assert(result.items, 'items');
}, 10_000);
