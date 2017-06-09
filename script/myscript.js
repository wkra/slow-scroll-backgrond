jQuery(document).ready(function(){
	var windowHeight = jQuery(window).height();
	var windowScrollPosTop = jQuery(window).scrollTop();
	var windowScrollPosBottom = windowHeight + windowScrollPosTop;
	var windowWidth = jQuery(window).width();
	
	myScrollVal(0.06, '.bgimg-1:first', 'up');
	
	$(window).scroll(function(){
		windowHeight = jQuery(window).height();
		windowScrollPosTop = jQuery(window).scrollTop();
		windowScrollPosBottom = windowHeight + windowScrollPosTop;
		windowWidth = jQuery(window).width();
		
		myScrollVal(0.06, '.bgimg-1:first', 'up');
		myScrollVal(0.05,'.bgimg-2', 'up');
		myScrollVal(0.06,'.bgimg-3');
		myScrollVal(0.06,'.bgimg-1:last');

		
	});
	
	function myScrollVal(value, object, direction){
		
		var objectOffset = jQuery(object).offset();
		var objectOffsetTop = objectOffset.top;
		var objectOffsetBottom = objectOffsetTop + jQuery(object).outerHeight();

		if (windowScrollPosBottom > objectOffsetTop){
			var scrollTop = $(this).scrollTop();
			if (direction == 'up'){
				$(object).css('background-position', '50%' + (0+(windowScrollPosBottom-objectOffsetTop)*value) + '%');
			} else {
				$(object).css('background-position', '50%' + (100-(windowScrollPosBottom-objectOffsetTop)*value) + '%');
			}
			
		}
		
	}
});
