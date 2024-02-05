import path from 'path';

export function getFilePath(input) {
    const filePath = input.split(' ')[1];
    let resolvedPath = '';
    if (filePath && (filePath.startsWith('"') || filePath.startsWith("'"))) {
        resolvedPath = path.resolve(filePath.slice(1, -1));
  }
return resolvedPath;
}

export function getOutputFilePath(input) {
  console.log(input);
  const filePath = input.split(' ')[2];
  let resolvedPath = '';
  if (filePath && (filePath.startsWith('"') || filePath.startsWith("'"))) {
      resolvedPath = path.resolve(filePath.slice(1, -1));
}
return resolvedPath;
}

