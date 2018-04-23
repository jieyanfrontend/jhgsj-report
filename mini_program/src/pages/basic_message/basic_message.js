const {host} = require('../../config/CONSTANT.js');
const app = getApp();
Page({
  data: {
    params: {
      org_name: '',
      org_code: '',
      admin: '',
      address: '',
      phone: '',
      code: '',
      getcode: ''
    },
    validator: false,
    url: null,
    btnText: '获取验证码'
  },
  selfSetData: function(key, data) {
    let {params} = this.data;
    let newParams = Object.assign(params, {
      [key]: data
    });
    this.setData({
      params: newParams
    });
    this.checkIn(newParams);
    wx.setStorage({
      key: key,
      data: data
    });
  },
  handleOrgName: function(e) {
    this.selfSetData('org_name', e.detail.value);
  },
  handleRegisterCode: function(e) {
    this.selfSetData('org_code', e.detail.value);
  },
  handleAdmin: function(e) {
    this.selfSetData('admin', e.detail.value);
  },
  handleAddress: function(e) {
    this.selfSetData('address', e.detail.value);
  },
  handlePhone: function(e) {
    this.selfSetData('phone', e.detail.value);
  },
  handleCheckCode: function(e) {
    this.selfSetData('code', e.detail.value);
  },
  validateRegisterCode: function(value) {
    return /^[0-9A-Z]{15}$/.test(value);
  },
  validateCommonParams: function(value) {
    return !!value.length;
  },
  validatePhone: function(value) {
    console.log(value);
    //return /^[1][3,4,5,7,8][0-9]{9}$/.test(value);
  },
  checkIn: function(params) {
    let requiredParams = [
      'org_name',
      'org_code',
      'admin',
      'address',
      'phone',
      'code',
      'getcode'
    ];
    let validator = true;
    for (let i = 0; i < requiredParams.length; i++) {
      let key = requiredParams[i];
      if (!params[key]) {
        validator = false;
        break;
      } else {
        if (key === 'org_code' && !this.validateRegisterCode(params[key])) {
          validator = false;
        } else if (!this.validateCommonParams(params[key])) {
          validator = false;
        }
      }
    }
    this.setData({
      validator
    });
  },
  addCheck: function() {
    let params = this.data.params;
    let that = this;
    wx.request({
      url: `${host}/api/add_report`,
      data: Object.assign(
        {},
        params,
        {
          session_id: wx.getStorageSync('session_id')
        },
        app.globalData.latlng
      ),
      method: 'POST',
      success: function({data}) {
        data = JSON.parse(data);
        if (data.code === 200) {
          that.setData({
            params: {}
          });
          let id = data.data.id;
          wx.navigateTo({
            url: `../license/license?id=${id}`
          });
        } else {
          wx.showModal({
            title: '提示',
            content: data.msg,
            showCancel: false
          });
        }
      }
    });
  },
  onShow: function() {
    wx.getLocation({
			altitude: true,
      success: function(res) {
        app.globalData.latlng = {
          lat: '' + res.latitude,
          lng: '' + res.longitude
        };
      },
      fail: function() {
        wx.showModal({
          title: '提示',
          content: '请先允许我们获取您的地理位置',
          confirmText: '去设置',
          showCancel: false,
          success: function(res) {
            if (res.confirm) {
              wx.openSetting({
                success: res => {
                  res.authSetting = {
                    'scope.userLocation': true
                  };
                }
              });
            }
          }
        });
      }
    });
  },
  handleGetcode: function(e) {
    let that = this;
    const params = that.data.params;
    wx.request({
      url: `${host}/api/get_code`,
      method: 'POST',
      success: function({data}) {
        data = JSON.parse(data);
        if (data.code == 200) {
          let getcode = params.getcode;
          that.setData({
            url: `${host}/img_yz.ashx?getcode=${data.data}`,
            params: {
              ...params,
              getcode: data.data
            }
          });
        }
      }
    });
  },

  onPullDownRefresh: function() {
    wx.stopPullDownRefresh();
  }
});
