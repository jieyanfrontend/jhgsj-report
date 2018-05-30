let {host} = require('../../config/CONSTANT.js');
Page({
  data: {
    statusList: []
  },
  onLoad: function() {
    this.getList();
  },
  onShow: function() {
    this.getList();
  },
  onPullDownRefresh: function() {
    this.getList(function() {
      wx.stopPullDownRefresh();
    });
  },
  getList: function(cb) {
    let that = this;
    wx.showLoading({
      title: 'loading...',
      mask: true
    });
    wx.request({
      url: `${host}/api/get_report_list`,
      data: {
        session_id: wx.getStorageSync('session_id')
      },
      method: 'POST',
      success: function(res) {
        let {code, table} = JSON.parse(res.data);
        // console.log(table);
        // console.log(res.data);
        // console.log(JSON.parse(res.data));
        // console.log(code);
        // console.log(table);
        if (code == 200) {
          that.setData({
            statusList: table
          });
        }
      },
      fail: function(res) {},
      complete: function() {
        wx.hideLoading();
        if (typeof cb === 'function') {
          cb();
        }
      }
    });
  },
  viewDetail: function(e) {
    let id = e.target.id;
    wx.navigateTo({
      url: `../detail/detail?id=${id}`
    });
  }
});
