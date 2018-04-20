const {host} = require('../../config/CONSTANT.js');
let handleImage = require('../../behaviors/handle_image');
Component({
  behaviors: [handleImage],
  methods: {
    goNext: function() {
      wx.showModal({
        title: '提示',
        content: '已上传认证信息，审核时间为3-5个工作日',
        showCancel: false,
        confirmText: '前往详情',
        success: ({confirm}) => {
          let { id } = this.data;
          if (confirm) {
            wx.reLaunch({
              url: '../detail/detail?id=&{id}'
            });
          }
        }
      });
    },
    getURL: function() {
      return `${host}/api/updatereport`;
    },
    getType: function() {
      return 'workplace';
    }
  }
});
