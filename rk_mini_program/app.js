//app.js
var ajax = require("utils/ajax.js");
App({
  onLaunch: function () {
    var that = this;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.getSetting({ //判断是否授权
      success(res) {
        if (res.authSetting['scope.userInfo']) {  //判断是否授权
          //  console.info("登陆授权"); 
           wx.getUserInfo({  //授权成功之后
              success: function (res) {
                var _thisRes = res;
                wx.login({
                  success: function (res) {
                    var data = { //要传输的数据
                      jsCode: res.code,
                      encryptedData: _thisRes.encryptedData,
                      iv: _thisRes.iv
                    };
                    // console.info(data);
                    var url = ajax.urls.userDoLogin;
                    wx.request({
                      //项目的真正接口，通过字符串拼接方式实现
                      url: ajax.host + url,
                      header: { "content-type": "application/json;charset=UTF-8" },
                      data: data,
                      method: 'POST',
                      success: function (res) {
                        //参数值为res.data,直接将返回的数据传入
                        wx.setStorageSync('result-Code', res.data.result);  //保存
                      },
                      fail: function (res) {
                        console.info("错误", res);
                      },
                    })
                  }
                })
              }
           })    
        } else {  //没有授权
          // console.info("没有登陆");
          wx.reLaunch({
            url: '/pages/home/impower/index'
          })
        }
      }
    })


    //登陆的方法
    // wx.login({
    //   success: function (res) {
    //     console.log(res)
    //     that.globalData.loginCode = res.code;
    //     var data = { 
    //       jsCode: getApp().globalData.loginCode 
    //     };
    //     wx.request({
    //       //项目的真正接口，通过字符串拼接方式实现
    //       url: ajax.host + ajax.urls.userJudge,
    //       header: {"content-type": "application/json;charset=UTF-8"},
    //       data: data,
    //       method: 'POST',
    //       success: function (res) {
    //         //参数值为res.data,直接将返回的数据传入
    //         console.info(res);
    //         if(res.data.resultCode==-2){
    //           console.info("跳转");
    //           wx.reLaunch({
    //             url: '/pages/home/impower/index'
    //           })
    //         } else if (res.data.resultCode == 1){
    //           wx.setStorageSync('result-Code', res.data.result);  //保存
    //         }else{
    //           wx.showToast({
    //             title: res.data.result.resultMsg,
    //             icon: 'success',
    //             duration: 2000
    //           })
    //         }
    //       },
    //       fail: function (res) {
    //         console.info("错误",res);
    //       },
    //     })
        
    //   }
    // })
    // wx.checkSession({ //监听是否失效
    //   fail() {
    //     console.info("失败");
    //     wx.login({
    //       success: function (res) {
    //         console.log(res)
    //         that.globalData.loginCode = res.code;
    //         wx.navigateTo({   //失效就跳转到授权页面
    //           url: 'pages/home/impower/index'
    //         })
    //       }
    //     })
    //   }
    // }),
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    loginCode:''
  }
})