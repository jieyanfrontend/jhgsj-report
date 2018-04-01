let handleImage = require('../../behaviors/handle_image');
Component({
    behaviors: [handleImage],
    methods: {
        goNext: function(){
            let {id } = this.data;
            wx.navigateTo({
                url: `../workplace/workplace?id=${id}`
            })
        },
        getURL: function(){
            return `https://www.lifuzhao100.cn/api/upload/premise`
        }
    }
});