// pages/details/affirmOrder/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressInfo: null,  //微信地址信息
    winHeight:'',
    show:false,
    radio: '1',  //单选框选中的
  },
  onRadio(e) {//单选框的值
    this.setData({
      radio: e.detail
    })
  },
  //选择的数量
  onChange(e) {
    console.info(e.detail);
  },
  // 获取地址
  chooseAddress() {
    wx.chooseAddress({
      success: (res) => {
        this.setData({
          addressInfo: res
        })
        console.info(res);
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },
  // 跳转到新增地址
  onAddSites(){
    wx.navigateTo({
      url: '../../sites/index'
    })
  },
  onShows(){
    this.setData({
      show:this
    })
  },
  onClose(){
    this.setData({
      show: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var height = wx.getSystemInfoSync().windowHeight;  //获取屏幕高度
    this.setData({
       winHeight: height
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