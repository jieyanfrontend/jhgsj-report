const {host} = require('../../config/CONSTANT.js');
let handleImage = require('../../behaviors/handle_image');
const app = getApp();

Component({
  behaviors: [handleImage],
  methods: {
    goNext: function() {
      wx.showModal({
        title: '提示',
        content: '已上传认证信息，审核时间为3-5个工作日',
        showCancel: false,
        confirmText:app.globalData.phoneType ? '前往详情': '返回首页',
        success: ({confirm}) => {
          let { id } = this.data;
          if (confirm) {
            if(!app.globalData.phoneType){
              wx.reLaunch({
                url: `../detail/detail?id=${id}`
              });
            }
            wx.reLaunch({
              url: `../basic_message/basic_message`
            });
          }
        }
      });
    },
    getURL: function() {
      return `${host}/api/updatereport`;
    },
    getType: function() {
      return 'premise';
    }
  }
});
