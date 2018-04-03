//app.js
App({

    onLaunch: function(){
      console.log(111);
        wx.login({
          success:(e)=>{
            wx.request({
              url: 'https://www.lifuzhao100.cn/api/user/login',
              method:'POST',
              data:{
                js_code:e.code
              },
              
            })
          }
        });
    }
});