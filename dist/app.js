"use strict";

//app.js
App({
  onLaunch: function onLaunch() {
    // 登录
    wx.login({
      success: function success(res) {
        console.log(res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    });
  },
  globalData: {
    userInfo: null
  }
});