
$(function(){
	
	var lightrays = $('div.lightrays'),
		mywork = $('div.sub-content div.gallery div.row div.mywork'),
		info = $('div.sub-content div.gallery div.mywork > a > span.info'),
		deg = 10;
	(rotateLightRays = function(){
		lightrays.animate({
 			'-webkit-transform':'rotate('+ deg +'deg)',
 			'-moz-transform':'rotate('+ deg +'deg)',
 			'-o-transform':'rotate('+ deg +'deg)',
 			'-ms-transform':'rotate('+ deg +'deg)'
 		},2000);
 		deg += 10;
	})();
	setInterval(rotateLightRays,2000);
 		
	mywork.mouseover(function(){
		$(this).animate({
			'opacity':'1',
			'box-shadow':'#21365C 0px 0px 0px 10px inset'//'inset 0 0 0 10px rgba(255, 5, 5, 0.4), 0 1px 2px rgba(0, 0, 0, 0.1)'
		},500,'cubic-bezier(0, 1, .70, 1)');
		$('div.sub-content div.gallery div.mywork > a > span.info',this).animate({
			'opacity':'1',
			'-webkit-transform':'scale(1)'
		},500,'cubic-bezier(0, 1, .70, 1)');
	}).mouseout(function(){
		$(this).animate({
			'opacity':'.7',
			'box-shadow':'#21365C 0px 0px 0px 0px inset'
		},800,'cubic-bezier(0, 1, .90, 1)');
		$('div.sub-content div.gallery div.mywork > a > span.info',this).animate({
			'opacity':'1',
			'-webkit-transform':'scale(0)'
		},500,'cubic-bezier(0, 1, .70, 1)');
	});

});