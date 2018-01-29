"use strict";

//app.js
App({
  onLaunch: function onLaunch() {
    // 登录
    // wx.login({
    //   success: res => {
    //     console.log(res);
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
  },
  onShow: function onShow() {
    // wx.login({
    //   success: (res) => {
    //     console.log(res);
    //   }
    // });
  },
  globalData: {
    userInfo: null
  }
});