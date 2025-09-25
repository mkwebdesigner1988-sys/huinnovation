$(document).ready(function () {
  var windowWidth = window.innerWidth;
  //header - gnb hover event
  var gnbControl = 'on';
  $('.gnb li').on('mouseenter', function () {
    $('#header').addClass('open');
    $('#header.main_hader').removeClass('style');
    if (!$('#header').hasClass('scroll_white')) {
      $('#header.main_hader .logo img').attr('src', '../../img/comm/logo.png');
    }
    if (windowWidth > 1024) {
      $(this).find('>a').addClass('on');
    }
  });
  if (windowWidth <= 1024) {
    $('.gnb>ul>li>a').on('click', function (e) {
      if (!$(this).hasClass('sub_menu_on')) {
        $('.gnb>ul>li>a').removeClass('sub_menu_on');
        $('.gnb>ul>li>a').next().stop().slideUp();
        $(this).addClass('sub_menu_on');
        $(this).next().stop().slideDown();
      } else {
        $(this).removeClass('sub_menu_on');
        $(this).next().stop().slideUp();
      }
      e.preventDefault();
    });
  }

  $('.gnb>ul>li').on('mouseenter', function () {
    $('.gnb li a.fixation').removeClass('on');
    if (windowWidth > 1024) {
      $(this).find('>a').addClass('on');
    }
  });
  $('.gnb').on('mouseleave', function () {
    if (gnbControl === 'on') {
      $('#header').removeClass('open');
      $('#header.main_hader').addClass('style');
      if (!$('#header').hasClass('scroll_white')) {
        $('#header.main_hader .logo img').attr('src', '../../img/comm/logo_white.png');
      }
    }
    $('.gnb li a.fixation').addClass('on');
  });
  $('.gnb li').on('mouseleave', function () {
    $(this).find('>a').removeClass('on');
  });

  //header - gnb hamburger event
  $('.btn_hamburger').on('click', function () {
    $(this).toggleClass('on');
    if (windowWidth <= 1024) {
      $(this).parents('#header').toggleClass('open');
      $(this).parents('#header.main_hader').toggleClass('style');
    }
    if (!$(this).parents('#header.main_hader').hasClass('style')) {
      if (!$('#header').hasClass('scroll_white')) {
        $('#header .logo img').attr('src', '../../img/comm/logo.png');
      }
    } else {
      if (!$('#header').hasClass('scroll_white')) {
        $('#header .logo img').attr('src', '../../img/comm/logo_white.png');
      }
    }
    if (windowWidth <= 1024) {
      if (!$(this).parents('#header').hasClass('open')) {
        $('#header .logo img').attr('src', '../../img/comm/logo_white.png');
      } else {
        $('#header .logo img').attr('src', '../../img/comm/logo.png');
      }
    }
    if (!$(this).hasClass('on')) {
      gnbControl = 'on';
    } else {
      gnbControl = 'off';
    }
    if (windowWidth > 1024) {
      $('.allMenus').fadeToggle();
    }
  });

  //header - language event
  $('.language_box i').on('click', function () {
    $('.language_box ul').fadeToggle();
  });

  //footer - family_site event
  $('select.family_site_slec').change(function () {
    var select_name = $(this).children('option:selected').text();
    $(this).siblings('label.slec_label').text(select_name);
  });

  //comm - TOP button
  $('.btn_top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  //sub - navigation hover event
  $('.navigation .depth')
    .on('mouseenter', function () {
      $(this).addClass('on');
      // $(this).find('i img').attr('src', '../../img/comm/icon_navigation_arrow_white.png');
    })
    .on('mouseleave', function () {
      $(this).removeClass('on');
      // $(this).find('i img').attr('src', '../../img/comm/icon_navigation_arrow.png');
    });

  //main - link button hover event
  $('.btn_link')
    .on('mouseenter', function () {
      $(this).find('i img').attr('src', '../../img/comm/icon_btn_arrow_white.png');
    })
    .on('mouseleave', function () {
      if ($(this).hasClass('btn_link--black') === true) {
        $(this).find('i img').attr('src', '../../img/comm/icon_btn_arrow_white.png');
      } else {
        $(this).find('i img').attr('src', '../../img/comm/icon_btn_arrow.png');
      }
    });

  //main - content02(product) hover event
  $('.product_list li .product').on('mouseenter', function () {
    $(this).parent().addClass('active');
  });
  $('.product_list li').on('mouseleave', function () {
    $(this).removeClass('active');
  });

  //main - content02(product) swiper
  var productSwiper = new Swiper('.product-container', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    navigation: {
      nextEl: '.btn_next',
      prevEl: '.btn_prev',
    },
    breakpoints: {
      1024: {
        spaceBetween: 20,
      },
      768: {
        spaceBetween: 20,
      },
    },
  });

  //main - content04(news) swiper
  var newsSwiper = new Swiper('.news-container', {
    slidesPerView: 3,
    spaceBetween: 50,
    simulateTouch: false,
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 24,
        loop: true,
        centeredSlides: true,
      },
    },
  });

  //sub - unison_history Swiper - year
  var history_Swiper = new Swiper('.history__swiper', {
    slidesPerView: 10,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.history__btn--next',
      prevEl: '.history__btn--prev',
    },
    breakpoints: {
      1240: {
        slidesPerView: 5,
      },
    },
  });
  //sub - unison_history Swiper - images
  var historySwiper = new Swiper('.history__slides', {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 120,
    loop: true,
    navigation: {
      nextEl: '.history__slide__btn--next',
      prevEl: '.history__slide__btn--prev',
    },
    thumbs: {
      swiper: history_Swiper,
    },
    breakpoints: {
      1600: {
        spaceBetween: 80,
      },
      1240: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
    },
    on: {
      slideChange: function () {
        var index = this.realIndex;
        $('.history__slides').css('background-image', 'url("' + historyImages[index] + '")');
      },
    },
  });

  //sub - unison_factory Swiper
  var factoryGallery = new Swiper('.factory__gallery__thumbnail', {
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
    spaceBetween: 15,
    breakpoints: {
      1024: {
        direction: 'horizontal',
        spaceBetween: 10,
      },
    },
  });

  var factoryGalleryMain = new Swiper('.factory__gallery__main', {
    slidesPerView: 1,
    direction: 'vertical',
    thumbs: {
      swiper: factoryGallery,
    },
    pagination: {
      el: '.factory__gallery__pageInfo__num',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.factory__gallery__pageInfo__btn--down',
      prevEl: '.factory__gallery__pageInfo__btn--up',
    },
    breakpoints: {
      1024: {
        direction: 'horizontal',
      },
    },
  });

  //main - content03(service) hover event
  $('.content03 .item_box li')
    .on('mouseenter', function () {
      var index = $(this).index();
      $(this).addClass('service_on');
      $(this)
        .parents('.item_box')
        // .css('background-image', 'url(../../img/background992.png');
    })
    .on('mouseleave', function () {
      $(this).removeClass('service_on');
      // $(this).parents('.item_box').css('background-image', 'url(../../img/background992.png');
    });

  //main - inquiry(문의하기) plotting
  var floatPosition = parseInt($('.plottingBtn').css('top'));
  $(window)
    .scroll(function () {
      var scrollTop = $(window).scrollTop() + ($(window).height() - 151);
      var newPosition = scrollTop + floatPosition + 'px';
      $('.plottingBtn').stop().animate(
        {
          top: newPosition,
        },
        500
      );
    })
    .scroll();

  //sub - product_kind(제품 종류)
  $('.towMW_fourMW li')
    .on('mouseenter', function () {
      switch ($(this).index()) {
        case 0:
          $('.wing_U88E, .wing_U93, .wing_U113, .wing_U120').addClass('wing_on');
          break;
        case 1:
          $('.wing_U136, .wing_U151').addClass('wing_on');
          break;
        default:
          console.log('product_kind 오류');
      }
    })
    .on('mouseleave', function () {
      $('.wing').removeClass('wing_on');
    });

  //sub -investment_IR(IR프레젠테이션)
  $('.accordion').on('click', function () {
    if (!$(this).parents('tr').next('.IR_view').hasClass('active')) {
      $('.accordion').parents('tr').next('.IR_view').removeClass('active');
      $(this).parents('tr').next('.IR_view').addClass('active');
    } else {
      $('.accordion').parents('tr').next('.IR_view').removeClass('active');
    }
  });

  //sub -/promotion_photo_studio(사진관)
  $('.photo__item .photo__box').on('click', function () {
    $(this).parent().find('.popup_box').fadeIn();
  });

  //Text limit(30)
  $('.limit_txt').each(function () {
    if ($(this).text().length > 40) {
      $(this).html($(this).text().substr(0, 40) + '...');
    }
  });

  //popup Click Event
  $('.certified_check').on('click', function () {
    $('.popup_box').stop().fadeIn(); //서서히 나타나게 하는 효과
  });
  $('.pop_close').on('click', function () {
    $('.popup_box').stop().fadeOut(); //서서히 나타나게 하는 효과
  });

  //Border View button envet
  $('.boardViewBtn__prev')
    .on('mouseenter', function () {
      $(this).find('i img').attr('src', '../../img/comm/icon_btn_arrow_white.png');
    })
    .on('mouseleave', function () {
      if ($(this).hasClass('btn_link--black') === true) {
        $(this).find('i img').attr('src', '../../img/comm/icon_btn_arrow_white.png');
      } else {
        $(this).find('i img').attr('src', '../../img/comm/icon_btn_arrow.png');
      }
    });

  //sub - unison performance dot envet
  $('.map__img__point').on('click', function () {
    if (!$(this).hasClass('active')) {
      $('.map__img__point').removeClass('active');
      $(this).addClass('active');
      if (windowWidth <= 1024) {
        $('.korea .mb__map__txt .map__img__point__info').removeClass('active');
        $($('.korea .mb__map__txt .map__img__point__info')[$(this).index()]).addClass('active');

        $('.overseas .mb__map__txt .map__img__point__info').removeClass('active');
        $($('.overseas .mb__map__txt .map__img__point__info')[$(this).index()]).addClass('active');
      }
    } else {
      $(this).removeClass('active');
      if (windowWidth <= 1024) {
        $($('.korea .mb__map__txt .map__img__point__info')[$(this).index()]).removeClass('active');
        $($('.overseas .mb__map__txt .map__img__point__info')[$(this).index()]).removeClass('active');
      }
    }
  });

  //sub - unison performance menu envet
  $('.performance__menu').each(function () {
    var _tabWrap = $(this);
    _tabWrap.next('.maps').find('>div').not(':first').hide();

    _tabWrap.find('.performance__menu__item').click(function () {
      if (!$(this).hasClass('on')) {
        var _ancIndex = $(this).index();
        _tabWrap.find('.performance__menu__item').removeClass('on');
        _tabWrap.next('.maps').find('>div').hide();
        _tabWrap.next('.maps').find('>div').eq(_ancIndex).fadeIn();
        $(this).addClass('on');
      }
      return false;
    });
  });
});

(function() {
		var wid = '.bu1 .content1 .swiper';
		var SW = new Swiper(wid + ' .swiper-container', {
			loop: true,
			slidesPerView: 1,
			navigation: {
				prevEl: wid + ' .prev',
				nextEl: wid + ' .next'
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: true
			}
		});
		$(wid).hover(function() {
			SW.autoplay.stop();
		}, function() {
			SW.autoplay.start();
		});


		$('.page-content .btn-pages a').on('click', function() {
			var $this = $(this);
			var index = $this.index() + 1;

			$('.page-content .btn-pages a').removeClass('on');
			$('.page-content .content').removeClass('on');

			$this.addClass('on');
			$('.page-content .content' + index).addClass('on');
		});
	})();


$(document).ready(function() {
  // 탭
    $(".ethics__menu-item").on("click",function(){
      var tabIdx = $(this).index();
      $(this).addClass('on').siblings().removeClass('on');
      $('.ethics__contents-wrap').eq(tabIdx).fadeIn(300).addClass('on').siblings().fadeOut(300).removeClass('on');
    });
});