var headerHeight;

$(function(){
	heightCheck();
	// contentsFade();
	tabAction();
	uiLoop();
	// titleLoop();
})

$(window).scroll(function(){
	gnbActive();
});

function tabAction() {
	$(".tab-nav-widget").find("div").click(function() {
		var $this = $(this);
		var activeTab = $this.attr("rel");
		$(".tab-nav-widget").find('div').removeClass("active");
		$this.addClass("active");
		$(".basic-tab-contents").hide();
		$("#" + activeTab).show();
	});
}

function contentsFade(){
	$(window).scroll( function(){
		$('.contents').each( function(){
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			if( bottom_of_window > bottom_of_object ){
				$(this).animate({
					'opacity':'1'
				},1000);
			}
		});
	});
}

function heightCheck(){
	headerHeight = $(window).height()
	$('#header').css('height', headerHeight);
	$(window).resize(function() {
		headerHeight = $(window).height()
		$('#header').css('height', headerHeight);
	});
	gnbScroll();
}

function gnbScroll(){
	$(window).on('scroll',function(){
		var _offvar = headerHeight
		var win = $(window).scrollTop();
		if(win > _offvar){
			$('.contents_main_navi_wrap').css({
				'position':'fixed',
				'z-index':'100',
				'top':0
			});
		}else{
			$('.contents_main_navi_wrap').css({
				'position':'absolute',
				'top':0
			});
		}
	});
}

function moveScroll(moveName) {
	$('html, body').stop(true,true).animate({
		scrollTop: $('#' + moveName).offset().top
	}, 300);
	setTimeout(function() {
		gnbActive();
	}, 400);
}

function topMove(speed) {
	$('body,html').stop(true, true).animate({
		scrollTop: 0
	}, 100);
}

function iePlaceHolder() {
	$('[placeholder]').focus(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		}
	}).blur(function() {
		var input = $(this);
		if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		}
	}).blur();
	$('[placeholder]').parents('form').submit(function() {
		$(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
			}
		})
	});
}

function gnbActive(){
	var gnbLinks = new Array();
	if (!$("html").is(":animated")){
		$(".contents_navi_wrap li").not(".anchorNone").each(function(i){
			var rel = $(this).attr("rel");
			var firstString = rel.substr(0,1);
			if (firstString == "#" && rel.length > 1){
				gnbLinks[i] = rel;
			}
		});
		for (var i=0; i<gnbLinks.length; i++){
			if ($(window).scrollTop() >= $(gnbLinks[i]).offset().top-$(".contents_main_navi_wrap").outerHeight()-80){
				$(".contents_navi_wrap  li").removeClass("now");
				$(".contents_navi_wrap  li").eq(i).addClass("now");
			}
		}
	}
}

function uiLoop(){
	$('.scroll_visual,h2').animate({'top':'5px'},500).animate({'top':'10px'},500, uiLoop);
}

function titleLoop(){
	$('.inner_info').animate({'left':'50%'},500).animate({'left':'50.5%'},500, titleLoop);
}

