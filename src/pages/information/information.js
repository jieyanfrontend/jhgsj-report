// pages/information/information.js

Page({

 
  formSubmit: function(){
    console.log(1);
  },
  data: {
    informess:"",
    comname2:"",
    check2:"",
    holderip2:"",
    addressip2:"",
    phip2:"",
    yanzip:"",






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
      comname2: e.detail.value
    })
  },
  check: function (e) {
    this.setData({
      check2: e.detail.value
    })
  },
  holderip: function (e) {
    this.setData({
      holderip2: e.detail.value
    })
  },
  addressip: function (e) {
    this.setData({
      addressip2: e.detail.value
    })
  },
  phip: function (e) {
    this.setData({
       phip2: e.detail.value
    })
  },
  yanzip: function (e) {
    this.setData({
      yanzip2: e.detail.value
    })
  },


  clicked:function(){
    var that = this
  
  
    if (this.data.comname2.length == 0 || this.data.check2.length == 0 || this.data.holderip2.length == 0 || this.data.addressip2.length == 0 || this.data.phip2.length == 0 || this.data.yanzip2.length == 0) {
      this.setData({
        informess: '温馨提示：输入框不能留空，请认真检查！',
      })
    } else {
      this.setData({
        informess: '',
        comname2: '企业名称：' + this.data.comname2,
        check2: '注册号：' + this.data.check2,
        holderip2: '负责人：' + this.data.holderip2,
        addressip2: '地址：' + this.data.addressip2,
        phip2: '手机号：' + this.data.phip2,
        yanzip2: '验证码：' + this.data.yanzip2

       

      })
    }
  },




  check: function (e) {
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


  showTopTips: function () {
    var that = this;
    this.setData({
      showTopTips: true
    });
    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems: radioItems
    });
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);

    var checkboxItems = this.data.checkboxItems, values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems
    });
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindCountryCodeChange: function (e) {
    console.log('picker country code 发生选择改变，携带值为', e.detail.value);

    this.setData({
      countryCodeIndex: e.detail.value
    })
  },
  bindCountryChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);

    this.setData({
      countryIndex: e.detail.value
    })
  },
  bindAccountChange: function (e) {
    console.log('picker account 发生选择改变，携带值为', e.detail.value);

    this.setData({
      accountIndex: e.detail.value
    })
  },
  bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  }
})