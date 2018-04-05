//app.js
const { host } = require('./config/CONSTANT.js');
App({

    onLaunch: function(){
        wx.login({
          success:(e)=>{
            wx.request({
              url: `${host}/api/wx/login`,
              method:'POST',
              data:{
                js_code:e.code
              },
                success:(e)=>{
                  var wxSessionKey = e.data.session_key;
                  wx.setStorageSync('LoginSessionKey', 'wxSessionKey');
                }
            })
              wx.getUserInfo({
                  success:(e)=>{
                  console.log(e.userInfo)
                  }
              })
          }
        });
    }
});