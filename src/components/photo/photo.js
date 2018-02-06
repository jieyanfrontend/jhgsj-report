// src/components/photo/photo.js
Component({
  properties: {
    message: {
      type: String,
      value:'init value'
    },
    filePath: String
  },
  data: {
    files: []
  },
  methods: {
      chooseImage: function (e) {
          let that = this;
          wx.chooseImage({
              sizeType: ['original'], 
              // sourceType: ['camera'],
              success: function ({ tempFilePaths }) {
                  let detailOption = {filePath: tempFilePaths[0]};
                  that.triggerEvent('selected', detailOption);
              }
          })
      }
  }
})
