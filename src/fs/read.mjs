import * as fs from 'node:fs';
import path from 'path';

import  {getFilePath} from "../utils/getFilePath.mjs";

export default function readGivenFile (input) {
  const filePath = getFilePath(input);
      const fileToRead = fs.createReadStream(filePath, { encoding: 'utf-8' });
      fileToRead.on('data', (chunk) => {
        console.log(chunk);
      });
      fileToRead.on('error', (error) => {
          console.error(`Invalid input message\nFile path should be in quotes`);
      });
};