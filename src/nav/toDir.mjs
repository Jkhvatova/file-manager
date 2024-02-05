import path from 'path';
import getFilePath from "../utils/getFilePath.mjs";

export default function navigateToDir(directoryPath) {

    const cleanPath = getFilePath(directoryPath)
    const resolvedPath = path.resolve(cleanPath);
    process.chdir(resolvedPath);
    console.log(`Navigated to directory: ${process.cwd()}`);

  }