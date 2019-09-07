var wrench = require("wrench"),
  util = require("util");

var source = "./src/app/assets";
var target = "./dist/app/assets";

wrench.copyDirSyncRecursive(source, target, {
  forceDelete: true
});

console.log("Asset files successfully copied!");