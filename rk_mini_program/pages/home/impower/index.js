// pages/home/impower/index.js
var ajax = require("../../../utils/ajax.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userData:{}
  },
  //登录
  log: function (e) {
    ajax.clicks();
    // 查看是否授权
    var _this=this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {  //判断是否授权
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              var _thisRes=res;
              wx.login({
                success: function (res) {
                    var data = {
                      jsCode: res.code,
                      encryptedData: _thisRes.encryptedData,
                      iv: _thisRes.iv
                    };
                    // console.info(data);
                    var url = ajax.urls.userDoLogin;
                    //调用封装后的请求
                    ajax.request(url, data, _this.doSuccess, _this.doFail,null);
                }
              })
            }
          })
        }else{
          console.info("拒绝登陆");
        }
      }
    })
  },
  doSuccess(e) {
    console.info(e);
    wx.hideLoading();//关闭提示框
    if (e.resultCode==-1){
      console.info("登陆失败");
    }else{
      console.info(e.result);
      wx.setStorageSync('result-Code', e.result);  //保存
      wx.switchTab({
        url: '../../home/index'
      })
    }
  },
  doFail(){
    console.info("网络不行访问失败");
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