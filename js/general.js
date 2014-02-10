var isMobile = {
	Android: function() { return navigator.userAgent.match(/Android/i); },
	BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
	iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
	Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
	Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
	any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

function dump(obj) {
	var out = '';
	for (var i in obj) out += i + ": " + obj[i] + "\n";
	return out;
}

$(document).ready(function(e){
	//var dump_div = '<div id="vars_dump" style="width:100%; height:100%; position:fixed; top:0px; left:0px; background:#fff; color:#000; overflow:auto; z-index:10009999990"></div>';
	//$("body").append(dump_div);
	if(isMobile.Android()){
		if($.browser.version < 535 ) {
			$(".right-side-nav-items").css({
				"right":"0px",
				"margin-top":"0px",
				"position":"fixed",
				"top":"0px",
			});
			
			$(".temp_nav").css("display","none");
		}
	}
});