

$('.click-header').on('click', function() {
	let href = $(this).attr('href');
	$('html, body').animate({
		scrollTop: $(href).offset().top
	}, {
		duration: 700,
		easing: "linear"
	});
	return false;
});
//first-screen
$(document).ready(function() {
	$('.free-consult-btn').click(function(event) {
		$('.modal-first-screen').addClass('modal-first-screen-active');
		$('body').addClass('body-overflow');
	});
	$('.modal-first-screen__back').click(function(event) {
		$('.modal-first-screen').removeClass('modal-first-screen-active');
		$('body').removeClass('body-overflow');
	});
	$('.modal-first-screen__close').click(function(event) {
		$('.modal-first-screen').removeClass('modal-first-screen-active');
		$('body').removeClass('body-overflow');
	});
})
Fancybox.bind("[data-fancybox-plyr]", {
	on: {
		reveal: (fancybox, slide) => {
			if (typeof Plyr === undefined) {
			return;
			}

			let $el;

			if (slide.type === "html5video") {
			$el = slide.$content.querySelector("video");
			} else if (slide.type === "video") {
			$el = document.createElement("div");
			$el.classList.add("plyr__video-embed");

			$el.appendChild(slide.$iframe);

			slide.$content.appendChild($el);
			}

			if ($el) {
			slide.player = new Plyr($el);
			}
		},
		"Carousel.unselectSlide": (fancybox, carousel, slide) => {
			if (slide.player) {
			slide.player.pause();
			}
		},
		"Carousel.selectSlide": (fancybox, carousel, slide) => {
			if (slide.player) {
			slide.player.play();
			}
		},
	},
});



//about
var swiper = new Swiper(".bottom-about__swiper", {
	navigation: {
		nextEl: ".bottom-about__btn-next",
		prevEl: ".bottom-about__btn-prev",
	},
	slidesPerView: 1,
	spaceBetween: 22,
	breakpoints: {
		600: {
			slidesPerView: 3,
		},
		375: {
			slidesPerView: 2,
		}
	}
});
Fancybox.bind('[data-fancybox="gallery1"]', {
	Thumbs: false,
	Toolbar: false,

	Image: {
		zoom: false,
		click: false,
		wheel: "slide",
	},
});


//types
var swiper = new Swiper(".types__swiper", {
	spaceBetween: 10,
	slidesPerView: 'auto',
	breakpoints: {
		1100: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		768: {
			spaceBetween: 20,
			slidesPerView: 2.7,
		},
		500: {
			spaceBetween: 10,
			slidesPerView: 'auto',
		},
	}
});
/* gsap.to(".ask-types__img", {
	yPercent: -100,
	ease: "none",
	scrollTrigger: {
		trigger: ".ask-types__img",
		scrub: 2
	}, 
}); */


//reviews
var swiper = new Swiper(".reviews__swiper", {
	navigation: {
		nextEl: ".reviews__btn-next",
		prevEl: ".reviews__btn-prev",
	},
	slidesPerView: 1.35,
	spaceBetween: 20,
	breakpoints: {
		768: {
			slidesPerView: 4,
		},
		500: {
			slidesPerView: 3,
		},
		375: {
			slidesPerView: 2,
		}
	}
});


//advantages
var swiper = new Swiper(".advantages__swiper", {
	slidesPerView: 'auto',
	spaceBetween: 10,
	breakpoints: {
		768: {
			spaceBetween: 20,
		}
	}
});


//comment
var swiper = new Swiper(".comment__swiper", {
	slidesPerView: 'auto',
});
$(document).ready(function() {
	$('.item-comment__item1').hover(function(event) {
		$('.item-comment__item1').toggleClass('item-comment__item-active');
	});
	$('.item-comment__item2').hover(function(event) {
		$('.item-comment__item2').toggleClass('item-comment__item-active');
	});
	$('.item-comment__item3').hover(function(event) {
		$('.item-comment__item3').toggleClass('item-comment__item-active');
	});
	$('.item-comment__item4').hover(function(event) {
		$('.item-comment__item4').toggleClass('item-comment__item-active');
	});
	$('.item-comment__item5').hover(function(event) {
		$('.item-comment__item5').toggleClass('item-comment__item-active');
	});
	$('.item-comment__item6').hover(function(event) {
		$('.item-comment__item6').toggleClass('item-comment__item-active');
	});
})



const comment__img_back = gsap.timeline();
comment__img_back.fromTo('.item-comment__title', 1, {y: '15%'}, {y: '-10%'}, 0)
ScrollTrigger.create({
	animation: comment__img_back,
	trigger: '.comment__swiper',
	scrub: 5,
})



//work
var swiper = new Swiper(".work__swiper", {
	slidesPerView: 'auto',
	spaceBetween: 8,
	navigation: {
		nextEl: ".work__btn-next",
		prevEl: ".work__btn-prev",
	},
	breakpoints: {
		992: {
			slidesPerView: 1,
		},
		550: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
	}
});


//prices
$(document).ready(function() {
	$('.prices__show-more-btn.prices__show-more-btn-show').click(function(event) {
		$(this).removeClass('_active');
		$('.prices__show-more-btn.prices__show-more-btn-hide').addClass('_active');
		$('.prices__items-right').slideDown(300);
	});
	$('.prices__show-more-btn.prices__show-more-btn-hide').click(function(event) {
		$(this).removeClass('_active');
		$('.prices__show-more-btn.prices__show-more-btn-show').addClass('_active');
		$('.prices__items-right').slideUp(300);
	});
})

const prices__img_back = gsap.timeline();
prices__img_back.fromTo('.prices__img-back', 1, {y: '30%'}, {y: '-30%'}, 0)
ScrollTrigger.create({
	animation: prices__img_back,
	trigger: '.prices',
	scrub: 5,
})



//stages
var swiper = new Swiper(".item-stages__icons-swiper", {
	slidesPerView: 'auto',
	breakpoints: {
		1100: {
			slidesPerView: '3',
		},
	}
});



//office
var swiper = new Swiper(".office__swiper", {
	slidesPerView: 'auto',
	spaceBetween: 8,
	navigation: {
		nextEl: ".office__btn-next",
		prevEl: ".office__btn-prev",
	},
	breakpoints: {
		700: {
			spaceBetween: 20,
			slidesPerView: '2',
		},
		375: {
			spaceBetween: 20,
			slidesPerView: '1',
		},
	}
});
Fancybox.bind('[data-fancybox="gallery2"]', {
	Thumbs: false,
	Toolbar: false,

	Image: {
		zoom: false,
		click: false,
		wheel: "slide",
	},
});

//contacts
function init() {
	let map = new ymaps.Map('contacts__map', {
		center: [55.7374190191632,37.663960604850594],
		zoom: 15,
	});

	let placemark = new ymaps.Placemark([55.7374190191632,37.663960604850594], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'https://hudson8811.github.io/blab/public/images/contacts/1.svg',
		iconImageSize: [100, 100],
		iconImageOffset: [-50, -45]
	});

	map.controls.remove('geolocationControl'); 
	map.controls.remove('searchControl'); 
	map.controls.remove('trafficControl'); 
	map.controls.remove('typeSelector'); 
	map.controls.remove('fullscreenControl');
	map.controls.remove('zoomControl');
	map.controls.remove('rulerControl');
	map.behaviors.disable(['scrollZoom']);

	map.geoObjects.add(placemark);

	const windowInnerWidth = window.innerWidth
	if (windowInnerWidth < 769) {
		map.behaviors.disable('drag');
	}

}
ymaps.ready(init);





//numbers
var block_show = false;
function scrollTracking(){
	if (block_show) {
		return false;
	}
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.numbers__items').offset().top;
	var eh = $('.numbers__items').outerHeight();
	var dh = $(document).height();   
	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
		block_show = true;
		
		$(document).ready(function () {
			$('.count').each(function () {
				$(this).prop('Counter', 0).animate({
					Counter: $(this).text()
				}, {
					duration: 1000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			});
		});
	}
}
$(window).scroll(function(){
	scrollTracking();
});
	
$(document).ready(function(){ 
	scrollTracking();
});


const numbers__img = gsap.timeline();

numbers__img.fromTo('.numbers__img', 1, {y: '20%'}, {y: '-20%'}, 0)

ScrollTrigger.create({
	animation: numbers__img,
	trigger: '.numbers',
	scrub: 2,
})
