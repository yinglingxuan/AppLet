// pages/myMoney /index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      tables:"1",
  },
  onTable(e){  //当前选择的标签页
    this.setData({
      tables: e.currentTarget.dataset.id
    })
  },
  onUp(e){ //跳转到充值
    wx.navigateTo({
      url: '../myMoney/recharge/index'
    })
  },
  onDeposit(e){ //跳转到提现
    wx.navigateTo({
      url: '../myMoney/withdrawDeposit/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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