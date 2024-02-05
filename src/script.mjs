import os from 'os';
import readline from 'readline';
import { getOsInfo } from "./os/os.mjs";
import { list } from "./fs/list.mjs";
//import {getDir, getHomeDir} from './os/dir.mjs';

const args = process.argv;
let userName = 'Guest';
const userNameArg = args.filter(arg => arg.startsWith('--username'))[0];

try {
  userName = userNameArg.split('=')[1];
  console.log(`Welcome to the File Manager, ${userName}!`)
  //getHomeDir();
} catch {
  console.log(`Welcome to the File Manager, ${userName}! \nYou can provide your name by running 'npm run start -- --username=your_username'!`);
}
// getDir();
// getHomeDir();
process.chdir(os.homedir());
console.log("You are currently in ", process.cwd());

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  if (input === '.exit') {
    console.log(`Thank you for using File Manager,  ${userName}, goodbye!`);
    rl.close();
  }  else if (input === 'ls') {
    list();
    rl.prompt();
  }  else if (input.startsWith('os')) {
    getOsInfo(input);
    rl.prompt();
  } else {
    console.log(`Invalid input message\n`);
    rl.prompt();
  }
});

process.on('SIGINT', () => {
  process.exit();
});
process.on('exit', () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
});