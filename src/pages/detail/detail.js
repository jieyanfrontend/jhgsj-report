let { host } = require('../../config/CONSTANT.js');
Page({
    data: {
        id: null,
        detail: {},
        imgUrls: []
    },
    
    onLoad: function(params){
        this.setData({
            id: params.id,
        });
        this.viewDetail(params.id);

    },
    viewDetail: function(id){
        let that = this;
        // let session_id = wx.getStorageSync('session_id')
        wx.request({
          url: `${host}/api/get_report`,
            data: {
                id: id,
                session_id: wx.getStorageSync('session_id')
            },
            method: 'post',
            success: function({data}){
              let ret = JSON.parse(data);
                let { license_url, premise_url, workplace_url} =  ret.table[0];
                ret.table[0].license_url = "https://www.e-irobot.com/"+license_url;
                ret.table[0].premise_url = "https://www.e-irobot.com/"+premise_url;
                ret.table[0].workplace_url = "https://www.e-irobot.com/"+workplace_url;
                let imgUrls = [ ret.table[0].license_url,ret.table[0].premise_url, ret.table[0].workplace_url];
                if(ret.code == 200){
                    that.setData({
                        detail: ret.table[0],
                        imgUrls: imgUrls
                    });
                    console.log(imgUrls);
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
        let session_id = wx.getStorageSync('session_id');
        wx.request({
          url: `${host}/api/updatereport`,
            method: 'post',
            data: {
                id: id,
                type: 'cancel',
                session_id: session_id
            },
            success: function(res){
              console.log(res);
                if(res.code === 200){
                    wx.reLaunch({
                        url: '../basic_message/basic_message'
                    })
                }
            }
        })
    }
});