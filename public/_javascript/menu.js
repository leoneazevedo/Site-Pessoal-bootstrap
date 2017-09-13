var _rys = jQuery.noConflict();
_rys("document").ready(function(){

	_rys(window).scroll(function () {
		if (_rys(this).scrollTop() > 100) {
			_rys('.nav-container').addClass("f-nav");
		} else {
			_rys('.nav-container').removeClass("f-nav");
		}
	});
});