let handleImage = require('../../behaviors/handle_image');
Component({
    behaviors: [handleImage],
    data: {
        url: "https://www.lifuzhao100.cn/api/upload/premise"
    },
    methods: {
        goNext: function(){
            let {id } = this.data;
            wx.navigateTo({
                url: `../workplace/workplace?id=${id}`
            })
        }
    }
});