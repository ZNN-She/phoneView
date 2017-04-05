define(["jquery"], function($) {
    var DEFAULT_CFG = {
        id: "", //页面的id  String || Array
        enterClass: "", //进入的class
        leaveClass: "", //离开的class
        type: 1, //1:操作其它元素 2:只操作当前元素 默认是1
        enterFn: null,
        leaveFn: null
    };
    var ENTER_CLASS = {},
        LEAVE_CLASS = {};

    function rootRoute(id, enterClass, leaveClass, type) {
        var cfg = getCfg(id, enterClass, leaveClass, type);
        sessionStorage.Z_SNAKE_STACK = JSON.stringify([createStackUnit(cfg)]);
    }

    function addRoute(id, enterClass, leaveClass, type) {
        var cfg = getCfg(id, enterClass, leaveClass, type);
        addHistory(cfg);
        pushStack(cfg);
    }

    function getCfg(id, enterClass, leaveClass, type) {
        if (Object.prototype.toString.call(id) == "[object Object]") {
            return $.extend({}, DEFAULT_CFG, id);
        } else {
            return $.extend({}, DEFAULT_CFG, {
                id: id,
                enterClass: enterClass,
                leaveClass: leaveClass,
                type: type
            });
        }
    }

    function addHistory(cfg) {
        var state = String(cfg.id)
        history.pushState({ state: state }, "");
    }

    function pushStack(cfg) {
        var zSnakeStack = [];
        if (String(sessionStorage.Z_SNAKE_STACK) == "undefined") {
            sessionStorage.Z_SNAKE_STACK = "[]";
        }
        zSnakeStack = eval("(" + sessionStorage.Z_SNAKE_STACK + ")");
        zSnakeStack.push(createStackUnit(cfg));
        sessionStorage.Z_SNAKE_STACK = JSON.stringify(zSnakeStack);
        enter(cfg);
    }

    function popStack() {
        var zSnakeStack = eval("(" + sessionStorage.Z_SNAKE_STACK + ")");
        zSnakeStack.pop();
        sessionStorage.Z_SNAKE_STACK = JSON.stringify(zSnakeStack);
    }

    function createStackUnit(cfg) {
        var unit = $.extend(true, {}, cfg);
        var unit2 = {
            id: unit.id,
            enterClass: unit.enterClass,
            leaveClass: unit.leaveClass,
            type: unit.type,
            enterFn: unit.enterFn ? "" + unit.enterFn : unit.enterFn,
            leaveFn: unit.leaveFn ? "" + unit.leaveFn : unit.leaveFn
        }
        return unit2;
    }

    function enter(cfg) {
        var zSnakeStack = eval("(" + sessionStorage.Z_SNAKE_STACK + ")"),
            newUnit = zSnakeStack[zSnakeStack.length - 1],
            oldUnit = zSnakeStack[zSnakeStack.length - 2];
        if (cfg.enterFn) {
            cfg.enterFn();
        } else {
            $("#" + oldUnit.id).css({ "display": "none" });
            $("#" + cfg.id).css({ "display": "black" });
        }
    }

    function leave() {
        var zSnakeStack = eval("(" + sessionStorage.Z_SNAKE_STACK + ")"),
            newUnit = zSnakeStack[zSnakeStack.length - 1],
            oldUnit = zSnakeStack[zSnakeStack.length - 2];
        newUnit.leaveFn = eval("(" + newUnit.leaveFn + ")");
        oldUnit.leaveFn = eval("(" + oldUnit.leaveFn + ")");
        if (zSnakeStack.length <= 1) {
            return;
        }
        if (newUnit.leaveFn) {
            newUnit.leaveFn();
        } else {
            $("#" + newUnit.id).css({ "display": "none" });
            $("#" + oldUnit.id).css({ "display": "black" });
        }
        popStack();
    }

    function getEnterViewId() {

    }

    function getLeaveViewId() {

    }

    window.addEventListener("popstate", function(e) {
        leave();
        console.log(123);
    }, false);
    return {
        rootRoute: rootRoute,
        addRoute: addRoute
    }
});
