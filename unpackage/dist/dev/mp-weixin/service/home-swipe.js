"use strict";
const service_index = require("./index.js");
function getSwipeData() {
  return service_index.ZJrequest.request("/home/multidata");
}
exports.getSwipeData = getSwipeData;
