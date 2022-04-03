const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

//设置跨域访问
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// 获取国际化数据，返回以pageId作为key的国际化语言，实际情况有同时获取多个页面国际化的场景
app.get("/i18n/pageId/:pageId", function (req, res) {
  const { pageId } = req.params;
  // 实际上是从cookie中获取的语言，此处就直接写死
  const lang = "zh";
  // 实际上是从数据库获取的，但是此时就直接使用本地文件模拟从数据库获取
  res.send({
    [pageId]: JSON.parse(
      fs.readFileSync(
        path.resolve(process.cwd(), "i18nData", `${pageId}-${lang}.json`)
      )
    ),
  });
});
app.listen(port, () => {
  console.log(`i18n server listening on port ${port}`);
});
