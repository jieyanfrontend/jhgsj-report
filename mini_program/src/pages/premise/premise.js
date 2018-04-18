const {host} = require('../../config/CONSTANT.js');
let handleImage = require('../../behaviors/handle_image');
Component({
  behaviors: [handleImage],
  methods: {
    goNext: function() {
      let {id} = this.data;
      wx.navigateTo({
        url: `../workplace/workplace?id=${id}`
      });
    },
    getURL: function() {
      return `${host}/api/updatereport`;
    },
    getType: function() {
      return 'premise';
    }
  }
});
