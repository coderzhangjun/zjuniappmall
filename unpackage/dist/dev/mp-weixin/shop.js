"use strict";
const common_vendor = require("./common/vendor.js");
const _sfc_main = {
  props: {
    shopDatas: {
      default: {},
      type: Object
    }
  },
  onPullDownRefresh() {
    console.log(1111);
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.shopDatas, (item, index, i0) => {
      return {
        a: item.showLarge.img,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.price),
        d: common_vendor.t(item.cfav),
        e: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/test2023/mall/pages/home/cpns/shop/shop.vue"]]);
exports.Component = Component;
