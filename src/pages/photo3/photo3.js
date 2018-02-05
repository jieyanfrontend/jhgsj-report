// src/pages/advice/advice.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
       
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

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