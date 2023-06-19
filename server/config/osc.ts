import { readFileSync } from 'fs';
import { Client } from 'node-osc';
import { join } from 'path';

const getOscClient = () => {
  try {
    const [host, port] = readFileSync(join(__dirname, 'host.txt')).toString().split(':');
    return new Client(host, Number(port));
  } catch {
    return new Client('localhost', 12345);
  }
};

export const oscClient = getOscClient();
