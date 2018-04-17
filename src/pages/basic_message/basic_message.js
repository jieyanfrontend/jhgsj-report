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
      session_id:'',
      getcode:''
    },
    validator: false,
    url: null,
    btnText:'获取验证码',
    refreshText:'刷新验证码'
  },
  selfSetData: function(key, data){
    let { params } = this.data;
    console.log(params);
    this.setData({
      params: Object.assign(params, {
        [key]: data
      })
    });
    this.checkIn();
    wx.setStorage({
      key: key,
      data: data
    });
  },
  handleOrgName: function (e) {
    this.selfSetData('org_name', e.detail.value);
  },
  handleRegisterCode: function (e) {
    this.selfSetData('org_code', e.detail.value);
  },
  handleAdmin: function (e) {
    this.selfSetData('admin', e.detail.value);
  },
  handleAddress: function(e){
    this.selfSetData('address', e.detail.value);
  },
  handlePhone: function(e){
    this.selfSetData('phone', e.detail.value);
  },
  handleCheckCode: function(e){
    this.selfSetData('code', e.detail.value);
  },
  validateRegisterCode: function(value){
    return /^[0-9A-Z]{15}$/.test(value);
  },
  validateCommonParams: function(value){
    return !!value.length
  },
  validatePhone: function(value){
    return /^[1][3,4,5,7,8][0-9]{9}$/.test(value); 
  },
  checkIn: function(){
    let { params } = this.data;
    let validator = true;
    console.log(validator);
    for(let key in params){
      if(key === 'org_code' && !this.validateRegisterCode(params[key])){
        validator = false;
      }else if(!this.validateCommonParams(params[key])){
        validator = false;
      }
      
    }
    this.setData({
        validator
    });
  },
  addCheck: function(){
    let data = this.data.params;
    data = Object.assign(data,app.globalData.latlng);
      wx.request({
          url: `${host}/api/add_report`,
          data: data,
          method: "POST",
          header: {
            "content-type": "application/json"
          },
          success: function({data}){
              console.log(data);
              data = JSON.parse(data);
            if(data.code === 200){
              let id = data.data.id;
              wx.navigateTo({
                url: `../explain/explain?id=${id}`,
              })
            }else{
                console.log(data);
                wx.showModal({
                    title: '提示',
                    content: data.msg,
                    showCancel: false
                })
            }
          }
      })
  },
    onLoad:function(){

  },
    onShow: function(){
        let that = this;
        that.setData({
          params:{},
          url:null
        })
        wx.getStorage({
            key: 'session_id',
            success: res => {
                const params = that.data.params;
                params.session_id = res.data
            }
        });
        wx.getLocation({
            success: function(res) {
                    app.globalData.latlng = {
                      lat : '' + res.latitude,
                      lng : '' + res.longitude
                    }
            },
            fail: function () {
                wx.showModal({
                    title: '提示',
                    content: '请先允许我们获取您的地理位置',
                    confirmText: '去设置',
                    showCancel: false,
                    success : function(res){
                        if(res.confirm){
                            wx.openSetting({
                                success: (res) => {
                                    res.authSetting = {
                                        "scope.userLocation": true
                                    }
                                }
                            })
                        }
                    }
                })
            }
    })
  },
  handleGetcode: function(e){
    let that = this;
    const params = that.data.params;
    wx.request({
      url: `${host}/api/get_code`,
      method: 'POST',
      success: function(res){
        console.log(res);
        res.data = JSON.parse(res.data);
        params.getcode = res.data.data;
        if(res.data.code == 200){
          let getcode = params.getcode;
          that.setData({
            url: `${host}/img_yz.ashx?getcode=${params.getcode}`,
            getcode: res.data.data
          })
          console.log(params);
        }
        // console.log(params.getcode)
      }
      }
    )
  },

  onPullDownRefresh: function(){
    wx.stopPullDownRefresh();
  }
});
