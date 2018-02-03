// pages/information/information.js
Page({

 
  data: {

  
    requiredParams:{
      企业名称:'',
      统一社会信用代码:'',
      负责人:'',
      地址:'',
      手机:'',
      验证码:''
    },
    validator: 'init'
  },

  selfSetData: function(key, e){
    let { requiredParams } = this.data;
    this.setData({
      requiredParams: Object.assign(requiredParams, { [key]: e.detail.value })
    });
    this.checkIn();
  },
  handleName: function (e) {
    this.selfSetData('企业名称', e);
  },
  handleCode: function (e) {
    this.selfSetData('统一社会信用代码', e);

    this.setData({
      check3: e.detail.value
    })
    var regLowerCase = new RegExp('[a-z]', 'g');//判断用户输入的是否为小写字母
    var regCapitalLetter = new RegExp('[A-Z]', 'g');//判断用户输入的是否为大写字母
    var regNum = new RegExp('[0-9]', 'g');//判断用户输入的是否为数字
    var rsLowerCase = regLowerCase.exec(e.detail.value);
    var rsCapitalLetter = regCapitalLetter.exec(e.detail.value);
    var rsNum = regNum.exec(e.detail.value);
    if (rsLowerCase) {
      this.setData({
        result: '请注意大小写'
      })
    } else if (rsCapitalLetter) {
      this.setData({
        result: ''
      })
    } else if (rsNum) {
      this.setData({
        result: ''
      })
    } else {
      this.setData({
        result: '请输入数字或大写字母'
      })
    }



  },
  handleAdmin: function (e) {
    this.selfSetData('负责人', e);
  },
  handleAddress: function(e){
    this.selfSetData('地址', e);
  },
  handlePhone: function(e){
    this.selfSetData('手机', e);
  },
  handleCheckCode: function(e){
    this.selfSetData('验证码', e);
  },


  checkIn: function(){
    let { requiredParams} = this.data;
    let validator = '';
    for(let k in requiredParams ){
      if(requiredParams[k].length === 0){
        validator += k + '为空！' + ' ';
      }
    }
    this.setData({
      validator
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    wx.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
 

})
