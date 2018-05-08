let {host} = require('../../config/CONSTANT.js');
Page({
  data: {
    id: null,
    detail: {},
    imgUrls: []
  },

  onLoad: function(params) {
    this.setData({
      id: params.id
    });
    this.viewDetail(params.id);
  },
  viewDetail: function(id) {
    let that = this;
    wx.request({
      url: `${host}/api/get_report`,
      data: {
        id: id,
        session_id: wx.getStorageSync('session_id')
      },
      method: 'post',
      success: function({data}) {
        let ret = JSON.parse(data);
        console.log(ret);
				let detail = ret.table[0] || {};
        let {license_url, premise_url, workplace_url} = detail;
        detail.license_url =  `${host}/${license_url}`;
        detail.premise_url = `${host}/${premise_url}`;
        detail.workplace_url = `${host}/${workplace_url}`;
        let imgUrls = [
          detail.license_url,
          detail.premise_url,
          detail.workplace_url
        ];
        if (ret.code == 200) {
          that.setData({
            detail: detail,
            imgUrls: imgUrls
          });
          // console.log(imgUrls);
        }
      }
    });
  },
  previewImg: function(e) {
    let dataset = e.target.dataset;
    let {imgUrls} = this.data;
    wx.previewImage({
      current: dataset.src,
      urls: imgUrls
    });
  },
  showModal: function() {
    let that = this;
    wx.showModal({
      title: '撤回',
      content: '撤回信息后将需要重新填写上传',
      success: function({confirm}) {
        if (confirm) {
          that.withdraw();
        }
      }
    });
  },
  withdraw: function() {
    let {id} = this.data;
    let session_id = wx.getStorageSync('session_id');
    wx.request({
      url: `${host}/api/goback`,
      method: 'post',
      data: {
        id: parseInt(id),
        // type: 'cancel',
        session_id: session_id
      },
      success: function(res) {
        console.log(res);
        if (res.statusCode == 200) {
          wx.reLaunch({
            url: '../basic_message/basic_message'
          });
        }
      }
    });
  },
	goback: function(){
		wx.switchTab({
			url: '../status/status',
		})
	},
  onPullDownRefresh: function() {
    wx.stopPullDownRefresh();
  }
});
