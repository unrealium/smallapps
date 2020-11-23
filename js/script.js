
//menu
const iconMenu = document.querySelector('.icon-menu');
const body = document.querySelector('body');
if (iconMenu != null) {
	const menuBody = document.querySelector('.menu__body');
	const menuLink = menuBody.querySelectorAll('.menu__link');
	const menuClose = document.querySelector('.close-menu');

	iconMenu.addEventListener("click", function(e) {
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
		body.classList.toggle('lock');
	});

	//закрытие при нажатии на menu__link
	for (var i = 0; i < menuLink.length; i++) {
		menuLink[i].addEventListener("click", function(e) {
			iconMenu.classList.remove('active');
			menuBody.classList.remove('active');
			body.classList.remove('lock');
		});
	}
	
	//закрытие при нажатии на .close-menu
	if (menuClose != null) {
		menuClose.addEventListener("click", function(e) {
			iconMenu.classList.remove('active');
			menuBody.classList.remove('active');
			body.classList.remove('lock');
		});
	}

	//закрытие при нажатии не! на меню
	document.documentElement.addEventListener('click', function(e) {
		if (!e.target.closest('.menu')) {
			iconMenu.classList.remove('active');
			menuBody.classList.remove('active');
			body.classList.remove('lock');
		}
	});	
}

//ibg
function ibg() {
	let ibg = document.querySelectorAll('.ibg');
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') +')';
		}
	}
}
ibg();

const itemTab = document.querySelectorAll('.tab__item');
for (var i = 0; i < itemTab.length; i++) {
	itemTab[i].addEventListener("click", function(e) {
		if (!this.classList.contains('active')) {
			var id = this.getAttribute('data-tab');
			var content = document.querySelector('.tab__content[data-tab="'+ id +'"]');

			document.querySelector('.tab__item.active').classList.remove('active');
			this.classList.add('active');

			animationTabContent(content, 200);
		} 
	});
}

function animationTabContent(content, timeout) {
	content.style.opacity = '0';

	setTimeout(function() {
		document.querySelector('.tab__content.active').classList.remove('active');
	}, timeout/2);

	setTimeout(function() {
		content.classList.add('active');
	}, (timeout/2)+1);

	setTimeout(function() {
		content.style.opacity = '1';
	}, timeout);
}
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

//resize for body.lock
$(window).resize(function(){
	if ($(window).width() > 500){
		$('body').removeClass('lock');
	}
	if ($(window).width() < 500 && $('.menu__body').hasClass("active")){
		$('body').addClass('lock');
	}
});

//чистка адресной строки после клика по ссылке
$('.menu__link').click(function(e){
	var anch = this.hash.slice(0); 
	if(!anch || !anch[0] === "#") return; 
	e.preventDefault();
	window.location.hash = ''; 
	var offset = $(anch).offset();
	$("html, body").animate({scrollTop:$(anch).offset().top},0);
	if(history.pushState) {history.pushState({}, null, window.location.pathname);}
});

//animation image tabs
$('.tab__item').mouseover(function(event){
	var url = $(this).find("img").attr('src');
	var data = $(this).find("img").attr('data');
	$(this).find("img").attr('src', data);
	$('.tab__item').mouseout(function(event){
		$(this).find("img").attr('src', url);
	});
});

//slider
$(document).ready(function(){
	if($('.slider-gallery__body').length>0){
		$('.slider-gallery__body').slick({
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
	//
	if($('.slider-say-about__body').length>0){
		$('.slider-say-about__body').slick({
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