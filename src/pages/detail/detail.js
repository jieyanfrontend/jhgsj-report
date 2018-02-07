Page({
    data: {
        id: null,
        detail: {}
    },
    onLoad: function(params){
        this.setData({
            id: params.id
        });
        this.viewDetail(params.id);
    },
    viewDetail: function(id){
        let that = this;
        wx.request({
            url: "https://www.lifuzhao100.cn/api/check/detail",
            data: {
                id: id
            },
            method: 'post',
            success: function({data}){
                let decodeData = data.data.map(obj => {
                    let ret = {};
                    for(let k in obj){
                        ret[k] = decodeURIComponent(obj[k]);
                        if(/_img$/.test(k)){
                            ret[k] = `https://www.lifuzhao100.cn/${obj[k]}`
                        }
                    }
                    return ret;
                });
                if(data.errcode === 0){
                    that.setData({
                        detail: decodeData[0]
                    })
                }
            }
        });
    },
    showModal: function(){
        let that = this;
        wx.showModal({
            title: "撤回",
            content: "撤回信息后将需要重新填写上传",
            success: function({confirm}){
                if(confirm){
                    that.withdraw()
                }
            }
        });
    },
    withdraw: function(){
        let {id} = this.data;
        wx.request({
            url: "https://www.lifuzhao100.cn/api/check/withdraw",
            method: 'post',
            data: {
                id: id
            },
            success: function(res){
                if(res.errcode === 0){
                    wx.reLaunch({
                        url: '../basic_message/basic_message'
                    })
                }
            }
        })
    }
});