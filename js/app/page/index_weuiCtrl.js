define(["goBackTop"], function(goBackTop) {
    /*$.prompt({
        title: '登陆',
        text: '请输入注册的昵称或手机号',
        input: '',
        empty: true, // 是否允许为空
        onOK: function(inputText) {
            if (String(localStorage[inputText]) == "undefined" || String(localStorage[inputText]) == "") {
                $.alert("你当前没有注册，请完成注册", "系统提示", function() {
                    window.location.href = "/view/page/signIn.html";
                });
            }
        },
        onCancel: function() {
            location.reload();
        }
    });*/

    $("#tab1").pullToRefresh().on("pull-to-refresh", function() {
        setTimeout(function() {
            console.log(1);
            $("#tab1 .content-padded").append('<h1>页面一</h1>');
            $("#tab1").pullToRefreshDone();
        }, 2000);
    });
    $("#tab2").pullToRefresh().on("pull-to-refresh", function() {
        setTimeout(function() {
            console.log(2);
            $("#tab2 .content-padded").append('<h1>页面二</h1>');
            $("#tab2").pullToRefreshDone();
        }, 2000);
    });

    // 上拉加载
    var loading_1 = false,
        loading_2 = false;
    $("#tab1").infinite().on("infinite", function() {
        if (loading_1) return;
        loading_1 = true;
        setTimeout(function() {
            $("#tab1 .content-padded").append("<p>《世界著名计算机教材精选·人工智能:一种现代的方法(第3版)》英文版有1100多页，教学内容非常丰富，不但涵盖了人工智能基础、问题求解、知识推理与规划等经典内容，而且还包括不确定知识与推理、机器学习、通讯感知与行动等专门知识的介绍。目前我们为本科生开设的学科基础必修课“人工智能导论”主要介绍其中的经典内容，而研究生必修的核心课程“人工智能原理”主要关注其中的专门知识。其实《世界著名计算机教材精选·人工智能:一种现代的方法(第3版)》也适合希望提高自身计算系统设计水平的广大应用计算技术的社会公众，对参加信息学奥林匹克竞赛和ACM程序设计竞赛的选手及其教练员也有一定的参考作用。</p>");
            loading_1 = false;
        }, 2000);
    });
    $("#tab2").infinite().on("infinite", function() {
        if (loading_2) return;
        loading_1 = true;
        setTimeout(function() {
            $("#tab2 .content-padded").append("<p>《世界著名计算机教材精选·人工智能:一种现代的方法(第3版)》英文版有1100多页，教学内容非常丰富，不但涵盖了人工智能基础、问题求解、知识推理与规划等经典内容，而且还包括不确定知识与推理、机器学习、通讯感知与行动等专门知识的介绍。目前我们为本科生开设的学科基础必修课“人工智能导论”主要介绍其中的经典内容，而研究生必修的核心课程“人工智能原理”主要关注其中的专门知识。其实《世界著名计算机教材精选·人工智能:一种现代的方法(第3版)》也适合希望提高自身计算系统设计水平的广大应用计算技术的社会公众，对参加信息学奥林匹克竞赛和ACM程序设计竞赛的选手及其教练员也有一定的参考作用。</p>");
            loading_2 = false;
        }, 2000);
    });

    // go back top
    goBackTop.GoBackTop("goBackTop-tab1", "tab1");
    goBackTop.GoBackTop("goBackTop-tab2", "tab2");

    //
    $("#prj-filtrate-open-icon").on("click", function() {
        //添加历史记录
        history.pushState({ prjCoverFloor: "prj-cover-floor" }, "");
        //添加sessionStorage
        sessionStorage.prjCoverFloor = true;
        $("#prj-cover-floor").attr("active") ? $("#prj-cover-floor").removeClass("active") : $("#prj-cover-floor").addClass("active");
        $("#prj-filtrate-block").removeClass("none").addClass("active");
    });
    //点击浮层隐藏右弹框
    $("#prj-cover-floor").on("click", function() {
        window.history.back(); //触发popstate
    });

    //
    $("#contact-us-btn").on("click", function () {
        //添加历史记录
        history.pushState({ contactUsPage: "contact-us-page" }, "");
        //添加sessionStorage
        sessionStorage.contactUsPage = true;
        $("#contact-us-page").removeClass('none');
        $("#index-weui-page").addClass('none');
    });
})
