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
        upload: function(url){
            let { filePath, id, nextBtnText } = this.data;
            let that = this;
            wx.showToast({
                title: "上传图片中...",
                icon: "loading",
                mask: true
            });
            let uploadTask = wx.uploadFile({
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
                }
            });
            uploadTask.onProgressUpdate(function({progress}){
                if(progress === 100){
                    wx.hideToast();
                }
                that.setData({
                    percent: progress
                });
            });
        },
        handleBtn: function(){
            let { btnText } = this.data;
            if(btnText === '上传'){
                let url = this.getURL();
                this.upload(url);
            }else{
                this.goNext();
            }
        },
        onReady: function(){
            console.log(this.data);
        }
    }
});