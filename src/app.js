//app.js
const { host } = require('./config/CONSTANT.js');
App({

    onLaunch: function(){
        wx.login({
          success:(e)=>{
            wx.request({
              url: `${host}/api/login`,
              method:'POST',
              data:{
                code:e.code
              },
                success:(e)=>{
                  var wxSessionKey = e.data.session_key;
                  // console.log(wxSessionKey);
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