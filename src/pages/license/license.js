let handleImage = require('../../behaviors/handle_image');
Component({
    behaviors: [handleImage],
    data:{
        url: "https://www.lifuzhao100.cn/api/upload/license"
    },
    methods: {
        goNext: function(){
            let { id } = this.data;
            wx.navigateTo({
                url: `../premise/premise?id=${id}`
            })
        }
    }
});