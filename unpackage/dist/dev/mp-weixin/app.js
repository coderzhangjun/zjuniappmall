"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
require("./service/category.js");
require("./service/index.js");
if (!Math) {
  "./pages/home/home.js";
  "./pages/home/cpns/home-swipe/home-swipe.js";
  "./pages/home/cpns/recommend/recommend.js";
  "./pages/cart/cart.js";
  "./pages/category/category.js";
  "./pages/detail/detail.js";
  "./pages/profile/profile.js";
  "./pages/home/cpns/shop/shop.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/test2023/mall/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(store_index.store);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
