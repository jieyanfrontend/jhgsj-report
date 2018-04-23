// src/pages/info/info.js
Page({
	goNext: function(){
		wx.switchTab({
			url: '../basic_message/basic_message',
		})
	}
})