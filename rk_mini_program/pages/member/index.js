// pages/member/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: '',
    imgs: ['https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/023@2x.png', 'https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/024@2x.png', 'https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/025@2x.png', 'https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/026@2x.png'],
    swiperIndex: '0',   //当前滑动的第几张图
    
    colors:[
      "common",
      "elite",
      "advanced",
      "partner"
    ],
    demoData:[{
      name: "钻石会员",
      edition:"普通版",
      money:"398",
      equity:[
        {
          imgs:"https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/012@2x.png",
          name:"大麦清汁"
        }, 
        {
          imgs: "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/013@2x.png",
          name: "免费申领"
        },
        {
          imgs: "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/014@2x.png",
          name: "推荐奖励"
        },
        {
          imgs: "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/015@2x.png",
          name: "推广二维码"
        },
      ],
      explain:[
        "1.配赠价值4368元产品(大麦青汁*26盒); ",
        "2.一年大麦青汁使用量，首月直接获得4盒大麦青汁 从第二个月 开始每15天可额外免费领取1盒大麦青汁 (总计26盒); ",
        "3.推荐钻石会员，直推推荐奖励80元"
      ]
    }, {
        name: "精英代理",
        edition: "精英版",
        money: "2200",
        equity: [
          {
            imgs: "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/012@2x.png",
            name: "小分子肽"
          },
          {
            imgs: "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/017@2x.png",
            name: "肠麦清"
          },
          {
            imgs: "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/018@2x.png",
            name: "进货8折"
          },
          {
            imgs: "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/014@2x.png",
            name: "推荐奖励"
          },
          {
            imgs: "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/016@2x.png",
            name: "推广二维码"
          },
        ],
        explain: [
          "1.配赠价值2784元产品(小分子肽*4盒&肠麦清 *4盒); ",
          "2.享受进货折扣8折;",
          "3.推荐钻石会员，直接推荐奖励100元;",
          "4.推荐精英代理，直推推荐奖励500元，间接推荐 奖励100元。"
        ]
      }, {
        name: "高级代理",
        edition: "高级版",
        money: "19800",
        equity: [
          {
            imgs: "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/012@2x.png",
            name: "小分子肽"
          },
          {
            imgs: "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/017@2x.png",
            name: "肠麦清"
          },
          {
            imgs: "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/018@2x.png",
            name: "进货6.5折"
          },
          {
            imgs: "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/014@2x.png",
            name: "推荐奖励"
          },
          {
            imgs: "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/016@2x.png",
            name: "全球分红"
          },
          {
            imgs: "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/016@2x.png",
            name: "推广二维码"
          },
        ],
        explain: [
          "1.配赠价值30600元产品(小分子肽*44盒&肠麦清*44盒); ",
          "2.享受进货折扣6.5折; ",
          "3.推荐钻石会员，直接推荐奖励130元，团队奖励20元;",
          "4.推荐精英代理，直接推荐奖励600元，间接推荐奖励200元， 团队奖励 50元; ",
          "5.推荐高级代理，直接推荐奖励5000元，间接 推荐奖励1000元;",
          "6.高级代理全球分红:每卖出一盒产品，将拿出1元，放入奖金池; 按照 年度，平均分配给高级代理;"
        ]
      }, {
        name: "合伙人",
        edition: "合伙人版",
        money: "111200",
        equity: [
          {
            imgs: "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/012@2x.png",
            name: "小分子肽"
          },
          {
            imgs: "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/017@2x.png",
            name: "肠麦清"
          },
          {
            imgs: "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/018@2x.png",
            name: "进货5折"
          },
          {
            imgs: "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/014@2x.png",
            name: "推荐奖励"
          },
          {
            imgs: "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/020@2x.png",
            name: "星级奖励"
          },
          {
            imgs: "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/016@2x.png",
            name: "全球分红"
          },
          {
            imgs: "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/021@2x.png",
            name: "合伙团队奖"
          },
          {
            imgs: "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/022@2x.png",
            name: "荣誉成就奖"
          },
          {
            imgs: "https://jibao-rk0514.oss-cn-beijing.aliyuncs.com/images/016@2x.png",
            name: "推广二维码"
          },
        ],
        explain: [
          "1.配赠价值222400元产品(小分子肽*320盒&肠麦清*320盒); ",
          "2.享受进货折扣5折; ",
          "3.推钻石会员，直接推荐奖励150元，团队奖励30元; ",
          "4.推荐精英代理，直接推荐奖励800元，间接推荐奖励300元， 团队奖励100元; ",
          "5.推荐高级代理，直接推荐奖励6000元，间接 推荐奖励2000元，团队奖励300元; ",
          "6.推荐瑞康合伙人，直接推 荐奖励24000元，间接推荐奖励6000元; ",
          "7.合伙人星级奖励:每推荐一个瑞康合伙人获得一个星级; ",
          "8.合伙人全球分红:每卖出一盒产品，将拿出2元,放入奖金池; 按照年度，50%按照合伙人星级个数平均分配,50%按照个人 业绩百分比进行分配;",
          "9.合伙人团队奖，按照月度 合伙人团队每月销售业绩达到10万 获得1%销售业绩奖励; 合伙人团队每月销售业绩达到30万获得3%销售业绩奖励; 合伙人团队每月销售业绩达到50万获得5%销售业绩奖励; 合伙人团队每月销售业绩达到100万获得6%销售业绩奖励; 合伙人团队每月销售业绩达到150万获得7%销售业绩奖励; 合伙人团队每月销售业绩达到200万以上获得9%销售业绩奖励。",
          "10.终身荣誉成就奖，按照年度 合伙人团队每年销售业绩达到 500万获得10万元现金奖励加欧洲豪华游; 合伙人团队每年销售业绩达到1000万获得30万元现金奖励加20 万元公益慈善基金; 合伙人团队每年销售业绩达到2000万获得80万元现金奖励加豪 车一部;"
        ]
      }
    ]
  },
  // 轮播滑动时，获取当前的轮播id
  swiperChange(e) {
    const that = this;
    console.info(e.detail.current);
    that.setData({
      swiperIndex: e.detail.current,
    })
  },
  generalize(e){ //点击推广二维码
    wx.navigateTo({
      url: "../member/memberPay/index?id=" + this.data.swiperIndex
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