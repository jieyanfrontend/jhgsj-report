Page({
    data: {
        message:'请拍摄并上传经营许可证反面',
        files: [],
        bShow:true
    },
    chooseImage: function (e) {
      var that = this;
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                that.setData({
                    files: that.data.files.concat(res.tempFilePaths)
                });
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
});