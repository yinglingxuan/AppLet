// pages/member/memberPay/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     winHeight: '',
     backgroundUrl:[
       "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/028@2x.png",
       "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/0230@2x.png",
       "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/027@2x.png",
       "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/029@2x.png"
     ],
    imgsUrl: [
      "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/zuansi@2x.png",
      "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/jingying@2x.png",
      "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/gaojidaili@2x.png",
      "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/hehuoren@2x.png"
    ],
     ids:"0"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var height = wx.getSystemInfoSync().windowHeight;  //获取屏幕高度
    this.setData({
      winHeight: height
    });
    console.info(options.id);
    if (options.id != undefined){
      this.setData({
        ids: options.id
      })
    }
    
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