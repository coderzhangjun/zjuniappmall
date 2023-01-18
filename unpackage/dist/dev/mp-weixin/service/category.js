"use strict";
const service_index = require("./index.js");
function getDirectoryData() {
  return service_index.ZJrequest.request("/category");
}
function getDirectorySecondData(maitKey) {
  return service_index.ZJrequest.get("/subcategory", { maitKey });
}
exports.getDirectoryData = getDirectoryData;
exports.getDirectorySecondData = getDirectorySecondData;
