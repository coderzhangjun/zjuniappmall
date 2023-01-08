"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  homeSwipe();
}
const homeSwipe = () => "./cpns/home-swipe/home-swipe2.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uniapp\u9879\u76EE/hymall/hymall-zj/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
