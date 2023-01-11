"use strict";
const common_vendor = require("./common/vendor.js");
const _sfc_main = {
  __name: "recommend",
  props: {
    imageUrl: {
      default: [],
      type: Array
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.imageUrl, (item, index, i0) => {
          return {
            a: item.image,
            b: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/test2023/mall/pages/home/cpns/recommend/recommend.vue"]]);
exports.Component = Component;
