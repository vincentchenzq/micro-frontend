const moduleFiles = require.context(".", false, /\.json$/);
export default moduleFiles.keys().reduce((prev, cur) => {
  // cur是 ./page1.json 这样，所以简单的替换 ./ 和.json 就得到了pageId
  prev[cur.replace("./", "").replace(".json", "")] = moduleFiles(cur);
  return prev;
}, {});
