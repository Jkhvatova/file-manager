import path from "path";
import { fileURLToPath } from 'url';
import os from 'os';
import process from "process";
const __dirname =  path.dirname(fileURLToPath(import.meta.url));

const getDir = () => {
  console.log(
  "__dirname " + process.cwd());
}

const getHomeDir = () => {

  try {
    process.chdir(os.homedir());
    console.log("Current directory:", process.cwd());
  } catch (err) {
    console.error("error while changing directory");
  }
}
export  {getDir, getHomeDir};

