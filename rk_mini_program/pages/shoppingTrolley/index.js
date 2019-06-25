// pages/shoppingTrolley/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      lists:['1','2','3'], //数据列表
      result:[],      //多选的数组
      radio:'',
      compile:'编辑'
  },
  onClose(e){  //监听右滑的删除
    console.info(e.currentTarget.dataset.id);
  },
  demo(e){
    console.info("滑动");
  },
  onChange(event) {  //监听多选的值
    var eLength = event.detail.length;
    var listLength=this.data.lists.length;
    console.info(eLength + "---" + listLength);
    var arr = event.detail;
    this.setData({
      result: arr
    });
    if (eLength>=listLength){
      this.setData({
        radio: ["1"]
      });
    }else{
      this.setData({
        radio: ''
      });
    }
    
  },
  onRadio(e){ //监听单选的值
    var value = e.detail;
    if (this.data.radio==1){
      this.setData({
        radio: '',
        result: []
      });
    }else{
      this.setData({
        radio: value,
        result: this.data.lists
      });
    }
  },
  //步进器的值
  quCount(e){
    console.info(e.currentTarget.dataset.change);//用于区分是哪个步进器
    console.info(e.detail);   //对应的值
  },
  // 点击编辑
  compile(){
    if (this.data.compile=='编辑'){
       this.setData({
         compile:'完成'
       })
    }else{
      this.setData({
        compile: '编辑'
      })
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