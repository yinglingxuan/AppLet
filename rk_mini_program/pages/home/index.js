// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    len: '',  //全球分红的字符数
    background: ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1785783109,1334449550&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1785783109,1334449550&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1785783109,1334449550&fm=27&gp=0.jpg'],
    select:"1",   //滚动导航栏选中的位置
    goTop:false,
    location:false   //监听导航条是否直接定位到头部
  },
  // 获取到滚动导航条的位置
  select(e){
    var id = e.currentTarget.dataset.hi;
    this.setData({
      select:id
    })
  },
  // 跳转到搜索页面
  skip(){
    wx.navigateTo({
      url: '../search/index'
    })
  },
  //一键跳转到顶部
  goTop(e){
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
  //监听屏幕的位置
  onPageScroll: function (res) {
    var _this = this;
    if (res.scrollTop>=100){
      _this.setData({
        goTop:true
      })
    }else{
      _this.setData({
        goTop: false
      })
    }
    if (res.scrollTop>438){
      _this.setData({
        location: true
      })
    }else{
      _this.setData({
        location: false
      })
    }
    
  },
  // 这里只写了核心函数 显示 数字 n （可以是任意位数的数字）
  show_num(n) {
    var len = String(n).length;  //传入的数字是多少位的
    this.setData({   //记录要遍历出多少位的数值
      len: len,
    })
    var char = String(n).split("")
    // h存储数字块高度
    var h = ''
    let self = this
    // 创造节点选择器
    wx.createSelectorQuery().select('.unit-num').boundingClientRect(function (rect) {
      h = rect.height; //获取到当前数字方框的高度
      // 这里用数组存储所有动画 方便for循环出来的view绑定不同animation
      var animate = []
      for (var i = 0; i < len; i++) {
        animate[i] = wx.createAnimation()
        animate[i].top(-parseInt(h) * char[i]).step({   //跳动到对呀的方框时间是1500毫秒
          duration: 1500
        })
        // 这里数组变量赋值 
        var deletedtodo = 'animation[' + i + ']';  //因为是多个动画效果，所以key是个数组
        self.setData({
          //输出动画
          [deletedtodo]: animate[i].export()
        })
      }
    }).exec()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.show_num('12345678');
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