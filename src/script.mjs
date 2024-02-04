
const args = process.argv;
let userName = 'Guest';
const userNameArg = args.filter(arg => arg.startsWith('--username'))[0];

try {
  userName = userNameArg.split('=')[1];
  console.log(`Welcome to the File Manager, ${userName}!`)
} catch {
  console.log(`Welcome to the File Manager, ${userName}! \nYou can provide your name by running 'npm run start -- --username=your_username'!`);
}
