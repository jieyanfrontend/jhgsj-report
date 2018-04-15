const {host} = require('../../config/CONSTANT.js')
Page({
  data: {
    params: {
      org_name: '',
      org_code: '',
      admin: '',
      address: '',
      phone: '',
      code: '',
      lng:'',
      lat:'',
      session_id:''
    },
    validator: false
  },
  selfSetData: function(key, data){
    let { params } = this.data;
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

    // this.setData({
    //   check3: e.detail.value
    // })
    // var regLowerCase = new RegExp('[a-z]', 'g');//判断用户输入的是否为小写字母
    // var regCapitalLetter = new RegExp('[A-Z]', 'g');//判断用户输入的是否为大写字母
    // var regNum = new RegExp('[0-9]', 'g');//判断用户输入的是否为数字
    // var rsLowerCase = regLowerCase.exec(e.detail.value);
    // var rsCapitalLetter = regCapitalLetter.exec(e.detail.value);
    // var rsNum = regNum.exec(e.detail.value);
    // if (rsLowerCase) {
    //   this.setData({
    //     result: '请注意大小写'
    //   })
    // } else if (rsCapitalLetter) {
    //   this.setData({
    //     result: ''
    //   })
    // } else if (rsNum) {
    //   this.setData({
    //     result: ''
    //   })
    // } else {
    //   this.setData({
    //     result: '请输入数字或大写字母'
    //   })
    // }
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
    return /^[0-9A-Z]{1,}$/.test(value);
  },
  validateCommonParams: function(value){
    return !!value.length
  },
  checkIn: function(){
    let { params } = this.data;
    // console.log(params);
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
      wx.request({
          url: `${host}/api/add_report`,
          data: data,
          method: "POST",
          header: {
            "content-type": "application/json"
          },
          success: function({data}){
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
    onShow: function(){
        let that = this;
        wx.getStorage({
            key: 'session_id',
            success: res => {
                const params = that.data.params;
                params.session_id = res.data
            }
        });
        wx.getLocation({
            success: function(res) {
              const params = that.data.params;
                let latLng = {
                  lat: '' + res.latitude,
                  lng: '' + res.longitude,
                }
                    that.setData({
                    params:Object.assign(params, latLng)
                })
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
  onLoad: function(){
    let aaa = '<%=Session["dt__session_code"] %>';
  },

  onPullDownRefresh: function(){
    wx.stopPullDownRefresh();
  }
});
