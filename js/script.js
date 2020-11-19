
//script
$(document).ready(function() {
	//scroll
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		// Activate menu
		if (wScroll > 20) {
			$('.header').addClass('active');
		}
		else {
			$('.header').removeClass('active');
		};
	});

	$('.icon-menu').on('click', function(e){
		e.preventDefault();
		$(this).addClass('open');
		$('.menu__body').toggleClass('open');
		if ($(window).width() < 500){
			$('body').toggleClass('lock');
		}

		if ($('.menu__body').hasClass('open')) {
			$('.menu__close').on('click', function(e){
				e.preventDefault();
				$('.menu__body').removeClass('open');
				$('.icon-menu').removeClass('open');
				$('body').removeClass('lock');
			})
		}

		$(document).on('click', function(e) {
			if (!$(e.target).closest(".menu").length) {
				$('.menu__body').removeClass('open');
				$('.icon-menu').removeClass('open');
				$('body').removeClass('lock');
			}
		});
	});

	$(window).resize(function(){
		if ($(window).width() > 500){
			$('body').removeClass('lock');
		}
		if ($(window).width() < 500 && $('.menu__body').hasClass("open")){
			$('body').addClass('lock');
		}
	});

	function ibg(){
		$.each($('.ibg'), function(index, val){
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
	}
	ibg();

	$(function() {
		$("nav.tab__items").on("click", ".tab__item:not(.active)", function() {
			var id = $(this).attr('data-tab'),
			content = $('.tab__content[data-tab="'+ id +'"]');

			$('.tab__item.active').removeClass('active');
			$(this).addClass('active');

			content.css('opacity','0');
			setTimeout(removeActive, 100);
			setTimeout(addActive, 101);
			setTimeout(function() {
				content.css('opacity','1');
			}, 200);

			//функция по закрытию
			function removeActive() {
				$('.tab__content.active').removeClass('active');
			}
			//функция по открытию
			function addActive() {
				content.addClass('active');
			}
		});
	});
	
	$('.tab__item').mouseover(function(event){
		var url = $(this).find("img").attr('src');
		var data = $(this).find("img").attr('data');
		$(this).find("img").attr('src', data);
		$('.tab__item').mouseout(function(event){
			$(this).find("img").attr('src', url);
		});
	});

	if($('.slider-gallery__body').length>0){
		$('.slider-gallery__body').slick({
			//autoplay: true,
			// infinite: false,
			dots: false,
			arrows: true,
			accessibility: false,
			slidesToShow: 3,
			slidesToScroll: 2,
			autoplaySpeed: 1000,
			adaptiveHeight: true,
			nextArrow:'<button type="button" class="slick-next"></button>',
			prevArrow:'<button type="button" class="slick-prev"></button>',
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
			]
		});
	}
	if($('.slider-say-about__body').length>0){
		$('.slider-say-about__body').slick({
			//autoplay: true,
			// infinite: false,
			dots: true,
			arrows: false,
			accessibility: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplaySpeed: 1000,
			adaptiveHeight: true,
			nextArrow:'<button type="button" class="slick-next"></button>',
			prevArrow:'<button type="button" class="slick-prev"></button>',
			responsive: [{
				breakpoint: 768,
				settings: {
					
				}
			}]
		});
	}
});
