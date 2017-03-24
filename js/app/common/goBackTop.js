define(["jquery"], function($) {
	/*
	**	id: 触发事件元素的id
	**	backEleId: 要回顶部的元素id
	*/
    function GoBackTop(id, backEleId) {
        $("#" + id).on("click", function(argument) {
            if (backEleId) {
                $("#" + backEleId).animate({scrollTop:0},200);
            }else{
            	$("body").animate({scrollTop:0},200);
            }
        });
    }
    return {
        GoBackTop: GoBackTop
    }
});
