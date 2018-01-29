'use strict';

// src/pages/basicMessage/basicMessage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabTitles: ['基本信息', '查看状态'],
    activeIndex: 0,
    translateOffset: 0
  },
  tapTitle: function tapTitle(event) {
    this.setData({
      activeIndex: parseInt(event.currentTarget.id),
      translateOffset: event.currentTarget.offsetLeft
    });
  }
});