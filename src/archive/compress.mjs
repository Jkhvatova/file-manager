
import fs from 'node:fs';
import zlib from 'node:zlib';
import path from 'path';
import {getFilePath, getOutputFilePath} from "../utils/getFilePath.mjs";
export default function compressFile(input) {
  const inputFilePath = getFilePath(input);
  const outputFilePath = getOutputFilePath(input);
  const readStream = fs.createReadStream(inputFilePath);
  const writeStream = fs.createWriteStream(outputFilePath);
  const brotliStream = zlib.createBrotliCompress();

  readStream.pipe(brotliStream).pipe(writeStream);
}