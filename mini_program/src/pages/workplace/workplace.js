var bmap = require('../../baidumap/bmap-wx.min.js');
var wxMarkerData = [];
var originalData = [];
Page({
  data: {
    ak: "wgg7WQccrKS6KC7KrmICS1GbvdXaidmh",	//填写申请到的ak
    markers: [],
    location:{},
    lat:'',
    lng:'',
    longitude: '',	//经度
    latitude: '',	//纬度
    address: '',		//地址
    cityInfo: {}		//城市信息
  },
getWXLocation: function(){
  var that = this;
wx.getLocation({
  success: function(res) {
    that.setData({
      lat: res.latitude,
      lng: res.longitude,
    })
    console.log(that.data.lat)
    console.log(that.data.lng)
  },
  fail: function(res) {},
  complete: function(res) {},
})
},
    getBMLocation() {
      var that = this;
      /* 获取定位地理位置 */
      // 新建bmap对象 
      var BMap = new bmap.BMapWX({
        ak: that.data.ak
      });
      var fail = function (data) {
        console.log(data);
      };
      var success = function (data) {
        //返回数据内，已经包含经纬度
        console.log(data);
        //使用wxMarkerData获取数据
        wxMarkerData = data.wxMarkerData;
        originalData = data.originalData;
        //把所有数据放在初始化data内
        that.setData({
          markers: wxMarkerData,
          location: originalData.result.location,
          latitude: wxMarkerData[0].latitude,
          longitude: wxMarkerData[0].longitude,
          address: wxMarkerData[0].address,
          cityInfo: data.originalData.result.addressComponent
        });
        console.log(that.data.location)
      }
      // 发起regeocoding检索请求 
      BMap.regeocoding({
        fail: fail,
        success: success
      });
    },
  onLoad: function (options) {
    
  }

})
// const {host} = require('../../config/CONSTANT.js');
// let handleImage = require('../../behaviors/handle_image');
// Component({
//   behaviors: [handleImage],
//   methods: {
//     goNext: function() {
//       wx.showModal({
//         title: '提示',
//         content: '已上传认证信息，审核时间为3-5个工作日',
//         showCancel: false,
//         confirmText: '前往详情',
//         success: ({confirm}) => {
//           let { id } = this.data;
//           if (confirm) {
//             wx.switchTab({
//               url: `../detail/detail?id=${id}`,
//               success:()=>{
//                 console.log('111');
//               }
//             });
//           }
//         }
//       });
//     },
//     getURL: function() {
//       return `${host}/api/updatereport`;
//     },
//     getType: function() {
//       return 'workplace';
//     }
//   }
// });
