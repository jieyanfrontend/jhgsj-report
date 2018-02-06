Page({
  data: {
    params:{
      org_name:'',
      register_code:'',
      admin:'',
      address:'',
      phone:'',
      code:''
    },
    validator: false
  },
  selfSetData: function(key, e){
    let { params } = this.data;
    this.setData({
      params: Object.assign(params, {
        [key]: e.detail.value
      })
    });
    this.checkIn();
  },
  handleOrgName: function (e) {
    this.selfSetData('org_name', e);
  },
  handleRegisterCode: function (e) {
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
  validateRegisterCode: function(value){
    return /^[0-9A-Z]{18}$/.test(value);
  },
  validateCommonParams: function(value){
    return !!value.length
  },
  checkIn: function(){
    let { params } = this.data;
    let validator = true;
    for(let key in params){
      if(key === 'register_code' && !this.validateRegisterCode(params[key])){
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
          url: 'https://www.lifuzhao100.cn/api/check/add',
          data: data,
          method: "POST",
          header: {
            "content-type": "application/json"
          },
          success: function({data}){
            if(data.errcode === 0){
              wx.redirectTo({
                url: `../license/license?id=${data.data.id}`,
              })
            }
          },
          fail: function(){

          }
      })
  },
  onLoad: function () {

  },
 

});
