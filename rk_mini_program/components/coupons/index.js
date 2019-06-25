// components/coupons/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    couponsHide: function (e) {
      var myEventDetail = { couponsHide: false } // detail对象，提供给事件监听函数
      this.triggerEvent('myevent', myEventDetail) //myevent自定义名称事件，父组件中使用
    },
  }
})
