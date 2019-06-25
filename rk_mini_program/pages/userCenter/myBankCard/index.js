// pages/userCenter/myBankCard/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  goBankCard:function(){
    wx.navigateTo({
      url: '/pages/userCenter/relieveBind/index',
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
    var that = this;
    var cardArr = [
      { cardNum: "1234567896789789" },
      { cardNum: "1234567896789789" },
      { cardNum: "1234567896789789" }
    ]
    var num2 = [];
    for (var index in cardArr) {
      num2.push(cardArr[index].cardNum.replace(/(.{4})/g, "$1 "))
    }
    console.log(123)
    that.setData({
      num: num2
    })
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