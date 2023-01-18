"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "tab-control",
  props: {
    barlist: {
      default: [],
      type: Array
    }
  },
  setup(__props) {
    const barDatas = __props;
    let currentIndex = common_vendor.ref(0);
    const itemClick = (index) => {
      currentIndex.value = index;
    };
    common_vendor.watch(currentIndex, (newvalue) => {
      common_vendor.index.$emit("getCurrentIndex", newvalue);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(barDatas.barlist, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.unref(currentIndex) === index ? 1 : "",
            c: common_vendor.o(($event) => itemClick(index), index),
            d: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uniappdemo/components/tab-control/tab-control.vue"]]);
wx.createComponent(Component);
