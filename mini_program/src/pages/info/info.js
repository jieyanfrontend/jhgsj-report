// src/pages/info/info.js
Page({
  goNext: function() {
    wx.showModal({
      title: '提示',
      content: '请再次确认是否已经打开GPS',
      showCancel: false,
      success: () => {
        wx.switchTab({
          url: '../basic_message/basic_message'
        });
      }
    });

  }
})
