"use strict";
const common_vendor = require("../common/vendor.js");
const service_category = require("../service/category.js");
const store = common_vendor.createStore({
  state: {
    directoryDatas: [],
    directorySecondDatas: []
  },
  mutations: {
    add(state) {
      service_category.getDirectoryData().then((res) => {
        state.directoryDatas = res.data.data.category.list;
      });
    },
    addSecond(state, newDatas) {
      state.directorySecondDatas = newDatas;
      console.log(state.directorySecondDatas);
    }
  },
  actions: {
    directorySecondData(context, maitKey) {
      service_category.getDirectorySecondData(maitKey).then((res) => {
        context.commit("addSecond", res.data.data.list);
      });
    }
  }
});
exports.store = store;
