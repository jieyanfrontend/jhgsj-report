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
        onLoad: function(data){
            this.setData({
                id: data.id
            });
        },
        onPullDownRefresh: function(){
          wx.stopPullDownRefresh();
        },
        handleSelected: function({detail}){
            this.setData({
                filePath: detail.filePath
            })
        },
        upload: function(url,type){
            let { filePath, id, nextBtnText } = this.data;
            console.log(id);
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
                    id: id,
                    type: type,
                    session_id: wx.getStorageSync('LoginSessionKey'),
                },
                success: function(res){
                  console.log(res);
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
                let type = this.getType();
                this.upload(url,type);
            }else{
                this.goNext();
            }
        }
    }
});