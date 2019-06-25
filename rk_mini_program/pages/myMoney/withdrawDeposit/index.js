// pages/myMoney/withdrawDeposit /index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bankId:'',   //银行卡账户
    bankName:'',  //开户姓名
    bankMoney:'', //提现金额
    paymentCode:'',  //支付密码
    procedure:'0'     //手续费
  },
  bankId(e) {//银行卡账户
    console.info(e.detail.value);
    this.setData({
      bankId: e.detail.value,
    })
  },
  bankName(e) {//开户姓名
    console.info(e.detail.value);
    this.setData({
      bankName: e.detail.value,
    })
  },
  bankMoney(e) {//提现金额
    console.info(e.detail.value);
    
    var count = (e.detail.value/100)*2;
    this.setData({
      bankMoney: e.detail.value,
      procedure: count
    })
  },
  paymentCode(e) {//支付密码
    console.info(e.detail.value);
    this.setData({
      paymentCode: e.detail.value,
    })
  },
  withdraw(e){   //提现
    if (this.data.bankMoney % 100 != 0 || this.data.bankMoney==0) {
      console.info("必须是100的倍数");
      wx.showToast({
        title: '金额输入错误',
        icon: 'none',
        duration: 2000
      })
    }else{
      console.info("进来", this.data.bankMoney);
    }
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