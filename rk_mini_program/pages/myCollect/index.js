// pages/myCollect/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activity: '1', //资讯和活动之间的切换
  },
  activity(e) {  //活动的切换
    console.info(e.currentTarget.dataset.id);
    this.setData({
      activity: e.currentTarget.dataset.id,
    })
  },
  // 监听资讯里面选中删除的id
  onCommunityDelete(e) {
    console.info(e.detail.position);
    if (e.detail.position=='right'){
      console.info(e.currentTarget.dataset.id);
    }
  },
  // 监听商品里面选中删除的id
  onProductDelete(e){
    console.info(e.detail.position);
    if (e.detail.position == 'right') {
      console.info(e.currentTarget.dataset.id);
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