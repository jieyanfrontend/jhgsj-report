const { host } = require('../../config/CONSTANT.js');
let handleImage = require('../../behaviors/handle_image');
Component({
    behaviors: [handleImage],
    methods: {
        goNext: function(){
            // wx.uploadFile({
            //     url: `${host}/api/update_report`,
            //     method: 'POST',
            //     formData: {
            //         type: 'workplace',
            //     },
            //     filePath: this.data.filePath,
            //     session_id: wx.getStorageSync('LoginSessionKey'),
            // })
            wx.showModal({
                title: "提示",
                content: "已上传认证信息，审核时间为3-5个工作日",
                showCancel: false,
                confirmText: "返回首页",
                success: function({confirm}){
                    if(confirm){
                        wx.switchTab({
                            url: "../basic_message/basic_message",
                            success:function(e){
                              var page = getCurrentPages().pop();
                              if(page ===undefined || page === null)return;
                              page.onLoad();
                            }
                        })
                    }
                }
            })
        },
        getURL: function(){
            return `${host}/api/updatereport`
        },
        getType: function () {
            return 'workplace'
        }
    }
})