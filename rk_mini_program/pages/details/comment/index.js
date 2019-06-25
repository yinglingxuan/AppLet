// pages/details/comment/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      demo:'',
      demoData:{
        name:"嘟嘟宝贝",
        headPortrait:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1785783109,1334449550&fm=27&gp=0.jpg", 
        text:"该用户给了好评，但是没有写评论",
        dates:'2019-05-02',
        imgs: ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1785783109,1334449550&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1785783109,1334449550&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1785783109,1334449550&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1785783109,1334449550&fm=27&gp=0.jpg'],
      },
       winWhidth: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var width = wx.getSystemInfoSync().windowWidth;  //获取屏幕宽度
      this.setData({
        demo:"123213",
        winWhidth:width
      })
    console.info(this.data.winWhidth);
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