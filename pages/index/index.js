// pages/index/index.js
import request from '../../utils/request'
Page({

  // 页面的初始数据
  data: {
    bannerList: [],
    recommendList: [],
    topList: []
  },

  // 生命周期函数--监听页面加载
  onLoad: async function (options) {
    let bannerData = await request('/banner', {type:2})
    let recommendData = await request('/personalized',{limit:20})
    // 请求排行榜内容数据
    let topIndex = 0, topResult = []
    while (topIndex < 5) {
      let topData = await request('/top/list',{idx: topIndex++})
      let topItem = {name: topData.playlist.name, tracks: topData.playlist.tracks.slice(0,3)}
      topResult.push(topItem)
      this.setData({
        topList: topResult
      })
    }
    this.setData({
      bannerList: bannerData.banners,
      recommendList: recommendData.result,
      topList: topResult
    })
    // console.log(this.data.bannerList,recommendData);
  },

  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {

  },

  // 生命周期函数--监听页面显示
  onShow: function () {

  },

//  生命周期函数--监听页面隐藏
  onHide: function () {

  },

  // 生命周期函数--监听页面卸载
  onUnload: function () {

  },

  // 页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {

  },

  // 页面上拉触底事件的处理函数
  onReachBottom: function () {

  },

  // 用户点击右上角分享
  onShareAppMessage: function () {

  }
})