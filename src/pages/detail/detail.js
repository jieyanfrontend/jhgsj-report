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
    }
});