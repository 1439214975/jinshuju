$(document).ready(function(){
	$("[data-toggle='collapse']").click(function(){
		if(!$('.collapse').hasClass('in')){
			$('header').css('background','#333745')
		}else{
			$('header').css('background','transparent')
		}
	})
});	