//config配置
var REQUIRY_CONFIG = {
    baseUrl: "/js/app",
    paths: {
        /*
         * lib
         */
        "jquery": "../lib/JQWeui/jquery-2.1.4",
        "FastClick": "../lib/JQWeui/fastclick",
        "JQWeui": "../lib/JQWeui/jquery-weui",
        "zNetwork": "../lib/zNetwork",
        "snake": "../lib/zSnake",
        /*
         * common
         */
        "goBackTop": "common/goBackTop",
        /*
         * page
         */
        "index_weui": "page/index_weuiCtrl",
        "myTaskList": "page/myTaskListCtrl",
        "signIn": "page/signInCtrl",
        "test": "page/test"
    },
    shim: {
        "JQWeui": {
            deps: ["jquery", "FastClick"]
        },
        "zNetwork": {
            deps: ["jquery", "JQWeui"]
        },
        "test": {
            deps: ["jquery"]
        }
    }
};
require.config(REQUIRY_CONFIG);

require(["require", "jquery", "FastClick", "JQWeui", "snake", "module"], function(require, $, FastClick, JQWeui, snake, module) {
    FastClick.attach(document.body);
    //获取当前页面html的名字
    var urlParamObj = zSnake.urlParamToJson(window.location.href);
    var urlLastNode = window.location.href.split('/').pop();
    var htmlName = "index_weuiCtrl"; //默认首页
    if (urlLastNode.indexOf("#") != -1) {
        htmlName = urlLastNode.split("#").shift();
    } else {
        htmlName = urlLastNode.split("?").shift();
    }
    htmlName = htmlName.split(".").shift(); //当前html的名字
    //判断是否存在对应模块
    if (String(REQUIRY_CONFIG.paths[htmlName]) == "undefined") {
        console.log("不存在对应的js模板,模板名字要和html名字一致");
    } else {
        // require 加载html对应的js模块
        require([htmlName], function(htmlName) {

        }, function(error) {
            console.log("不存在对应的js模板");
        });
    }
});

/*
 ** 监听历史记录来响应手机物理返回键
 */
window.addEventListener("popstate", function(e) {
    for(var sessionStorageItem in sessionStorage){
        console.log(sessionStorageItem + "=" +sessionStorage[sessionStorageItem]);
    }
    if(sessionStorage.prjSessionArry){
        $(".prj-view").addClass('none');
        $("#" + sessionStorage.prjSessionArry.pop()).removeClass('none');
    }
    
}, false);
