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
        this.getList();
    },
    onPullDownRefresh: function(){
      this.getList(function(){
        wx.stopPullDownRefresh();
      });
    },
    getList: function(cb){
      let that = this;
      wx.showLoading({
        title: 'loading...',
        mask: true
      });
      wx.request({
      //   url: 'https://www.lifuzhao100.cn/api/check/list',
      //   method: 'POST',
      //   success: function (res) {
      //     let { errcode, data } = res.data;

      //     let decodeData = data.map(obj => {
      //       let ret = {};
      //       for (let k in obj) {
      //         ret[k] = decodeURIComponent(obj[k]);
      //       }
      //       return ret;
      //     });
      //     if (errcode === 0) {
      //       that.setData({
      //         statusList: decodeData
      //       });
      //     }
        
      //   },
      //   fail: function (res) {

      //   },
      //   complete: function () {
      //     wx.hideLoading();
      //     if(typeof cb === 'function'){
      //       cb();
      //     }
      //   }

        url:'https://www.lifuzhao100.cn/api/check/list',
        method:'POST',
        
        success: function (res){
             
              
              
          let { errcode, data } = res.data;
        console.log(res.data.data);
          let decodeData = data.map(obj => {
            let ret = {};
            console.log(ret);
            for (let k in obj) {
              
              ret[k] = decodeURIComponent(obj[k]);
              console.log(ret);
            }
            return ret;
          });
         
          if (errcode === 0) {
            that.setData({
              statusList: decodeData
            });
          }
        },
        fail: function fail(res){
          
        },
        complete: function (){
          wx.hideLoading();
          if(typeof cb === 'function'){
            cb();
          }
        }
      })
    },
    viewDetail: function(e){
        // let id = e.target.id;
        // wx.navigateTo({
        //     url: `../detail/detail?id=${id}`
        // });
        let id = e.target.id;
        wx.request({
          success:function a() {console.log(222);},
          url: 'http://www.lifuzhao100.cn/api/wx/get_report',
          method:'POST',
          data:{
            id:id,
          },
          success:function success(){

          },
          fail:function fail(){

          }
        })
    }
});