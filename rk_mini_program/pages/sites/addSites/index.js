// pages/sites/addSites/index.js

var jsonData = require('../../../imgs/area.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: '',
    demoData: jsonData.default,
    show:false,
    inputValue:'',//识别中的字符串
    inputName:'',   //收货人
    inputMobile:'', //手机号码
    inputSites:'',  //地址 
    inputRegion:'请选择地区',  //选中的地区
    checked:false     //开关
  },
  //获取到识别的值
  inputValue(e){
    this.setData({
      inputValue: e.detail.value
    })
  },
  inputName(e){
    this.setData({
      inputName: e.detail.value
    })
  },
  inputMobile(e) {
    this.setData({
      inputMobile: e.detail.value
    })
  },
  inputSites(e) {
    this.setData({
      inputSites: e.detail.value
    })
  },
//开关按钮
  onChange({ detail }) {
    // 需要手动对 checked 状态进行更新
    this.setData({ checked: detail });
  },

  //开始识别
  partition(){
    var arr=this.data.inputValue.split(",");
    if(arr.length<2){
      var arr = this.data.inputValue.split("，");
    }
    console.info(arr);
    this.setData({
      inputName:arr[0],
      inputMobile:arr[1],
      inputSites:arr[2]
    })
  },
  //地下弹出层
  onHides(){
    console.info("进来")
     this.setData({
       show:true
     })
  },
  onHideOne(){
    this.setData({
      show: false
    })
  },
  //点击选中地址
  offSites(e){
    console.info(e.detail.values);
    var joint = e.detail.values[0].name + " " + e.detail.values[1].name + " " + e.detail.values[2].name
    this.setData({
      show: false,
      inputRegion:joint
    })
  },
  // 保存跳转到地址列表
  saveSites(){
    wx.navigateTo({
      url: '../../sites/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var height = wx.getSystemInfoSync().windowHeight;  //获取屏幕高度
    this.setData({
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