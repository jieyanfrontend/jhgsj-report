let { host } = require('../../config/CONSTANT.js');
Page({
    data: {
        id: null,
        detail: {}
        
    },
    
    onLoad: function(params){
        this.setData({
            id: params.id,
        });
        this.viewDetail(params.id);

    },
    viewDetail: function(id){
        let that = this;
        let session_id = wx.getStorageSync('session_id')
        wx.request({
            url: `${host}/api/update_report`,
            data: {
                id: id,
                session_id: session_id,   
            },
            method: 'post',
            success: function({data}){
                let imgUrls = [];
                // console.log(data.data[0].id);
                let decodeData = data.data.map(obj => {
                    let ret = {};
                    for(let k in obj){
                        // ret[k] = decodeURIComponent(obj[k]);
                        ret[k] = obj[k];
                        if(/_img$/.test(k)){
                            ret[k] = `${host}/${obj[k]}`;
                            imgUrls.push(ret[k]);
                        }
                    }
                    return ret;
                });
                if(data.code === 200){
                    that.setData({
                        detail: decodeData[0],
                        imgUrls: imgUrls
                    })
                }
            }
        });
    },
    previewImg: function(e){
      let dataset = e.target.dataset;
      let { imgUrls } = this.data;
      wx.previewImage({
        current: dataset.src,
        urls: imgUrls
      })
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
            url: '${host}/api/wx/update_report',
            method: 'post',
            data: {
                id: id
            },
            success: function(res){
                if(res.code === 200){
                    wx.reLaunch({
                        url: '../basic_message/basic_message'
                    })
                }
            }
        })
    }
});