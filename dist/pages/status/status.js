"use strict";

var _Page;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// pages/status/status.js


Page((_Page = {
  onLoad: function onLoad() {
    this.setData({
      icon20: base64.icon20,
      icon60: base64.icon60
    });
  },

  /**
   * 页面的初始数据
   */
  data: {}

}, _defineProperty(_Page, "onLoad", function onLoad(options) {}), _defineProperty(_Page, "onReady", function onReady() {}), _defineProperty(_Page, "onShow", function onShow() {}), _defineProperty(_Page, "onHide", function onHide() {}), _defineProperty(_Page, "onUnload", function onUnload() {}), _defineProperty(_Page, "onPullDownRefresh", function onPullDownRefresh() {}), _defineProperty(_Page, "onReachBottom", function onReachBottom() {}), _defineProperty(_Page, "onShareAppMessage", function onShareAppMessage() {}), _Page));