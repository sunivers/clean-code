import Args from './src/Args';

const main = (args: Buffer): void => {
  try {
    const argsStrings: string[] = args.toString().replace('\n', '').split(' ');
    console.info('args:', argsStrings);

    const arg: Args = new Args('l,p#,d*', argsStrings);
    const logging: boolean = arg.getBoolean('l');
    const port: number = arg.getInt('p');
    const directory: string = arg.getString('d');

    console.info(`logging: ${logging}\nport: ${port}\ndirectory: ${directory}`);
  } catch(e) {
    console.error(`Argument error: ${e.errorMessage()}\n`);
  } finally {
    process.exit();
  }
}

process.stdin.resume();
process.stdin.on('data', main);
