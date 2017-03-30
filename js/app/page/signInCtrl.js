define(["jquery"], function($) {
    $("#sign-in").on("click", function() {
        $(".sign-in").addClass('none');
        $(".sign-in-success").removeClass('none');
        localStorage[$("#sign-mobile").val()] = $("#sign-mobile").val();
    });
    $("#go-perfect-information").on("click", function() {
        $(".sign-in-success").addClass('none');
        $(".perfect-information").removeClass('none');
    });
    $("#back-home").on("click", function() {
        window.location.href = "/index_weui.html";
    });
    $("#save-information").on("click", function() {
        localStorage[$("#sign-nick").val()] = $("#sign-nick").val();
        window.location.href = "/index_weui.html";
    });
    //性别 
    $("#sex").select({
        title: "选择手机",
        items: [{
            title: "男",
            value: "1",
        }, {
            title: "女",
            value: "2",
        }]
    });
    // 日期
    $("#birthday").calendar({
        value: ['1980-1-1'],
        onChange: function(p, values, displayValues) {
            console.log(values, displayValues);
        }
    });
});
