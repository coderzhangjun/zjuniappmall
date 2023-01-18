"use strict";
const common_vendor = require("../../common/vendor.js");
const service_home = require("../../service/home.js");
require("../../service/index.js");
const homeSwipe = () => "./cpns/home-swipe/home-swipe2.js";
const tabControl = () => "../../components/tab-control/tab-control.js";
const recommend = () => "./cpns/recommend/recommend2.js";
const shop = () => "./cpns/shop/shop2.js";
const _sfc_main = {
  data() {
    return {
      recommendDatas: [],
      shopDatas: [],
      currentIndex: 0,
      typeArray: [
        {
          type: "pop",
          page: 1,
          datas: []
        },
        {
          type: "new",
          page: 1,
          datas: []
        },
        {
          type: "sell",
          page: 1,
          datas: []
        }
      ]
    };
  },
  components: {
    homeSwipe,
    tabControl,
    recommend,
    shop
  },
  created() {
    service_home.getSwipeData().then((res) => {
      this.recommendDatas = res.data.data.recommend.list;
    });
    service_home.getShopData(this.typeArray[this.currentIndex].type, this.typeArray[this.currentIndex].page).then((res) => {
      let requestDatas = res.data.data.list;
      requestDatas.forEach((item) => {
        this.typeArray[this.currentIndex].datas.push(item);
      });
    });
  },
  onShow() {
    common_vendor.index.$on("getCurrentIndex", (index) => {
      this.currentIndex = index;
      service_home.getShopData(this.typeArray[this.currentIndex].type, this.typeArray[this.currentIndex].page).then(
        (res) => {
          let requestDatas = res.data.data.list;
          requestDatas.forEach((item) => {
            this.typeArray[this.currentIndex].datas.push(item);
          });
        }
      );
    });
  },
  onReachBottom() {
    service_home.getShopData(this.typeArray[this.currentIndex].type, this.typeArray[this.currentIndex].page).then(
      (res) => {
        let requestDatas = res.data.data.list;
        requestDatas.forEach((item) => {
          this.typeArray[this.currentIndex].datas.push(item);
        });
        this.typeArray[this.currentIndex].page++;
      }
    );
  },
  onPullDownRefresh() {
    this.typeArray[this.currentIndex].page = 1;
    service_home.getShopData(this.typeArray[this.currentIndex].type, this.typeArray[this.currentIndex].page).then(
      (res) => {
        let requestDatas = res.data.data.list;
        this.typeArray[this.currentIndex].datas = requestDatas;
      }
    );
    common_vendor.index.stopPullDownRefresh();
  }
};
if (!Array) {
  const _component_homeSwipe = common_vendor.resolveComponent("homeSwipe");
  const _component_recommend = common_vendor.resolveComponent("recommend");
  const _easycom_tab_control2 = common_vendor.resolveComponent("tab-control");
  const _component_shop = common_vendor.resolveComponent("shop");
  (_component_homeSwipe + _component_recommend + _easycom_tab_control2 + _component_shop)();
}
const _easycom_tab_control = () => "../../components/tab-control/tab-control.js";
if (!Math) {
  _easycom_tab_control();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      imageUrl: $data.recommendDatas
    }),
    b: common_vendor.p({
      barlist: ["\u6D41\u884C", "\u65B0\u6B3E", "\u7CBE\u9009"]
    }),
    c: common_vendor.p({
      shopDatas: $data.typeArray[$data.currentIndex].datas
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/test2023/mall/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
