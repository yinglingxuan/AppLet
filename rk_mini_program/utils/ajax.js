var app = getApp();
//项目URL相同部分，减轻代码量，同时方便项目迁移
//这里因为我是本地调试，所以host不规范，实际上应该是你备案的域名信息
var host = 'https://jbtcs.jb020.com/';

var urls={
   userDoLogin:'api/user/doLogin',  //登陆的接口
   userJudge:'api/user/judge'      //查看是否登陆的接口
}

/**
* POST请求，
* URL：接口
* postData：参数，json类型
* doSuccess：成功的回调函数
* doFail：失败的回调函数
*/
function request(url, postData, doSuccess, doFail,token) {
  wx.request({
    //项目的真正接口，通过字符串拼接方式实现
    url: host + url,
    header: { "content-type": "application/json;charset=UTF-8","X-Authorization":token},
    data: postData,
    method: 'POST',
    success: function (res) {
      //参数值为res.data,直接将返回的数据传入
      doSuccess(res.data);
    },
    fail: function () {
      doFail();
    },
  })
}

//GET请求，不需传参，直接URL调用，
function getData(url, doSuccess, doFail) {
  wx.request({
    url: host + url,
    header: {
      "content-type": "application/json;charset=UTF-8"
    },
    method: 'GET',
    success: function (res) {
      doSuccess(res.data);
    },
    fail: function () {
      doFail();
    },
  })
}

function clicks() {
  // console.info("点击");
  wx.showLoading({
    mask: true,
    title: '加载中',
  })
}
/**
* module.exports用来导出代码
* js文件中通过var call = require("../util/request.js") 加载
* 在引入引入文件的时候" "里面的内容通过../../../这种类型，小程序的编译器会自动提示，因为你可能
* 项目目录不止一级，不同的js文件对应的工具类的位置不一样
*/
module.exports.clicks=clicks;
module.exports.host = host;
module.exports.urls = urls;
module.exports.request = request;
module.exports.getData = getData;