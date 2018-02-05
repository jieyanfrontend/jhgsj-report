// src/pages/advice/advice.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      id: '',
      filePath: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    bindViewTap: function() {
        wx.navigateTo({
            url: '../photo2/photo2'
        })
    },
    handleSelected: function({detail}){
      this.setData({
        filePath: detail.filePath
      })
    },
    uploadImage: function(){
      let { filePath, id } = this.data;
      wx.uploadFile({
        url: 'https://www.lifuzhao100.cn/api/uploadLicense',
        method: 'POST',
        filePath: filePath,
        name: 'picture',
        header: {
          "content-type": "multipart/form-data"
        },
        formData: {
          id: id
        },
        success: function(res){
          console.log("success", res);
        },
        fail: function(res){
          console.log('fail', res);
        }
      })
    },
    onLoad: function(){
      let {options } = getCurrentPages()[0];
      this.setData({
        id: options.id
      })
    }
})