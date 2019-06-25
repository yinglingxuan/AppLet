// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    mod: [
      'aspectFit',  //保持纵横比缩放图片，使图片的长边能完全显示出来。
      'widthFix',  // 宽度不变，高度自动变化，保持原图宽高比不变
      'scaleToFill'  //不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
    ],
    arr: ["/images/home/bannerOne.jpg", "/images/home/bannerTwo.jpg", "/images/home/bannerThree.jpg"],
    ellipsis: true, // 折叠默认收起
    authorizeStatus: 1,//授权状态
  },
  //展开收起
  ellipsis: function () {
    var value = !this.data.ellipsis;
    this.setData({
      ellipsis: value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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