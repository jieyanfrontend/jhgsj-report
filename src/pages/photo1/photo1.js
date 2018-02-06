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
          "Content-Type": "multipart/form-data"
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
      });
      wx.request({
        url:"https://www.lifuzhao100.cn/api/check/detail",
        method: 'post',
        data: {
          id: 10
        },
        success: function(res){
          console.log(res);
        },
        fail: function(res){
          console.log(res);
        }
      })
    },
    upload: function (page, path) {
        wx.showToast({
            icon: "loading",
            title: "正在上传"
        }),
            wx.uploadFile({
                url: constant.SERVER_URL + "/FileUploadServlet",
                filePath: path[0],
                name: 'file',
                header: { "Content-Type": "multipart/form-data" },
                formData: {
                    //和服务器约定的token, 一般也可以放在header中
                    'session_token': wx.getStorageSync('session_token')
                },
                success: function (res) {
                    console.log(res);
                    if (res.statusCode != 200) {
                        wx.showModal({
                            title: '提示',
                            content: '上传失败',
                            showCancel: false
                        })
                        return;
                    }
                },
                fail: function (e) {
                    console.log(e);
                    wx.showModal({
                        title: '提示',
                        content: '上传失败',
                        showCancel: false
                    })
                },
                complete: function () {
                    wx.hideToast();  //隐藏Toast
                }
            })

    }
})