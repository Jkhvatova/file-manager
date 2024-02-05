import { createHash } from 'crypto';
import * as fs from 'node:fs/promises';
import path from 'path';

export default async function calculateHash(value) {
  const filePath = value.split(' ')[1];
  const hash = createHash('sha256');
 if (filePath.startsWith('"') || filePath.startsWith("'") && value.split(' ').length === 2) {
  try {
    const resolvedPath = path.resolve(filePath.slice(1, -1));
    const input = await fs.readFile(resolvedPath, 'utf-8');
    hash.update(input);
    return hash.digest('hex');
  } catch (error) {
    console.error('Error reading file:', error);
  }
  } else {
    console.log(`Invalid input message\nFile path should be in quotes`);
  };
}