// pages/userCenter/myEvaluate/index.js
Page({
  data: {
    files: [],
  },
  onLoad: function (e) {

  },

  // 添加图片
  chooseImage: function (e) {
    var that = this;
    var images = that.data.files;
    wx.chooseImage({
      count: 6 - images.length,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        // that.setData({
        //   files: that.data.files.concat(res.tempFilePaths)
        // });

        var pics = that.data.files;
        console.log(pics)

        if (pics.length >= 4) {
          // that.showMessage('最多上传4张');
          wx.showModal({
            // title: '提示',
            content: '最多上传4张',
          })
          return false
        }
        if (res.tempFilePaths.length <= 4) {
          for (var index in res.tempFilePaths) {
            that.setData({
              files: that.data.files.concat(res.tempFilePaths)
            });
          }
        } else {
          // that.showMessage('最多上传九张');
          wx.showModal({
            // title: '提示',
            content: '最多上传4张',
          })
        }

      }
    })
  },
  // 预览图片
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id,
      urls: this.data.files
    })
  },
  //长按图片删除
  deleteImage: function (e) {
    var that = this;
    var images = that.data.files;
    var index = e.currentTarget.dataset.index; //获取当前长按图片下标
    wx.showModal({
      // title: '系统提醒',
      content: '确定要删除此图片吗？',
      success: function (res) {
        if (res.confirm) {
          images.splice(index, 1);
        } else if (res.cancel) {
          return false;
        }
        that.setData({
          files: images
        });
      }
    })
  },
  // 图片删除效果
  closeClick: function (e) {
    var that = this;
    var images = that.data.files;
    var index = e.currentTarget.dataset.index; //获取当前按图片下标
    console.log(index)
    wx.showModal({
      // title: '系统提醒',
      content: '确定要删除此图片吗？',
      success: function (res) {
        if (res.confirm) {
          images.splice(index, 1);
        } else if (res.cancel) {
          return false;
        }
        that.setData({
          files: images
        });
      }
    })

  },


  onPullDownRefresh: function () {

  },

  onRender: function () {
  },
  onShareAppMessage: function () {

  },
  onPageScroll: function (e) {

  },

});