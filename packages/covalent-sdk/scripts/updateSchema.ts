import path from 'path';
import fs from 'fs';
import axios from 'axios';

async function updateSchema() {
  const url = 'https://api.covalenthq.com/v1/openapiv2/';
  const {data} = await axios.get(url);
  if (!Array.isArray(data)) throw new Error(`Invalid response from ${url}`);
  const schema = JSON.stringify(data, null, 4);
  fs.writeFileSync(path.resolve(__dirname, 'schema.json'), schema);
}

updateSchema();
