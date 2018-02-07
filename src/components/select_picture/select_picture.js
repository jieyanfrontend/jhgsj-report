Component({
  data: {
    url: null
  },
  methods: {
      chooseImage: function (e) {
          let that = this,
              url = this.data.url;
          if(url){
              wx.showModal({
                  title: "重新选择图片",
                  content: "不满意这张图片？点击确定即可重新拍摄",
                  success: function({confirm}){
                      if(confirm){
                          that.handleChoose()
                      }
                  }
              });
          }else{
              that.handleChoose()
          }

      },
      handleChoose: function(){
          let that = this;
          wx.chooseImage({
              sizeType: ['original'],
              sourceType: ['compressed'],
              success: function ( res) {
                  let detailOption = {filePath: res.tempFilePaths[0]};
                  that.triggerEvent('selected', detailOption);
                  that.setData({
                      url: res.tempFilePaths[0]
                  });
              }
          })
      }
  }
});
