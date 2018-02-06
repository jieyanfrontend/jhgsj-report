 // pages/status/status.js



Page({
    data: {
      statusList: [{
          status: '未通过',
          orgName: '五邑大学',
          post_time: '2018-02-07',
          id: 2
      }]
    },
    onLoad: function(){
      wx.showLoading({
          title: 'loading...',
          mask: true
      });
      wx.request({
          url:'https://www.lifuzhao100.cn/api/check/list',
          method: 'POST',
          success: function(res){
            let { errcode, data } = res.data;
            if(errcode === 0){
                this.setData({
                    statusList: data
                });
            }
          },
          fail: function(res){

          },
          complete: function(){
              wx.hideLoading();
          }
      })
    },
    viewDetail: function(e){
        let id = e.target.id;
        wx.navigateTo({
            url: `../detail/detail?id=${id}`
        });
    }
});