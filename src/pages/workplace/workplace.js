let handleImage = require('../../behaviors/handle_image');
Component({
    behaviors: [handleImage],
    methods: {
        goNext: function(){
            wx.request({
                url: `${host}/api/wx/update_report`,
                method: 'POST',
                formData: {
                    type: 'workplace',
                    file: this.data.filePath
                }
            })
            wx.showModal({
                title: "提示",
                content: "已上传认证信息，审核时间为3-5个工作日",
                showCancel: false,
                confirmText: "返回首页",
                success: function({confirm}){
                    if(confirm){
                      wx.clearStorageSync();
                        wx.switchTab({
                            url: "../basic_message/basic_message"
                        })
                    }
                }
            })
        },
        getURL: function(){
            return `https://www.lifuzhao100.cn/api/upload/workplace`
        }
    }
});