//获取应用实例
var app = getApp()
Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    isStatus: 'pay',//10待付款，20待发货，30待收货 40、50已完成
    page: 0,
    refundpage: 0,
    orderList0: [, , , ,],
    orderList1: [, , ,],
    orderList2: [],
    orderList3: [],
    orderList4: [],
    mod: [
      'aspectFit',  //保持纵横比缩放图片，使图片的长边能完全显示出来。
      'widthFix',  // 宽度不变，高度自动变化，保持原图宽高比不变
      'scaleToFill'  //不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
    ],
  },
  
  //tab切换
  swichNav: function (e) {
    var that = this;
    if (that.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      var current = e.target.dataset.current;
      that.setData({
        currentTab: parseInt(current),
        isStatus: e.target.dataset.otype,
      });

      //没有数据就进行加载
      switch (that.data.currentTab) {
        case 0:
          !that.data.orderList0.length && that.loadOrderList();
          break;
        case 1:
          !that.data.orderList1.length && that.loadOrderList();
          break;
        case 2:
          !that.data.orderList2.length && that.loadOrderList();
          break;
        case 3:
          !that.data.orderList3.length && that.loadOrderList();
          break;
        case 4:
          that.data.orderList4.length = 0;
          that.loadReturnOrderList();
          break;
      }
    };
  },
  //订单列表改变
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  }, 
  // 加载
  onLoad: function (options) {
    this.initSystemInfo();
    this.setData({
      currentTab: parseInt(options.currentTab),
      isStatus: options.otype
    });

    if (this.data.currentTab == 4) {
      this.loadReturnOrderList();
    } else {
      this.loadOrderList();
    }
  },
  //获取高度
  initSystemInfo: function () {
    var that = this;
    wx:wx.getSystemInfo({
      success: function (res) {
        var windowHeight = res.windowHeight - 88;   //去掉上下两边的tabbar
        that.setData({
          scrollHeight: windowHeight,
        })
      },
    })
  },
  //  高度自适应 

  
  //订单列表
  loadOrderList: function () {
    // var that = this;
    // wx.request({
    //   url: '',
    //   method: 'post',
    //   data: {
    //     uid: app.d.userId,
    //     order_type: that.data.isStatus,
    //     page: that.data.page,
    //   },
    //   header: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   success: function (res) {
    //     //--init data        
    //     var status = res.data.status;
    //     var list = res.data.ord;
    //     switch (that.data.currentTab) {
    //       case 0:
    //         that.setData({
    //           orderList0: list,
    //         });
    //         break;
    //       case 1:
    //         that.setData({
    //           orderList1: list,
    //         });
    //         break;
    //       case 2:
    //         that.setData({
    //           orderList2: list,
    //         });
    //         break;
    //       case 3:
    //         that.setData({
    //           orderList3: list,
    //         });
    //         break;
    //       case 4:
    //         that.setData({
    //           orderList4: list,
    //         });
    //         break;
    //     }
    //   },
    //   fail: function () {
    //     // fail
    //     wx.showToast({
    //       title: '网络异常！',
    //       duration: 2000
    //     });
    //   }
    // });
  },
})
