import os from 'os';

export function getOsInfo(argument) {
  switch (argument.split("--")[1]) {
    case 'EOL':
      console.log('End-Of-Line (EOL): ', JSON.stringify(os.EOL));
      break;
    case 'cpus':
      const cpus = os.cpus();
      const values = [];
      cpus.forEach(cpu => {
        values.push({'Model': cpu.model, 'Clock Rate' : `${cpu.speed / 1000} Ghz`});
      })
      console.log(`CPUs Information:\nNumber of CPUs:  ${cpus.length},\n`);
      console.table(values);

      break;
    case 'homedir':
      console.log('Home Directory:' , os.homedir());
      break;
    case 'username':
      console.log('System User Name: ', os.userInfo().username);
      break;
    case 'architecture':
      console.log('CPU Architecture:' , os.arch());
      break;
    default:
      console.log(`Invalid input message\n`);
  }
}