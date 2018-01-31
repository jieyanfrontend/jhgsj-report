'use strict';

// pages/status/status.js


Page({

  /**
   * 页面的初始数据
   */
  data: {

    status: {},
    orgName: {},
    submitTime: {},

    statusList: [{
      status: false,
      orgName: "五邑大学",
      submitTime: '2018-01-29',
      orgID: '1'
    }, {
      status: true,
      orgName: "Codemao",
      submitTime: '2018-01-30',
      orgID: '2'
    }, {
      status: false,
      orgName: "江门移动",
      submitTime: '2018-01-28',
      orgID: '3'
    }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function onUnload() {
    this.setData({
      icon20: base64.icon20,
      icon60: base64.icon60
    });
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function onShareAppMessage() {}
});