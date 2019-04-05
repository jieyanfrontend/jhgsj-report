const {
  host
} = require('../../config/CONSTANT.js');
const bmap = require('../../baidumap/bmap-wx.min');
const app = getApp();

var wxMarkerData = [];
Page({
  data: {
    orgNameTable: ["请选择"],
    index: 0,
    visible: null,
    orgCodeTable: ['0'],
    addrTable: ['0'],
    ak: 'wgg7WQccrKS6KC7KrmICS1GbvdXaidmh',
    params: {
      org_name: '',
      org_code: '',
      admin: '',
      address: '',
      phone: '',
      code: '',
      getcode: ''
    },
    location: {
      lat: '',
      lng: '',
    },
    validator: false,
    url: null,
    phone_type: 1,
    btnText: '获取验证码'
  },
  selfSetData1: function(key, data) {
    let {
      params
    } = this.data;
    params.address = '';
    params.org_name = '';
    params.org_code = '';
    let newParams = Object.assign(params, {
      [key]: data
    });
    this.setData({
      params: newParams,
      visible: null,
      index: 0,
      orgNameTable: ["请选择"],
      orgCodeTable: ['0'],
      addrTable: ['0'],
    });
    this.checkIn(newParams);
    wx.setStorage({
      key: key,
      data: data
    });
  },
  selfSetData2: function(key, data) {
    let {
      params
    } = this.data;
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
    this.selfSetData1('org_name', e.detail.value);
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
    return /^[1][3,4,5,7,8][0-9]{9}$/.test(value);
  },
  checkIn: function(params) {
    // let {phone_type} = this.data;
    let requiredParams;
    // if (!phone_type) {
    //   requiredParams = ['phone'];
    // } else if (phone_type == 1) {
    //   requiredParams = ['org_code'];
    // } else {
    //   requiredParams = [
    //     'org_name',
    //     'org_code',
    //     'admin',
    //     'address',
    //     'code',
    //     'getcode'
    //   ];
    // }
    requiredParams = ['org_code', 'org_name', 'address'];
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
        if (key === 'phone' && !this.validatePhone(params[key])) {
          validator = false;
        } else if (!this.validateCommonParams(params[key])) {
          validator = false;
        }
      }
    }
    this.setData({
      validator
    });
    // console.log(validator);
  },

  /*添加报表*/
  addCheck: function() {
    let params = this.data.params;
    let phone_type = this.data.phone_type;
    let {
      location
    } = this.data;
    let that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        let latitude = res.latitude;
        let longitude = res.longitude;
        if (latitude !== '' && longitude !== '') {
          if ((latitude > 0 && latitude < 90) && (longitude > 0 && longitude < 180)) {
            app.globalData.latlng = {
              lat: '' + latitude,
              lng: '' + longitude
            };
          }
        } else {
          wx.showModal({
            title: '警告',
            content: '当前位置信号不稳定，GPS定位不准确',
            showCancel: false,
            confirmText: '请重试'
          })
        }
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
                    'scope.userLocation': false
                  };
                }
              });
            }
          }
        });
      }
    });
    let {
      latlng
    } = app.globalData;
    let {
      lat,
      lng
    } = latlng;
    if (!!lat && !!lng) {
      wx.request({
        url: `${host}/api/get_insider`,
        data: Object.assign({},
          params, {
            session_id: wx.getStorageSync('session_id')
          },
          app.globalData.latlng
        ),
        method: 'POST',
        success: function({
          data
        }) {
          app.globalData.latlng = {
            lat:'',
            lng:''
          }
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
      })
    } else {
    //   wx.showModal({
    //     title: '提示',
    //     content: '无法获取定位，请先允许小程序获取您的地理位置，如已打开，请重试',
    //     confirmText: '去设置',
    //     showCancel: false,
    //     success: function(res) {
    //       if (res.confirm) {
    //         wx.openSetting({
    //           success: res => {
    //             res.authSetting = {
    //               'scope.userLocation': true
    //             };
    //           }
    //         });
    //       }
    //     }
    //   });
    }
  },
  bindPickerChange: function(e) {
    let {
      params,
      addrTable,
      orgCodeTable,
      orgNameTable
    } = this.data;
    // let {org_name, org_code, address} = params
    let that = this;
    params.org_name = orgNameTable[e.detail.value];
    params.org_code = orgCodeTable[e.detail.value];
    params.address = addrTable[e.detail.value];
    that.checkIn(params);
    that.setData({
      index: e.detail.value,
      params: params,
      visible: false,
      // validator:true,
    })
    // console.log(params);
  },
  handleQuery: function() {
    const params = this.data.params;
    let orgNameTable = this.data.orgNameTable;
    let orgCodeTable = this.data.orgCodeTable;
    let addrTable = this.data.addrTable;
    wx.request({
      url: `${host}/api/auto_display`,
      method: 'POST',
      data: {
        org_code: params.org_code,
        admin: params.admin,
        org_name: params.org_name
      },
      success: ({
        data
      }) => {
        data = JSON.parse(data);

        if (data.code == 200) {
          const dataTable = data.data.table;
          orgNameTable = orgNameTable.concat(dataTable.map(v => v.enterprise_name));
          orgCodeTable = orgCodeTable.concat(dataTable.map(v => v.uni_soc_cre_code ? v.uni_soc_cre_code.trim() : v.bus_lic_code.trim()))
          addrTable = addrTable.concat(dataTable.map(v => v.regist_addr));
          let index = this.data.index;
          this.setData({
            orgNameTable: orgNameTable,
            orgCodeTable: orgCodeTable,
            addrTable: addrTable,
            visible: true
          })
        } else {
          wx.showModal({
            title: '提示',
            content: data.msg,
            showCancel: false
          });
        }
      },
      fail: ({
        data
      }) => {
        wx.showModal({
          title: '提示',
          content: data.msg,
          showCancel: false
        });
      }
    })
  },
  onHide: function() {
    if (this.data.phone_type) {
      wx.setStorageSync('phone_type', this.data.phone_type);
    }
  },
  onShow: function() {
    let insiderWorker = wx.getStorageSync('phone_type');
    // if (this.data.phone_type != 1) {
    //   this.setData({
    //     phone_type: null
    //   });
    // }
    if (!this.data.params.address) {
      this.setData({
        validator: null
      });
    }
    if (app.globalData.phoneType || insiderWorker) {
      this.setData({
        phone_type: 1
      });
    }
  },
  onPullDownRefresh: function() {
    wx.stopPullDownRefresh();
  },
  // testLocation: function(){
  //   wx.navigateTo({
  //     url: `../workplace/workplace`
  //   });
  // },
  /*监听离开输入框
blurInputEvent: function() {
  let {params, phone_type} = this.data;
  let that = this;
  if (phone_type == 0) {
    if (
      params.org_code !== '' &&
      params.admin !== '' &&
      params.phone !== '' &&
      params.code !== ''
    ) {
      clearTimeout(st1);
      var st1 = setTimeout(function() {
        wx.request({
          url: `${host}/api/auto_display`,
          data: {
            admin: params.admin,
            org_code: params.org_code
          },
          method: 'POST',
          success: (res) => {
            data = JSON.parse(res.data);
            console.log(data);
            if (data.code === 200) {
              let org_name = data.data.org_name;
              let address = data.data.address;
              params.org_name = org_name;
              params.address = address;
              that.setData({
                params: Object.assign(params, params)
              });
              console.log(params);
              that.checkIn(params);
            } else {
              console.log(data);
              wx.showModal({
                title: '提示',
                content: '请输入正确的负责人和统一社会信用代码',
                showCancel: false
              });
            }
          }
        });
      }, 1000);
    }
  } else if (phone_type == 1) {
    if (params.org_code !== '' || params.org_name !== '') {
      clearTimeout(st2)
      var st2 = setTimeout(function() {
        wx.request({
          url: `${host}/api/auto_display`,
          data: {
            org_code: params.org_code,
            org_name: params.org_name
          },
          method: 'POST',
          success: ({data}) => {
            data = JSON.parse(data);
            console.log(data);
            if (data.code === 200) {
              let org_name = data.data.org_name;
              let address = data.data.address;
              let code = data.data.org_code;
              params.org_name = org_name;
              params.address = address;
              params.org_code = code;
              that.setData({
                params: Object.assign(params, params)
              });
              console.log(params);
              that.checkIn(params);
            } else {
              wx.showModal({
                title: '提示',
                content: data.msg,
                showCancel: false
              });
            }
          }
        });
      }, 1000);
    }
  }
},
*/
  /*检测是否为内部人员
    checkPhone: function() {
      let {params, validator} = this.data;
      let phone = params.phone;
      let that = this;
      wx.request({
        url: `${host}/api/get_phone`,
        data: {phone},
        method: 'POST',
        success: function({data}) {
          data = JSON.parse(data);
          if (data.data.type == 1) {
            app.globalData.phoneType = true;
          }
          that.setData({
            phone_type: data.data.type,
            validator: false
          });
        }
      });
    },
  */
  /*获取验证码
    handleGetCode: function(e) {
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
  */
  /*      if (phone_type == 1) {
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
      } else {
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
      }*/

})