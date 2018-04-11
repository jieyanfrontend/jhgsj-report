const {host} = require('../../config/CONSTANT.js');
let handleImage = require('../../behaviors/handle_image');
Component({
    behaviors: [handleImage],
    methods: {
        goNext: function(){
            let { id } = this.data;
            // console.log(this.data.filePath);
            // wx.uploadFile({
            //     url: `${host}/api/updatereport`,
            //     method: 'POST',
            //     formData:{
            //         type:'license',
            //     },
            //     session_id: wx.getStorageSync('LoginSessionKey'),
            //     name:'file',
            //     filePath: this.data.filePath,
            //     success:(res)=>{
            //         console.log(res.data);
            //     }
            // })
            wx.navigateTo({
                url: `../premise/premise?id=${id}`
            })
        },
        getURL: function(){
            return `${host}/api/updatereport`
        },
        getType: function () {
            return 'license'
        }
    }
});