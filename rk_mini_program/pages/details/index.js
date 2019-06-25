// pages/details/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1785783109,1334449550&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1785783109,1334449550&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1785783109,1334449550&fm=27&gp=0.jpg'],
    page:1,     //当前是第几页
    goTop: false,
    showModalStatus: false,   //商品规格的显示和隐藏
    couponsHide:false,        //优惠卷的显示隐藏
    animationDatas: "",       //动画效果

    demoData:['260ml','500ml','600ml'],
    specification:0,      //选中的规格
    count:'1'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  //接受上一个页面传过来的值
    console.info("接受分享的对象"+options.name);
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  //监听当前滑动的第几张图片
  intervalChange(e){
    //当前滑动的第几张图片
    let count=e.detail.current+1;
    this.setData({
      page:count
    })
  },
  //点击预览图片
  previewImg: function (e) {
    var index = e.currentTarget.dataset.index; //获取到当前点击的是第几张图片
    wx.previewImage({
      current: this.data.background[index],     //当前图片地址
      urls: this.data.background,               //所有要预览的图片的地址集合 数组形式
    })
  },
  //一键跳转到顶部
  goTop(e) {
    if (wx.pageScrollTo) {//判断这个方法是否可用
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
  share(e){
     console.info("分享");
  },
  //监听屏幕的位置
  onPageScroll: function (res) {
    var _this = this;
    if (res.scrollTop >= 100) {
      _this.setData({
        goTop: true
      })
    } else {
      _this.setData({
        goTop: false
      })
    }
  },
  shoppingList(e){
      var hide = e.currentTarget.dataset.statu; //获取的状态
      // 第1步：创建动画实例 
      var height = wx.getSystemInfoSync().windowHeight;  //获取屏幕高度
      var _this=this;
      var animation = wx.createAnimation({
        duration: 1200,  //动画时长
        timingFunction: "linear", //线性
        delay: 0,  //0则不延迟
        transformOrigin: '50% 50% 0'
      });
      animation.height(height +'px').step();
      //导出动画数据传递给组件的animation属性。
      if(hide=='hide'){
        this.setData({
          animationDatas: animation.export(),
          showModalStatus: false,
        })
      }else{
        this.setData({
          animationDatas: animation.export(),
          showModalStatus: true,
        })
      }
  },
  // 优惠卷的列表
  couponsHide(e){
    this.setData({
      couponsHide: true,
    })
  },
  // 获取子组件信息
  toggleToast(e) {
    this.setData({
      couponsHide: e.detail.couponsHide,
    })
  },
  onClose(){
    this.setData({
      couponsHide: false,
    })
  },


  // 当前选中的规格
  specification(e){
    var index = e.currentTarget.dataset.index; 
    this.setData({
      specification:index
    })
  },
  //选择的数量
  onChange(e){
    console.info(e.detail);
  },

  // 点击跳转到全部评论
  allComment(){
    wx.navigateTo({
      url: '../details/comment/index'
    })
  },
  // 点击跳转到确认订单页面
  affirmOrder(){
    wx.navigateTo({
      url: '../details/affirmOrder/index'
    })
  },
  //跳转的购物车
  onShopping(){
    wx.switchTab({
      url: '../shoppingTrolley/index'
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
    }
    return {
      title: "商品详情",
      path: 'pages/details/index?name=123'
    }
  }
})