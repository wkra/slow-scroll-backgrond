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
	
	// scroll-progressbar beginning
	var documentHeight = $(document).height();
	var scrollValue = documentHeight - windowHeight;
	var scrollValuenow = function (){
		if (windowScrollPosBottom-windowHeight == 0){
			return 0;
		} else{
			return ((windowScrollPosBottom-windowHeight)*100)/(scrollValue);
		}
	}
	console.log("scrollValue " +scrollValue )
	console.log("documentHeight " +documentHeight )
	console.log("windowHeight " +windowHeight )
	console.log("scrollValuenow " + scrollValuenow());
	console.log("windowScrollPosBottom " + windowScrollPosBottom);
	console.log("windowHeight " + windowHeight);
	
	
	$(".progress-bar").attr({	"aria-valuenow": scrollValuenow(),
								"style": "width:"+scrollValuenow()+"%;"})
	// scroll-progressbar end
		
	});
	
	function myScrollVal(value, object, direction){
		
		var objectOffset = jQuery(object).offset();
		var objectOffsetTop = objectOffset.top;
		var objectOffsetBottom = objectOffsetTop + jQuery(object).outerHeight();

		if (windowScrollPosBottom > objectOffsetTop && windowScrollPosTop < (objectOffsetTop+$(object).height())){

			var scrollTop = $(this).scrollTop();
			if (direction == 'up'){
				$(object).css('background-position', '50%' + (0+(windowScrollPosBottom-objectOffsetTop)*value) + '%');
			} else {
				$(object).css('background-position', '50%' + (100-(windowScrollPosBottom-objectOffsetTop)*value) + '%');
			}
			
		}
		
	}
});
