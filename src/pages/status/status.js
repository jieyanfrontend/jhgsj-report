// let { host } = require('../../config/CONSTANT.js');
Page({
    data: {
      statusList: [{
          status: '未通过',
          orgName: '五邑大学',
          post_time: '2018-02-07',
          id: 2
      }]
    },
    onLoad: function(){
        this.getList();
    },
    onPullDownRefresh: function(){
      this.getList(function(){
        wx.stopPullDownRefresh();
      });
    },
    getList: function(cb){
      let that = this;
      wx.showLoading({
        title: 'loading...',
        mask: true
      });
      let session_id = wx.getStorageSync('session_id');
      wx.request({
        url: 'https://www.lifuzhao100.cn/api/wx/get_report_list',
        data:{
          session_id: session_id,
        },
        method: 'POST',
        success: function (res) {
          let { code, data } = res.data;
          let decodeData = data.map(obj => {
            let ret = {};
            for (let k in obj) {
              // ret[k] = decodeURIComponent(obj[k]);
              ret[k] = obj[k];
            }
            return ret;
          });
          if (code === 200) {
            that.setData({
              statusList: decodeData
            });
          }
        
        },
        fail: function (res) {

        },
        complete: function () {
          wx.hideLoading();
          if(typeof cb === 'function'){
            cb();
          }
        }
      })
    },
    viewDetail: function(e){
        let id = e.target.id;
        wx.navigateTo({
            url: `../detail/detail?id=${id}`
        });
    }
});