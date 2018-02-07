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
            wx.showLoading({
                title: "上传图片中...",
                mask: false
            });
            let uploadTask = wx.uploadFile({
                url: url,
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
                    setTimeout(function(){
                        wx.hideLoading();
                    }, 1500);
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
        }
    }
});