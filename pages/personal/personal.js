// pages/personal/personal.js
let startY = 0 //起始位置
let moveY = 0 //移动到的位置
let distanceY = 0 //移动的距离
Page({

  /**
   * 页面的初始数据
   */
  data: {
    transformY: '',
    trasitionY: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  touchStart (event) {
    startY = event.touches[0].clientY
    this.setData({
      trasitionY: ''
    })
  },
  touchMove (event) {
    moveY = event.touches[0].clientY
    distanceY = moveY - startY
    if(distanceY < 0){
      return
    }
    if(distanceY >= 80){
      distanceY = 80
    }
    this.setData({
      transformY: `translateY(${distanceY}rpx)`
    })
  },
  touchEnd (event) {
    this.setData({
      transformY: `translateY(0rpx)`,
      trasitionY: `transform 1s linear`
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})