"use strict";
const service_index = require("./index.js");
function getSwipeData() {
  return service_index.ZJrequest.request("/home/multidata");
}
function getShopData(type, page) {
  console.log(type, page);
  return service_index.ZJrequest.get("/home/data", {
    type,
    page
  });
}
exports.getShopData = getShopData;
exports.getSwipeData = getSwipeData;
