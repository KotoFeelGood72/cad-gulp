


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body


$(document).ready(function ($) {
	$body = $('body');

	// popupServiceVisible();
});

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function close(closes) {
	$(closes).toggleClass('active');
		setTimeout(function() {
			$(closes).removeClass('active')
		}, 3000)
}


$(window).on('load', function () {
	updateSizes();
	loadFunc();
	accardionHorizontal();
	if(windowWidth < mediaPoint1) {
		// burgerMobile();
		topCart([44, 54]);
	} else {
		topCart([44, 54]);
	}
});



$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		// var vh2 = document.documentElement.clientHeight * 0.01;

		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

// var styles = ['color: red', 'background: transparent'].join(';');
// var message = 'Developed by KotoFeelGood https://api.whatsapp.com/send?phone=79615311386&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0';
// console.info('%c%s', styles, message);

// Yandex cart API


async function topCart(size) {

	function init() {
		var myMap = new ymaps.Map('map', {
			center: [60.144095, 29.930985],
			zoom: 16,
			scroll: false,
		}, {
			searchControlProvider: 'yandex#search'
		}),

		myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
			balloonContent: 'ул. Петровская, 53 Санкт-Петербург, Россия'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/i/global/map.svg',
			iconImageSize: size,
			iconImageOffset: [-5, -38]
		});

	myMap.geoObjects
		.add(myPlacemark)
	}
	await ymaps.ready(init);
}

// Yandex cart API



// Accardion service card

function accardionHorizontal() {
	const cards = document.querySelectorAll('.service_item_w');
	let activeCard = cards[0];
	cards.forEach((card) => {
		card.addEventListener('click', () => {
			activeCard.classList.remove('active');
			activeCard = card;
			activeCard.classList.add('active');
		});
	})
}

// Accardion service card

// Swiper slider
const stepSlider = new Swiper('.step_slider', {
	speed: 700,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 40,
		}
	},
	navigation: {
		nextEl: '.step_next',
		prevEl: '.step_prev'
	},
	scrollbar: {
		el: '.step_scrollbar',
		draggable: true,
	},
})

const docSlider = new Swiper('.document_slider', {
	speed: 700,
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 23,
		}
	},
	pagination: {
		el: '.document_slider_pug',
		clickable: true,
	},
})

const reviewsSlider = new Swiper('.reviews_slider', {
	speed: 600,
	a11y: true,
	navigation: {
		nextEl: '.rev_next',
		prevEl: '.rev_prev'
	},
	pagination: {
		el: '.reviews_slider_pug',
		clickable: true,
	},
	grabCursor: true,
	effect: "creative",
	creativeEffect: {
		prev: {
			shadow: true,
			translate: [0, "-40%", 0],
			opacity: 0,
			scale: [.8],
		},
		next: {
			scale: [.8],
			translate: [0, '20%', 0],
		},
	},
})


// Swiper slider
	



document.addEventListener('DOMContentLoaded', () => {

	// Service popup variable
	const popupService = document.querySelectorAll('.servicePopup');
	const popupServiceCloser = document.querySelectorAll('.service_closer')
	const popupServiceTrigger = document.querySelectorAll('.popupService_trigger')
	const btnService = document.querySelectorAll('.servicePopup_btn')

	// End service popup variable

	// Call variable
	const popupCallTrigger = document.querySelector('.trigger_call')
	const popupCall = document.querySelector('.popup_form');
	const submitCall = document.querySelectorAll('.btn_submit');
	const popupCallClose = document.querySelectorAll('.call_closer')

	// End call variable

	// Burger variable
	const burger = document.querySelector('.burger')
	const burgerTrigger = document.querySelector('.header_burger')
	const burgerClose = document.querySelectorAll('.burger_closer')
	const brugerNavItem = document.querySelectorAll('.burger_menu li')

	// End burger variable
	

	// Start function burger

	visiblePopup(burger, burgerTrigger)
	disablePopup(burger, burgerClose);
	disablePopup(burger, brugerNavItem);

	// End  function burger


	// Start call function

	visiblePopup(popupCall, popupCallTrigger)
	disablePopup(popupCall, popupCallClose, submitCall);

	// End call function	


	popupServiceTrigger.forEach((el) => {
		el.addEventListener('click', (e) => {
			let path = e.currentTarget.getAttribute('data-path');
			console.log(path)
			popupService.forEach((el) => {
				el.classList.remove('active');
			});
			document.querySelector(`[data-target="${path}"]`).classList.add('active');
			});
	});

	popupServiceCloser.forEach((item) => {
		item.addEventListener('click', (e) => {
				popupService.forEach((el) => {
					el.classList.remove('active');
				});
		});
	})

	btnService.forEach((item) => {
		item.addEventListener('click', (e) => {
				popupService.forEach((el) => {
					el.classList.remove('active');
				});
				setTimeout(() => {
					visiblePopup(popupCall)
				}, 200)
		});
	})
})


	

function visiblePopup(popupCalls, trigger) {
	if(trigger) {
		trigger.addEventListener('click', () => {
			popupCalls.classList.add('active');
			win.style.overflow = "";
			win.style.paddingRight = ""; 
		})
	}

	if(trigger == null) {
			popupCalls.classList.add('active');
			win.style.overflow = "";
			win.style.paddingRight = ""; 
	}
	
}

function disablePopup(popupCalls, trigger, submit) {
	if(trigger) {
		Array.from(trigger).map((item) => {
			item.addEventListener('click', () => {
				popupCalls.classList.remove('active');
				win.style.overflow = "";
				win.style.paddingRight = ""; 
			})
		})
	} 
	if(submit) {
		Array.from(submit).map((item) => {
			item.addEventListener('click', () => {
				popupCalls.classList.remove('active');
				win.style.overflow = "";
				win.style.paddingRight = ""; 
				succes('.succes')
			})
		})
	} 
}


var lastId;
var topMenu = $(".global_menu>li>a");
var topMenuHeight = topMenu.outerHeight();
var menuItems = topMenu.find("a");
var scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight - 150;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 100);
  e.preventDefault();
});
$(window).scroll(function(){
   var fromTop = $(this).scrollTop()+topMenuHeight + 300;
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   if (lastId !== id) {
       lastId = id;
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});






















































