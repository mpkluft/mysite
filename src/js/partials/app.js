// протестируем данную функцию
function isEven(val) {
  return val % 2 === 0;
}

$(document).ready(function() {
	$('.fancybox').fancybox();

	//$('.rows').after('<div class = "li_after"></div>');

	$('.item').click(function(){
		$(this).parent().children('li').removeClass('active');
		$(this).addClass('active');

		if($('.sub_menu', this)){
			$('.sub_menu').hide();
			$('.li_after').hide();
			$('.sub_menu', this).show();
			$('.li_after', this).show();
		}
	});

	$('.news img').each(function(i, elem){
		var heightImg = elem.height,
				heightDiv = 240;
				deltaHeight = -(heightImg - heightDiv)/2;
		console.log(deltaHeight);
		if(deltaHeight < 0){
			$(elem).css('margin-top', deltaHeight)
		}
	});
});