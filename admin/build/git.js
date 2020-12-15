/* 获取git信息 */

const path = require("path");
const fs = require("fs");

const ROOT_PATH = path.resolve(__dirname + "/../");

function getCurrentBranchName() {
  // console.log(ROOT_PATH);
  // console.log(ROOT_PATH);

  let currPath = ROOT_PATH;
  let idx = 0;
  let find = false;
  try {
    while (idx < 2) {
      // console.log('path git:', currPath + '/.git');
      const stat = fs.existsSync(currPath + "/.git");
      if (stat) {
        find = true;
        break;
      }
      currPath = path.resolve(currPath + "/../");
      idx++;
    }
  } catch (e) {
    console.log(e);
  }
  if (!find) {
    throw new Error("找不到.git文件夹");
  }
  const gitPath = currPath + "/.git";
  // 读取HEAD文件
  const content = fs.readFileSync(gitPath + "/HEAD", "utf8");
  if (/\/((\w|-|\+|,| )*)\n*$/.test(content)) {
    return RegExp.$1.trim();
  }
  return "";
}

module.exports = {
  getCurrentBranchName
};
