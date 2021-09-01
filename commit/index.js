const { execSync } = require('child_process');

const tryExecSync = (cb) => {
  let result = '';
  try {
    result = cb();
  } catch (e) {
    result = e.message;
  }
  return result;
};

const add = () => tryExecSync(() => execSync('git add -A'));

const status = () => tryExecSync(() => execSync('git status --porcelain'));

const commit = () => tryExecSync(() => execSync('npx cz', { stdio: 'inherit' }));

const main = () => {
  add();
  status();
  commit();
};

main();
