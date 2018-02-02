// pages/information/information.js

Page({

 
  data: {
    informess:"",
    comname2:"",
    check2:"",
    holderip2:"",
    addressip2:"",
    phip2:"",
    yanzip2:"",
    comname3: "",
    check3: "",
    holderip3: "",
    addressip3: "",
    phip3: "",
    yanzip3: "",






    result: '',
    warncolor:"red",
    showTopTips: false,

    radioItems: [
      { name: 'cell standard', value: '0' },
      { name: 'cell standard', value: '1', checked: true }
    ],
    checkboxItems: [
      { name: 'standard is dealt for u.', value: '0', checked: true },
      { name: 'standard is dealicient for u.', value: '1' }
    ],

    
  },


  comname: function (e) {
    this.setData({
      comname3: e.detail.value
    })
  },
  check: function (e) {
    this.setData({
      check3: e.detail.value
    })
  },
  holderip: function (e) {
    this.setData({
      holderip3: e.detail.value
    })
  },
  addressip: function (e) {
    this.setData({
      addressip3: e.detail.value
    })
  },
  phip: function (e) {
    this.setData({
      phip3: e.detail.value
    })
  },
  yanzip: function (e) {
    this.setData({
      yanzip3: e.detail.value
    })
  },
 


  clicked: function (e) { 
    let{comname3,check3,holderip3,addressip3,phip3,yanzip3}=this.data;
    console.log(this.data);
    if ((this.data.comname3.length != 0 )&& (this.data.check3.length != 0 )&& (this.data.holderip3.length != 0 )&&(this.data.addressip3.length != 0 ) && ( this.data.phip3.length != 0 )&&( this.data.yanzip3.length != 0)) {
      this.setData({
        
        informess: '',
        comname2: '企业：' +'（' + this.data.comname3 +'）' +';  ',
        check2: '注册号：' + '（' + this.data.check3 + '）' + ';  ',
        holderip2: '负责人：' + '（' + this.data.holderip3+ '）'+ ';  ',
        addressip2: '地址：' + '（' + this.data.addressip3+ '）' + ';  ',
        phip2: '手机号：' + '（' + this.data.phip3+ '）' + ';  ',
        yanzip2: '验证码：' + '（' + this.data.yanzip3 + '）' 
      })
    } else {
      this.setData({
        informess: '温馨提示：所有输入框不能留空！',
       
      })
    } 


   },


  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
 

  check: function (e) {

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
  }
,

  

comname:function(e){
  this.setData({
    comname3: e.detail.value
  })
  var that = this
  var comname2 = e.detail.value,

  len = parseInt(comname2.length);
    if(len != 0)
   
  that.setData({
   warncolor:'blue'
  })
  else{
      that.setData({
        warncolor: 'red'
      })
  }
    
 },









})