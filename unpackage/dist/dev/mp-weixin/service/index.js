"use strict";
const common_vendor = require("../common/vendor.js");
const BASE_URL = "http://152.136.185.210:7878/api/hy66";
class ZJrequest {
  request(url, method, params) {
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        url: BASE_URL + url,
        method: method || "GET",
        data: params,
        success: (res) => {
          resolve(res);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  }
  get(url, params) {
    return this.request(url, "GET", params);
  }
  post(url, params) {
    return this.request(url, "POST", params);
  }
}
const ZJrequest$1 = new ZJrequest();
exports.ZJrequest = ZJrequest$1;
