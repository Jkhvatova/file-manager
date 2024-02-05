import path from 'path';

export default function getFilePath(input) {
    const filePath = input.split(' ')[1];
    let resolvedPath = '';
    if (filePath && (filePath.startsWith('"') || filePath.startsWith("'")) && input.split(' ').length === 2) {
        resolvedPath = path.resolve(filePath.slice(1, -1));
  }
return resolvedPath;
}

