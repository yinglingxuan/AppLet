// pages/community/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activity:'1', //资讯和活动之间的切换
    bloodBorder:'1',  //血糖血压之间的切换
    imgs: ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1785783109,1334449550&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1785783109,1334449550&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1785783109,1334449550&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1785783109,1334449550&fm=27&gp=0.jpg'],
    swiperIndex:'0'   //当前滑动的第几张图
  },
  activity(e){  //活动的切换
    console.info(e.currentTarget.dataset.id);
    this.setData({
      activity: e.currentTarget.dataset.id,
      swiperIndex:"0"
    })
  },
  bloodBorder(e){
    console.info(e.currentTarget.dataset.id);
    this.setData({
      bloodBorder: e.currentTarget.dataset.id
    })
  },

  // 轮播滑动时，获取当前的轮播id
  swiperChange(e) {
    const that = this;
    that.setData({
      swiperIndex: e.detail.current,
    })
  },

  //跳转到资讯详情
  onDetails(e){
    wx.navigateTo({
      url: '../../../communityDetails/index'
    })
  },
  //跳转到活动详情
  onActivity(e){
    wx.navigateTo({
      url: '../../../activityDetails/index'
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