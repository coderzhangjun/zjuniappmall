"use strict";
const common_vendor = require("./common/vendor.js");
const service_home = require("./service/home.js");
const _sfc_main = {
  __name: "home-swipe",
  setup(__props) {
    const swipeUrl = common_vendor.ref();
    service_home.getSwipeData().then((res) => {
      swipeUrl.value = res.data.data.banner.list;
      console.log(swipeUrl.value);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(swipeUrl.value, (item, index, i0) => {
          return {
            a: item.image
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uniappdemo/pages/home/cpns/home-swipe/home-swipe.vue"]]);
exports.Component = Component;
