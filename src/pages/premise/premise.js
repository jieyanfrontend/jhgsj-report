const { host } = require('../../config/CONSTANT.js');
let handleImage = require('../../behaviors/handle_image');
Component({
    behaviors: [handleImage],
    methods: {
        goNext: function(){
            let {id } = this.data;
            wx.request({
                url: `${host}/api/wx/update_report` ,
                method: 'POST',
                formData: {
                    type: 'premise',
                },
                file: this.data.filePath,
                session_id: wx.getStorageSync('LoginSessionKey'),
            })
            wx.navigateTo({
                url: `../workplace/workplace?id=${id}`
            })
        },
        getURL: function(){
            return `https://www.lifuzhao100.cn/api/upload/premise`
        }
    }
});