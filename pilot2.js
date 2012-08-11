/**
 * @author Bavertte
 */

var photoMiddleHeightAdjustment = 120; // px to shorten the middle area of photo wrapper.

$(document).ready(function(){
	$("img.lazy").lazyload();
	
	var ribbon = $('#ribbon');
	
	
	/**:::::::::::::::::::::::::::::::::::::
	 * Ribbon Mouse over/out effects
	 ::::::::::::::::::::::::::::::::::::::*/
	
	
	ribbon.mouseover(ribbonMouseOver);
	ribbon.mouseout(ribbonMouseOut);
	
	function  ribbonMouseOver(){
		ribbon.clearQueue();
		ribbon.animate({top:'10px'},'fast');
	}

	
	function  ribbonMouseOut(){
		ribbon.clearQueue();
		ribbon.animate({top:'0'},'fast');
	}
	
	
	
	
	$('img.curlyframe').each(function(){
		$(this).load(function(){
			var img = $(this);
			var res = ""; // Result HTML string
			
			res = res.concat('<div class="photo-wrapper">');
			res = res.concat('<div class="photo-wrapper-top"></div>');
			res = res.concat('<div class="photo-wrapper-middle">');
			
			console.log(res);
			
			res = res.concat('</div>');
			res = res.concat('<div class="photo-wrapper-bottom"></div>');
			res = res.concat('</div> ');
			
			
			console.log(res);
			
			res = $(res);
			res = res.children('.photo-wrapper.middle').append(img);
			
			console.log(res);
			//$(this).replaceWith(res);
		});	
	});
	
	
	
	/** :::::::::::::::::::::::::::::::::::::::
	 * Image Photo Frame adjustments
	 :::::::::::::::::::::::::::::::::::::::::*/
	$('.photo-wrapper').each(function(){
		var middle = $(this).children('.photo-wrapper-middle');
		var img = middle.children('img');
		middle.outerHeight(middle.outerHeight - photoMiddleHeightAdjustment);
		console.log('middle.height:'+middle.outerHeight());
		console.log('img.height:'+img.outerHeight());
	});
});
	