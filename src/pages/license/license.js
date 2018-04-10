const {host} = require('../../config/CONSTANT.js');
let handleImage = require('../../behaviors/handle_image');
Component({
    behaviors: [handleImage],
    methods: {
        goNext: function(){
            let { id } = this.data;
            console.log(this.data.filePath);
            wx.request({
                url: 'https://www.lifuzhao100.cn/api/wx/update_report',
                method: 'POST',
                formData:{
                    type:'license',
                },
                session_id: wx.getStorageSync('LoginSessionKey'),
                file: this.data.filePath,
                success:()=>{
                    console.log(LoginSessionKey);
                }
            })
            wx.navigateTo({
                url: `../premise/premise?id=${id}`
            })
        },
        getURL: function(){
            return `https://www.lifuzhao100.cn/api/upload/license`
        }
    }
});