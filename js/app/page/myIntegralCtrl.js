define(["jquery", "phoneback"], function($, phoneback) {
    //全能币提现
    $("#withdraw-cash-btn").on("click", function() {
        $("#withdraw-cash-page").removeClass('none');
        $("#my-integral-page").addClass('none');
        phoneBack(function() {
            $("#withdraw-cash-page").addClass('none');
            $("#my-integral-page").removeClass('none');
        });
    });
    $("#withdraw-cash").on("click", function(argument) {
        $("#withdraw-cash-page").addClass('none');
        $("#withdraw-password-page").removeClass('none');
        phoneBack(function() {
            $("#withdraw-cash-page").removeClass('none');
            $("#withdraw-password-page").addClass('none');
        });
    });
    $("#withdraw-cash-confirm").on("click", function(argument) {
        $.alert(
            "我们将在48小时内处理完成您的提现申请，如遇法定节假日处理时间将进延，还请谅解！",
            "提交成功",
            function() {

            }
        );
    });

    // 密码设置
    $("#password-setting").on("click", function(argument) {
        $("#my-integral-page").addClass('none');
        $("#setting-password-page").removeClass('none');
        phoneBack(function() {
            $("#setting-password-page").addClass('none');
            $("#my-integral-page").removeClass('none');
        });
    });
    $("#setting-password-one-btn").on("click", function(argument) {
        $("#setting-password-one").addClass('none');
        $("#setting-password-two").removeClass('none');
        $("#setting-password-two-input").val("");
        phoneBack(function() {
            $("#setting-password-two").addClass('none');
            $("#setting-password-one").removeClass('none');
        });
    });
    $("#setting-password-two-btn").on("click", function(argument) {
        $("#setting-password-one").removeClass('none');
        $("#setting-password-two").addClass('none');
        $("#setting-password-page").addClass('none');
        $("#my-integral-page").removeClass('none');
        $("#setting-password-one-input").val("");
        $.toast("支付密码设置成功，请牢记！");
        phoneBack(function() {
            window.location.href = "/index_weui.html";
        });
    });

    // 修改密码

    // 充值
    $("#recharge-btn").on("click", function(argument) {
        $("#my-integral-page").addClass('none');
        $("#recharge-page").removeClass('none');
        phoneBack(function() {
            $("#recharge-page").addClass('none');
            $("#my-integral-page").removeClass('none');
        });
    });
    // 账单明细
    $("#integral-bill-btn").on("click", function(argument) {
    	$("#my-integral-page").addClass('none');
        $("#integral-bill-page").removeClass('none');
        phoneBack(function() {
            $("#integral-bill-page").addClass('none');
            $("#my-integral-page").removeClass('none');
        });
    });
    $('.weui-tab__bd-item').pullToRefresh().on('pull-to-refresh', function(done) {
        var self = this
        setTimeout(function() {
        	$(self).find(".content-padded").append("<p>aaaaa</p>")
            $(self).pullToRefreshDone();
        }, 2000)
    });
    $(".infinite").infinite().on("infinite", function() {
        var self = this;
        if (self.loading) return;
        console.log(self)
        self.loading = true;
        console.log(self);
        setTimeout(function() {
            $(self).find(".content-padded").append("<p>我是加载的新内容。我是加载的新内容。。。我是加载的新内容。。。我是加载的新内容。。。我是加载的新内容。。。我是加载的新内容。。。我是加载的新内容。。。我是加载的新内容。。。我是加载的新内容。。。。。</p>");
            self.loading = false;
        }, 1000); //模拟延迟
    });
});
