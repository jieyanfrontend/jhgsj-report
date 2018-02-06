module.exports = Behavior({
    behavior: [],
    data: {
        percent: 0,
        btnText: '上传',
        nextBtnText: "下一步",
        filePath: null,
        id: null
    },
    methods: {
        onLoad: function(){
            let {options } = getCurrentPages()[0];
            this.setData({
                id: options.id
            });
        },
        handleSelected: function({detail}){
            this.setData({
                filePath: detail.filePath
            })
        },
        upload: function(){
            let { filePath, id, nextBtnText, url } = this.data;
            let that = this;
            wx.showToast({
                title: "上传图片中...",
                icon: "loading",
                mask: true
            });
            wx.uploadFile({
                url: url,
                method: 'POST',
                filePath: filePath,
                name: 'picture',
                header: {
                    "Content-Type": "multipart/form-data"
                },
                formData: {
                    id: id
                },
                success: function(res){
                    that.setData({
                        btnText: nextBtnText
                    })
                },
                fail: function(res){
                    console.log(res);
                },
                complete: function(){
                    wx.hideToast();
                }
            })
        },
        handleBtn: function(){
            let { btnText } = this.data;
            if(btnText === '上传'){
                this.upload();
            }else{
                this.goNext();
            }
        }
    }
});