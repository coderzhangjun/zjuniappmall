"use strict";
require("../../store/index.js");
const common_vendor = require("../../common/vendor.js");
require("../../service/category.js");
require("../../service/index.js");
const topLists = () => "./cpns/topLists.js";
const _sfc_main = {
  data() {
    return {
      scrollTop: 0,
      old: {
        scrollTop: 0
      },
      maitKey: 3627
    };
  },
  components: {
    topLists
  },
  created() {
    this.$store.commit("add");
    this.$store.dispatch("directorySecondData", this.maitKey);
    console.log(this.maitKey);
  },
  methods: {
    itemClick(maitKey) {
      this.maitKey = maitKey;
      console.log(maitKey);
      this.$store.dispatch("directorySecondData", this.maitKey);
    }
  }
};
if (!Array) {
  const _component_top_lists = common_vendor.resolveComponent("top-lists");
  _component_top_lists();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(this.$store.state.directoryDatas, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.o(($event) => $options.itemClick(item.maitKey), item.miniWallkey),
        c: item.miniWallkey
      };
    }),
    b: $data.scrollTop,
    c: $data.scrollTop
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/test2023/mall/pages/category/category.vue"]]);
wx.createPage(MiniProgramPage);
