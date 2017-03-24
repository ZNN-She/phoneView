require.config({
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
         * page
         */
        "index_weui": "page/index_weui",
        "test": "page/test"
    },
    shim: {
        "JQWeui": {
            deps: ["jquery", "FastClick"]
        },
        "zNetwork": {
            deps: ["jquery", "JQWeui"]
        }
    }
});

require(["jquery", "FastClick", "JQWeui", "snake"], function($, FastClick, JQWeui, snake) {
    FastClick.attach(document.body);
    $(window).ready(function() {
        var deviceWidth = document.documentElement.clientWidth;
        console.log(deviceWidth);
        if (deviceWidth > 750) deviceWidth = 750;
        document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
    });
    var urlParamObj = zSnake.urlParamToJson(window.location.href);
    var urlLastNode = window.location.href.split('/').pop();
    var htmlName = "index_weui"; //默认首页
    if (urlLastNode.indexOf("#") != -1) {
        htmlName = urlLastNode.split("#").shift();
    } else {
        htmlName = urlLastNode.split("?").shift();
    }
    htmlName = htmlName.split(".").shift();
    // require 加载对应的模块
    require([htmlName], function(htmlName) {
        
    });

});
