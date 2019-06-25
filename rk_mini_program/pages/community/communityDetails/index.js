// pages/community/communityDetails/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: '',
    demoData:{
      title:" 21年前的中国降血糖高科技他是怎么样实现的？",
      name:"糖尿病主治师",
      dates:"11-21 07:30",
      lists:[
        {
          title:"",
          texts:[
            "AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。",
            "AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便"
          ],
          imgs:[
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1785783109,1334449550&fm=27&gp=0.jpg"
          ]
        }, {
          title: "功效1: 降血压 降血糖",
          texts: [
            "AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。",
            "AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便"
          ],
          imgs: [
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1785783109,1334449550&fm=27&gp=0.jpg"
          ]
        }
      ]
    }

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