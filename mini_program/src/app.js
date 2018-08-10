//app.js
const {host} = require('./config/CONSTANT.js');
App({
  globalData: {
    latlng: {}
  },
  onLaunch: function() {
    wx.login({
      success: e => {
        wx.request({
          url: `${host}/api/login`,
          method: 'POST',
          data: {
            code: e.code
          },
          success: e => {
            try {
              let data = JSON.parse(e.data);
              wx.setStorageSync('session_id', data.session_id);
            } catch (e) {
              // console.error(e);
            }
          }
        });
      },
      fail: function(res) {
        wx.showModal({
          titie: '提示',
          content: '必须授权登录之后才能操作',
          showCancel: false,
          success: function(res) {
            if (res.confirm) {
              wx.openSetting({
                success: res => {
                  res.authSetting = {
                    'scope.userInfo': true
                  };
                }
              });
            }
          }
        });
      }
    });
  },
  onShow: function(){
  },
});
