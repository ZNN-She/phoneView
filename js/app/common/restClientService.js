/**
 * Created by nanning_zhang on 2016/7/10.
 */
var $restClient = (function (window, undefined) {
    var ajaxSettings = {
        url: null,
        type: "get",
        dataType: 'json',
        timeout: 10000,
        contentType: "application/json; charset=utf-8",
        headers: {'Content-Type': 'application/json'},
        data: null,
        success: function (data) {
            if (data.resultCode === 0) {
                mui.toast(data.resultMessage);
            } else if (data.resultCode == -1) {
                //cookie过期
                window.location.href = data.resultMessage;
            } else {
                mui.toast(data.resultMessage);
            }
        },
        error: function (xhr, type, errorThrown) {
            //异常处理；
            mui.toast("请求错误:" + xhr.status + "|" + xhr.statusText);
        }
    };
    function getParam(param, data) {
        var optionData = null;
        if (data && typeof data == "object") {
            optionData = JSON.stringify(data);
        } else if (param) {
            optionData = param;
        }
        return optionData
    }
    function getOption(url, param, data, action,option, type){
        var settings = ajaxSettings;
        for (var key in option) {
            settings[key] = option[key];
        }
        settings.url = url;
        settings.data = getParam(param, data);
        settings.type = type;
        if(action && typeof(action) === "object"){
            settings.success = function(data){
                if(settings.dataType == 'json'){
                    if (data.resultCode === 0) {
                        if(action.successCallback && typeof action.successCallback == "function"){
                            action.successCallback(data);
                        }else{
                            mui.toast(data.resultMessage);
                        }
                    } else if (data.resultCode == -1) {
                        //cookie过期
                        window.location.href = data.resultMessage;
                    } else {
                        if(action.failCallback && typeof action.failCallback == "function"){
                            action.failCallback(data);
                        }else{
                            mui.toast(data.resultMessage);
                        }
                    }
                }else {
                    action.successCallback(data);
                }
            };
            settings.error = function(xhr, type, errorThrown){
                if(action.errorCallback && typeof action.errorCallback == "function"){
                    action.errorCallback(data);
                }else{
                    mui.toast("请求错误:" + xhr.status + "|" + xhr.statusText);
                }
            };
        }
        return settings;
    }
    return {
        get: function (url, param, action,option) {
            mui.ajax(getOption(url, param, null, action,option, "get"));
        },
        post: function (url, param, data, action,option) {
            mui.ajax(getOption(url, param, data, action,option, "post"));
        },
        put: function (url, param, data, action,option) {
            mui.ajax(getOption(url, param, data, action,option, "put"));
        },
        deletes: function (url, param, data, action,option) {
            mui.ajax(getOption(url, param, data, action, option,"delete"));
        },
        postFormData: function (url, param, action,option) {
            mui.ajax(getOption(url, param, null, action,option, "post"));
        }
    }
}(window));