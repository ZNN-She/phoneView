/*
 *  operation Function
 */
var phoneBack = function(operation,id) {
    init();
    function init() {
        addHistory();
        storeSessionStorage();
    }

    function addHistory() {
        var htmlName = getHtmlName();
        history.pushState({ htmlName: htmlName }, "");
    }

    function storeSessionStorage() {
        var zSnakeStack = [];
        if (String(sessionStorage.Z_SNAKE_STACK) == "undefined") {
            sessionStorage.Z_SNAKE_STACK = "[]";
        }
        zSnakeStack = eval("(" + sessionStorage.Z_SNAKE_STACK + ")");
        zSnakeStack.push("" + operation);
        sessionStorage.Z_SNAKE_STACK = JSON.stringify(zSnakeStack);
    }

    function getHtmlName() {
        //获取当前页面html的名字
        var urlParamObj = zSnake.urlParamToJson(window.location.href);
        var urlLastNode = window.location.href.split('/').pop();
        var htmlName = "";
        if (urlLastNode.indexOf("#") != -1) {
            htmlName = urlLastNode.split("#").shift();
        } else {
            htmlName = urlLastNode.split("?").shift();
        }
        htmlName = htmlName.split(".").shift(); //当前html的名字
        return htmlName;
    }

    function popSessionStorage() {
        var zSnakeStack = eval("(" + sessionStorage.Z_SNAKE_STACK + ")");
        zSnakeStack.pop();
        sessionStorage.Z_SNAKE_STACK = JSON.stringify(zSnakeStack);
    }

    function back() {
        var zSnakeStack = eval("(" + sessionStorage.Z_SNAKE_STACK + ")"),
            backFn = eval("(" + zSnakeStack[zSnakeStack.length - 1] + ")");
        if (String(backFn) == "undefined" || !backFn) {
            return;
        }
        backFn();
        popSessionStorage();
    }

    window.addEventListener("popstate", function(e) {
        back();
        console.log(123);
    }, false);

    return {

    };
};
