"use strict";

var _Page;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// pages/information/information.js

Page((_Page = {

  formSubmit: function formSubmit() {
    console.log(1);
  },
  data: {
    informess: "",
    comname2: "",
    check2: "",
    holderip2: "",
    addressip2: "",
    phip2: "",
    yanzip: "",

    result: '',
    warncolor: "red",
    showTopTips: false,

    radioItems: [{ name: 'cell standard', value: '0' }, { name: 'cell standard', value: '1', checked: true }],
    checkboxItems: [{ name: 'standard is dealt for u.', value: '0', checked: true }, { name: 'standard is dealicient for u.', value: '1' }]

  },

  comname: function comname(e) {
    this.setData({
      comname2: e.detail.value
    });
  },
  check: function check(e) {
    this.setData({
      check2: e.detail.value
    });
  },
  holderip: function holderip(e) {
    this.setData({
      holderip2: e.detail.value
    });
  },
  addressip: function addressip(e) {
    this.setData({
      addressip2: e.detail.value
    });
  },
  phip: function phip(e) {
    this.setData({
      phip2: e.detail.value
    });
  },
  yanzip: function yanzip(e) {
    this.setData({
      yanzip2: e.detail.value
    });
  },

  clicked: function clicked() {
    var that = this;

    if (this.data.comname2.length == 0 || this.data.check2.length == 0 || this.data.holderip2.length == 0 || this.data.addressip2.length == 0 || this.data.phip2.length == 0 || this.data.yanzip2.length == 0) {
      this.setData({
        informess: '温馨提示：输入框不能留空，请认真检查！'
      });
    } else {
      this.setData({
        informess: '',
        comname2: '企业名称：' + this.data.comname2,
        check2: '注册号：' + this.data.check2,
        holderip2: '负责人：' + this.data.holderip2,
        addressip2: '地址：' + this.data.addressip2,
        phip2: '手机号：' + this.data.phip2,
        yanzip2: '验证码：' + this.data.yanzip2

      });
    }
  }

}, _defineProperty(_Page, "check", function check(e) {
  var regLowerCase = new RegExp('[a-z]', 'g'); //判断用户输入的是否为小写字母
  var regCapitalLetter = new RegExp('[A-Z]', 'g'); //判断用户输入的是否为大写字母
  var regNum = new RegExp('[0-9]', 'g'); //判断用户输入的是否为数字
  var rsLowerCase = regLowerCase.exec(e.detail.value);
  var rsCapitalLetter = regCapitalLetter.exec(e.detail.value);
  var rsNum = regNum.exec(e.detail.value);
  if (rsLowerCase) {
    this.setData({
      result: '请注意大小写'
    });
  } else if (rsCapitalLetter) {
    this.setData({
      result: ''
    });
  } else if (rsNum) {
    this.setData({
      result: ''
    });
  } else {
    this.setData({
      result: '请输入数字或大写字母'
    });
  }
}), _defineProperty(_Page, "comname", function comname(e) {
  var that = this;
  var comname2 = e.detail.value,
      len = parseInt(comname2.length);
  if (len != 0) that.setData({
    warncolor: 'blue'
  });else {
    that.setData({
      warncolor: 'red'
    });
  }
}), _defineProperty(_Page, "showTopTips", function showTopTips() {
  var that = this;
  this.setData({
    showTopTips: true
  });
  setTimeout(function () {
    that.setData({
      showTopTips: false
    });
  }, 3000);
}), _defineProperty(_Page, "radioChange", function radioChange(e) {
  console.log('radio发生change事件，携带value值为：', e.detail.value);

  var radioItems = this.data.radioItems;
  for (var i = 0, len = radioItems.length; i < len; ++i) {
    radioItems[i].checked = radioItems[i].value == e.detail.value;
  }

  this.setData({
    radioItems: radioItems
  });
}), _defineProperty(_Page, "checkboxChange", function checkboxChange(e) {
  console.log('checkbox发生change事件，携带value值为：', e.detail.value);

  var checkboxItems = this.data.checkboxItems,
      values = e.detail.value;
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
}), _defineProperty(_Page, "bindDateChange", function bindDateChange(e) {
  this.setData({
    date: e.detail.value
  });
}), _defineProperty(_Page, "bindTimeChange", function bindTimeChange(e) {
  this.setData({
    time: e.detail.value
  });
}), _defineProperty(_Page, "bindCountryCodeChange", function bindCountryCodeChange(e) {
  console.log('picker country code 发生选择改变，携带值为', e.detail.value);

  this.setData({
    countryCodeIndex: e.detail.value
  });
}), _defineProperty(_Page, "bindCountryChange", function bindCountryChange(e) {
  console.log('picker country 发生选择改变，携带值为', e.detail.value);

  this.setData({
    countryIndex: e.detail.value
  });
}), _defineProperty(_Page, "bindAccountChange", function bindAccountChange(e) {
  console.log('picker account 发生选择改变，携带值为', e.detail.value);

  this.setData({
    accountIndex: e.detail.value
  });
}), _defineProperty(_Page, "bindAgreeChange", function bindAgreeChange(e) {
  this.setData({
    isAgree: !!e.detail.value.length
  });
}), _Page));