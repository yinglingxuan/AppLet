// pages/payment/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,   //弹出层的显示
    showPassword:false,  //支付密码弹出


    Length: 6,        //输入框个数
    isFocus: true,    //聚焦
    Value: "",        //输入的内容
    ispassword: true, //是否密文显示 true为密文， false为明文。
    disabled: true,    //密码输入成功后才可以点击确认  一开始禁用了确认按钮

  },
  // 支付提示的显示
  passwordShon(){
      this.setData({
        show:true
      })
  },
  showCancel(){
    this.setData({
      show: false
    })
  },
// 支付密码的弹出
  showPassword(){
    this.setData({
      showPassword: true,
      isFocus: true,
    })
  },
  // 支付密码的取消键
  passCancel(){
    this.setData({
      showPassword: false,
      isFocus: false,
    })
  },
  //支付密码的确认键
  offPass(){
    this.setData({
      showPassword: false,
      isFocus: false,
    })
  },


  //获取密码框的数据并判断
  Focus(e) {
    var that = this;
    var inputValue = e.detail.value;
    console.info(inputValue);
    var ilen = inputValue.length;
    if (ilen == 6) {   //如果密码都输入了，才可以点击下一步
      that.setData({
        disabled: false,
      })
    } else {
      that.setData({
        disabled: true,
      })
    }
    that.setData({   //保存输入的内容
      Value: inputValue,
    })
  },
  Tap() {   //重新聚焦
    var that = this;
    that.setData({
      isFocus: true,
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