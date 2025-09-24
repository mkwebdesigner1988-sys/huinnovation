window.__lc = window.__lc || {};
    window.__lc.license = 19188456;
    window.__lc.integration_name = "manual_channels";
    window.__lc.product_name = "livechat";
    ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="../cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))

$(document).ready(function () {
  // 초기에는 모든 ul을 숨깁니다
  $('.submenu_li ul').hide();

  $('.submenu_li').hover(
    function () {
      // 마우스를 올리면 ul을 보여줌
      $(this).children('ul').stop(true, true).show();
    },
    function () {
      // 마우스를 벗어나면 ul을 숨김
      $(this).children('ul').stop(true, true).hide();
    }
  );
});

$(document).ready(function () {
  $('.botop_su').click(function () {
    const $nav = $('#navbarResponsive');
    if ($nav.css('display') === 'none') {
      $nav.css('display', 'block');
    } else {
      $nav.css('display', 'none');
    }
  });
});

function closePopup() {
        document.getElementById('popup').style.display = 'none';
    }
    
    window.onload = function() {
        setTimeout(function() {
            document.getElementById('popup').style.display = 'flex';
        }, 1000); // 1초 후 팝업 표시
    };

// 이미지 이름 배열 (슬라이드 순서에 맞게)
  const slideNames = [
    "H103",
    "H125",
    "H177P",
    "H204",
  ];

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true, // 무한 루프
  autoplay: {
    delay: 3000, // 1초마다 자동 슬라이드
    disableOnInteraction: false, // 사용자가 조작해도 자동재생 유지
  },
  navigation: {
    nextEl: ".next-btn-xy12",
    prevEl: ".prev-btn-xy12",
  },
  on: {
    slideChange: function () {
      const slideNameSpan = document.querySelector(".slide-name-xy12");
      slideNameSpan.textContent = slideNames[this.realIndex] || "";
    },
  },
});

$(document).ready(function(){
    
        $('.tabM li').click(function() {
        // 모든 li에서 'on' 클래스 제거
        $('.tabM li').removeClass('on');
        // 클릭된 li에 'on' 클래스 추가
        $(this).addClass('on');
        
        // 모든 tab_content에서 'current' 클래스 제거
        $('.tab_content').removeClass('current');
        
        // 클릭된 li의 data-tab 속성 값을 가져옴
        var tabId = $(this).data('tab');
        
        // 해당 tabId와 일치하는 div에 'current' 클래스 추가
        $('#' + tabId).addClass('current');
    });
    // Slick 초기화
    $('.business_slide').slick({
        infinite: true,    // 슬라이드가 끝까지 갔을 때 다시 처음으로 돌아옴
        slidesToShow: 1,   // 한 번에 보여줄 슬라이드 개수
        slidesToScroll: 1, // 한 번에 스크롤 할 슬라이드 수
        arrows: false,     // 슬라이드 화살표 제거 (필요시 true로 설정)
        dots: true,        // 페이지 네비게이션 점 추가
        autoplay: true,    // 자동 재생
        autoplaySpeed: 3000, // 자동 슬라이드 간격 (밀리초 단위)
        fade: true,        // 슬라이드 간 페이드 효과 적용
        cssEase: 'linear'  // 슬라이드 전환 효과 (선형)
    });

    // 탭 클릭 시 슬라이드 변경
    $('.business_paging li').on('click', function(e) {
        e.preventDefault();

        var tab = $(this).data('tab');

        // 탭 활성화 처리
        $('.business_paging li').removeClass('on');
        $(this).addClass('on');

        // 해당 탭의 슬라이드로 이동
        if(tab === 'domestic') {
            $('.business_slide').slick('slickGoTo', 0); // 첫 번째 슬라이드로 이동
        } else if(tab === 'overseas') {
            $('.business_slide').slick('slickGoTo', 1); // 두 번째 슬라이드로 이동
        }
    });

    // 이전 슬라이드 버튼 클릭 시
    $('.prev_btn').on('click', function() {
        $('.business_slide').slick('slickPrev');
    });

    // 다음 슬라이드 버튼 클릭 시
    $('.next_btn').on('click', function() {
        $('.business_slide').slick('slickNext');
    });

    // 일시정지 버튼 클릭 시
    $('.ctr_btn.pause').on('click', function() {
        var isPaused = $(this).hasClass('paused');
        if (isPaused) {
            $('.business_slide').slick('slickPlay');  // 자동 슬라이드 재개
            $(this).removeClass('paused').text('일시정지');
        } else {
            $('.business_slide').slick('slickPause'); // 자동 슬라이드 일시정지
            $(this).addClass('paused').text('재개');
        }
    });
});

$(document).ready(function() {
			var images = [];
			function preload() {
				for (var i = 0; i < preload.arguments.length; i++) {
					images[i] = new Image();
					images[i].src = preload.arguments[i];
				}
			}
			//Usage
			preload(
				'common/images/main/service01.html',
				'common/images/main/service02.jpg',
				'common/images/main/service03.html',
				'../../common/images/main/unison_video.mp4',
				'../../common/images/main/unison Mobile.mp4'
			);
		});
		$(window).on('scroll', function(){
			// Header Scrolling
			if($(document).scrollTop() > ($('#main_key_visual').height() - $('#header').height())){
				$('#header').addClass('scroll_white');
				$('#header.scroll_white .logo img').attr('src', 'img/logo_wb.png');
			}else {
				$('#header').removeClass('scroll_white');
				$('#header.main_hader .logo img').attr('src', 'img/logo_wb.png');
			}

			// KeyVisual
			if($(document).scrollTop() < $('#main_key_visual').height()){
				$('#main_key_visual .txt_box').addClass('scrollOn');
			}

			// section01 - unison
			if($(document).scrollTop() > $('#main_key_visual').height() / 3){
				$('.content01').addClass('animation--normal');
			}
			console.log();
			// section02 - product
			if($(document).scrollTop() > $('.content01').offset().top){
				$('.content02 .flt_clr').addClass('animation--normal');
			}

			// section03 - service
			if($(document).scrollTop() > $('.content02').offset().top){
				$('.content03').addClass('animation--normal');
			}

			// section04 - promotion
			if($(document).scrollTop() > $('.content03').offset().top){
				$('.content04').addClass('animation--normal');
			}
		});

		$('.content02 .btn').on('mouseenter', function(){
			$(this).addClass('btn_on');
			$(this).find('.icon_prev img').attr('src','common/images/comm/icon_btn_prev_on.png');
			$(this).find('.icon_next img').attr('src','common/images/comm/icon_btn_next_on.png');
		}).on("mouseleave", function() {
			$(this).removeClass('btn_on');
			$(this).find('.icon_prev img').attr('src','common/images/comm/icon_btn_prev.png');
			$(this).find('.icon_next img').attr('src','common/images/comm/icon_btn_next.png');
		});