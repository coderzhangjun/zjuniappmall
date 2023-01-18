"use strict";
require("../../../store/index.js");
const common_vendor = require("../../../common/vendor.js");
require("../../../service/category.js");
require("../../../service/index.js");
const _sfc_main = {
  data() {
    return {};
  },
  created() {
    console.log(this.$store.state.directorySecondData);
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(this.$store.state.directorySecondDatas, (item, index, i0) => {
      return {
        a: item.image,
        b: common_vendor.t(item.title),
        c: item.acm
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/test2023/mall/pages/category/cpns/topLists.vue"]]);
wx.createComponent(Component);
