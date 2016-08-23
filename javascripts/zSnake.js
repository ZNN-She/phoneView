var zSnake = (function () {
	
	return {
		parseDom:function (domStr) {
			var rootDom = document.createElement('div');
			rootDom.innerHTML = domStr;
			return rootDom.childNodes[0];
		}
	} 
}(window))