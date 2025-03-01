const { execSync } = require('child_process');
const path = require('path');
const chalk = require('chalk');

const forbiddenChar = '-';
const includeDirs = ['src/'];

// 获取本次提交中新增的文件和目录列表
const gitStatusOutput = execSync(
  'git diff --cached --name-only --diff-filter=A',
  { encoding: 'utf-8' },
).trim();
const newFilesAndDirs = gitStatusOutput
  .split('\n')
  .filter((item) =>
    includeDirs
      .some((dir) => item.startsWith(dir))
      .map((item) => splitPathIntoArray(item).slice(0, -1)),
  );

// 检查文件夹名称是否包含短横线
let hasInvalidFolderName = false;

Array.from(new Set(newFilesAndDirs.flat())).forEach((entry) => {
  if (entry.includes(forbiddenChar)) {
    console.log(
      `${chalk.red('ERROR')}: Folder <${chalk.cyan(
        entry,
      )}> contains the forbidden character '${forbiddenChar}'.`,
    );
    hasInvalidFolderName = true;
  }
});

if (hasInvalidFolderName) {
  process.exit(1); // 退出脚本并返回非零状态码，表示有错误发生
} else {
  console.log('Folder name check passed.');
  process.exit(0); // 退出脚本并返回零状态码，表示一切正常
}

function splitPathIntoArray(fullPath) {
  let currentPath = fullPath;
  const pathParts = [];

  while (currentPath !== '.') {
    const basename = path.basename(currentPath);
    pathParts.unshift(basename);

    currentPath = path.dirname(currentPath);
  }

  return pathParts;
}
