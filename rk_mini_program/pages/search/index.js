// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: '',
    inputValue: '', //用来保存输入框的数据
    historyData:[]   //用来保存缓存中的数据
  },
  // 同步到当前输入的值
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  dataDelete(e){
    wx.removeStorageSync('history-data');
    this.onLoad();
  },
  //点击搜索按钮
  submits(e){
    if (this.data.inputValue.length>0){
      let arr = wx.getStorageSync('history-data'); //先获取到缓存的数据
          if (arr == '' || arr == null) {
              let arr2 = [];
              arr2.push(this.data.inputValue)
              this.setData({
                historyData: arr2,
                inputValue: ''
              });
              wx.setStorageSync('history-data', this.data.historyData);  //保存
            return;
          } else {
              if (arr.length >= 8) {   //限制8个
                arr.splice(0, 1);  //删掉第一个，保持保
              }
              arr.push(this.data.inputValue);   //添加新数据到数组中
              this.setData({
                historyData: arr,
                inputValue: ''
              });
              wx.setStorageSync('history-data', this.data.historyData);  //保存
              return;
          }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var height = wx.getSystemInfoSync().windowHeight;  //获取屏幕高度
    let arr = wx.getStorageSync('history-data');//获取缓存中的数据
    this.setData({
      historyData: arr,
      winHeight: height
    });
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