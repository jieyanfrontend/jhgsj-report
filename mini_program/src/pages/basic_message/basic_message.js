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
    phone_type: null,
    btnText: '获取验证码'
  },
  selfSetData1: function(key, data) {
    let {params} = this.data;
    params.address = '';
    params.org_name = '';
    params.code = ''
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
  selfSetData2: function(key, data) {
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
    this.selfSetData2('org_name', e.detail.value);
  },
  handleRegisterCode: function(e) {
    this.selfSetData1('org_code', e.detail.value);
  },
  handleAdmin: function(e) {
    this.selfSetData1('admin', e.detail.value);
  },
  handleAddress: function(e) {
    this.selfSetData2('address', e.detail.value);
  },
  handlePhone: function(e) {
    this.selfSetData1('phone', e.detail.value);
  },
  handleCheckCode: function(e) {
    this.selfSetData2('code', e.detail.value);
  },
  validateRegisterCode: function(value) {
    return /(^[0-9A-Z]{15}$)|(^[0-9A-Z]{18}$)/.test(value);
  },
  validateCommonParams: function(value) {
    return !!value.length;
  },
  validatePhone: function(value) {
    console.log(value);
    return /^[1][3,4,5,7,8][0-9]{9}$/.test(value);
  },
  checkIn: function(params) {
    let {phone_type} = this.data;
    let requiredParams;
    if(!phone_type){
       requiredParams = [
        'phone'
      ]
    }else if(phone_type == 1 ){
      requiredParams = [
        'org_code'
        ]
    }else{
       requiredParams = [
      'org_name',
      'org_code',
      'admin',
      'address',
      'code',
      'getcode'
    ];
    }
    let validator = true;
    for (let i = 0; i < requiredParams.length; i++) {
      let key = requiredParams[i];
      if (!params[key]) {
        validator = false;
        break;
      } else {
        if (key === 'org_code' && !this.validateRegisterCode(params[key])) {
          validator = false;
        }
        if (key ==='phone' && !this.validatePhone((params[key]))){
          validator = false;
        }
        else if (!this.validateCommonParams(params[key])) {
          validator = false;
        }
      }
    }
    this.setData({
      validator
    });
  },
  blurInputEvent:function(){
    let {params, phone_type} = this.data;
    let that = this;
    if(phone_type == 0){
      if(params.org_code !== "" && params.admin !== "" && params.phone !== "" && params.code !== ""){
      wx.request({
        url: `${host}/api/auto_display`,
        data: {
          admin: params.admin,
          org_code: params.org_code
        },
        method: 'POST',
        success: ({data}) => {
          data = JSON.parse(data);
          if (data.code === 200) {
            let org_name = data.data.org_name;
            let address = data.data.address;
            params.org_name = org_name;
            params.address = address;
            that.setData({
              params: Object.assign(params,params)
            });
            console.log(params);
            that.checkIn(params);
          } else {
            wx.showModal({
              title: '提示',
              content: '请输入正确的负责人和统一社会信用代码',
              showCancel: false
            });
          }
        }
      });
    }
    }
    else if(phone_type == 1){
      if(params.org_code !== "" || params.org_name !== ""){
        wx.request({
          url: `${host}/api/auto_display`,
          data: {
            org_code: params.org_code,
            org_name: params.org_name,
          },
          method: 'POST',
          success: ({data}) => {
            data = JSON.parse(data);
            if (data.code === 200) {
              let org_name = data.data.org_name;
              let address = data.data.address;
              let code = data.data.org_code;
              params.org_name = org_name;
              params.address = address;
              params.org_code = code;
              that.setData({
                params: Object.assign(params,params)
              });
              console.log(params);
              that.checkIn(params);
            } else {
              wx.showModal({
                title: '提示',
                content: '请输入正确的统一社会信用代码',
                showCancel: false
              });
              // that.setData({
              //   params: {}
              // })
            }
          }
        });
      }

    }
  },
  // getInformation: function() {
  //   let params = this.data.params;
  //   let that = this;
  //   wx.request({
  //     url: `${host}/api/auto_display`,
  //     data: {
  //       admin: params.admin,
  //       org_code: params.org_code
  //     },
  //     method: 'POST',
  //     success: ({data}) => {
  //       console.log(data);
  //       data = JSON.parse(data);
  //       if (data.code === 200) {
  //         console.log(data);
  //         params.org_name = data.data.org_name;
  //         params.address = data.data.address;
  //         that.setData({
  //           params: Object.assign(params, params.org_name, params.address)
  //         });
  //       } else {
  //         wx.showModal({
  //           title: '提示',
  //           content: '请输入正确的负责人和统一社会信用代码',
  //           showCancel: false
  //         });
  //         // that.setData({
  //         //   params: {}
  //         // })
  //       }
  //     }
  //   });
  // },

  checkPhone: function(){
    let {params ,validator} = this.data;
    let phone = params.phone;
    let that = this;
    wx.request({
      url:`${host}/api/get_phone`,
      data: {phone},
      method:'POST',
      success: function({data}){
        console.log(data);
        data = JSON.parse(data);
        console.log(data);
        // app.globalData.phone_type = data.data.type;
        that.setData({
            phone_type:data.data.type,
            validator: false
        })
      }
    })
  },
  addCheck: function() {
    let params = this.data.params;
    let phone_type = this.data.phone_type;
    let that = this;
    if(phone_type == 1){
      wx.request({
        url: `${host}/api/get_insider`,
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
    }else{
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

    }
  },
  onShow: function() {
    if(this.data.phone_type != 1){
      this.setData({
      phone_type: null,
    })}
    this.setData({
      validator: null,
    })
    // console.log(this.data);
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
