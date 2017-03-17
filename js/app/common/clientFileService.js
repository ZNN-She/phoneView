var $clientFileService = (function() {
	var xmlhttp;
	var action = null;
	if (window.XMLHttpRequest) { // 兼容 IE7+, Firefox, Chrome, Opera, Safari 
		xmlhttp = new XMLHttpRequest();
	} else { // 兼容IE6, IE5 
		xmlhttp = new ActiveXObject();
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			if(action && typeof(action) == 'function'){
				action(xmlhttp.responseText);
			}
		}else if(xmlhttp.status == 404){
			console.log('404');
		}
	}
	return {
		get: function(url, callback) {
			action = callback;
			xmlhttp.open("GET", url, true);
			xmlhttp.send();
		}
	}
}(window))