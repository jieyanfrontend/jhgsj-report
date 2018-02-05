// pages/information/information.js
Page({

 
  data: {

  
    requiredParams:{
      name:'',
      register_code:'',
      admin:'',
      address:'',
      phone:'',
      code:''
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
    this.selfSetData('name', e);
  },
  handleCode: function (e) {
    this.selfSetData('register_code', e);

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
    this.selfSetData('admin', e);
  },
  handleAddress: function(e){
    this.selfSetData('address', e);
  },
  handlePhone: function(e){
    this.selfSetData('phone', e);
  },
  handleCheckCode: function(e){
    this.selfSetData('code', e);
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
  addCheck: function(){
    let data = this.data.requiredParams;
      wx.request({
          url: 'https://www.lifuzhao100.cn/api/addCheck',
          data: data,
          method: "POST",
          header: {
            "content-type": "application/json"
          },
          success: function({data}){
            if(data.errcode === 0){
              wx.redirectTo({
                url: `../photo1/photo1?id=${data.data.id}`,
              })
            }
          },
          fail: function(){

          }
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
