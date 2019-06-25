// pages/site /index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: '',//当前屏幕的高度
    demoData:false,   //是否有地址
    radio:"",  //单选框选中的
    show:false   //弹出层的显示
  },
  onInput(){
    wx.navigateTo({
      url: '../sites/addSites/index'
    })
  },
  onChange(e){//单选框的值
    this.setData({
      radio: e.detail
    })
  },
  //点击编辑
  sitesRedact(e){

  },
  //点击删除
  sitesDelete(e){
      this.setData({
        show:true
      })
  },
  // 弹框的确认
  offDelete(event) {
    console.log(event.detail);
    this.setData({
      show: false
    })
  },
  //弹框的取消
  showCancel(){
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