#!/usr/bin/env node
const spawn = require('cross-spawn');
const path = require('path');
const fs = require('fs');

const args = process.argv.slice(2);

const scriptIndex = args.findIndex(x => x === 'start');
const script = scriptIndex === -1 ? args[0] : args[scriptIndex];
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : [];

const projectDir = path.resolve(fs.realpathSync(process.cwd()));
const mockDir = path.resolve(projectDir, 'mock');

if (['test', 'prod'].indexOf(args[1]) === -1) {
  console.log(
    'you should run: "td-mock-proxy start test" or ' +
    '"td-mock-proxy start prod"'
  );
  return;
}

switch (script) {
  case 'start': {
    const result = spawn.sync(
      path.join(__dirname, '..','node_modules', '.bin', 'nodemon'),
      nodeArgs
        .concat(require.resolve('../server/app'))
        .concat(['--watch', mockDir])
        .concat(args.slice(scriptIndex + 1)),
      { stdio: 'inherit' }
    );
    console.log(result);
    if (result.signal) {
      if (result.signal === 'SIGKILL') {
        console.log(
          'The build failed because the process exited too early. ' +
            'This probably means the system ran out of memory or someone called ' +
            '`kill -9` on the process.'
        );
      } else if (result.signal === 'SIGTERM') {
        console.log(
          'The build failed because the process exited too early. ' +
            'Someone might have called `kill` or `killall`, or the system could ' +
            'be shutting down.'
        );
      }
      process.exit(1);
    }
    process.exit(result.status);
    break;
  }
  default: {
    console.log('Unknown script "' + script + '".');
    console.log('Perhaps you need to update td-mock-proxy?');
    break;
  }
}
