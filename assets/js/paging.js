/*
jQuery Paging maker 1.0
Licensed under the MIT license.

2015.01.29 @hcpark
warning251@hanmail.net
*/
(function($) {

	window.Paging = function(options) {
		options = options || {};
		var namespace = options.namespace || "paging",
			container = $(options.container);

		if (container.length !== 1) { // 0 or >1
			container.each(function() {
				paging({container: this});
			});
			return;
		}
		
		options = $.extend({
			total_cnt: 0,		// 전체 게시물 수
			current_no : 1,	// 현재 페이지 번호
			page_scale : 10,	// 페이지 넘버 갯수 
			row_scale : 10,	// 한페이지당 게시물 수
			viewport: namespace + "-viewport",
			prev:  namespace + "-prev",
			next:  namespace + "-next",
			pagination:  namespace + "-nav-item",
			pagination_current: namespace + "-nav-item-current",
			
			onchange : function(){}

		}, options);

		
		container.data('current_no', options.current_no); 		
		container.data('total_page', Math.ceil(options.total_cnt / options.row_scale ));
		container.data('current_page', Math.floor(options.current_no / options.page_scale ));


		var prev_html = '<a href="javascript:;" class="paging_prev '+options.prev+'"><img src="/common/images/comm/icon_pagination_prev.png" alt="start"></a>';
		var next_html = '<a href="javascript:;" class="paging_next '+options.next+'"><img src="/common/images/comm/icon_pagination_next.png" alt="start"></a>';
		
		// 페이징 초기화
		function init_paging()
		{
			var paging_html = make_paging_html();
			container.html(paging_html);

			set_event();
			
		}

		// 이벤트 지정
		function set_event()
		{
			$("."+options.pagination, container).click(function(){
				step($(this).attr('current_no'));
				return false;
			});

			$(".paging_prev", container).click(function(){
				var current_no = container.data('current_no');
				if(current_no > 1)
				{
					current_no = parseInt(current_no) - 1;
					//console.log(current_no);
					step(current_no);
				}
			});

			$(".paging_next", container).click(function(){
				var current_no = container.data('current_no');
				//console.log('event > total_page : ' + container.data('total_page'));
				if(current_no < container.data('total_page'))
				{
					current_no = parseInt(current_no) + 1;
					step(current_no);
				}
			});
		}

		// 페이지 이동
		function step(seq)
		{
			console.log('step > seq : ' + seq);
			var current_no = parseInt(seq);
			var current_page = Math.floor(seq / options.page_scale );
			var before_page = container.data('current_page') + 1;

			$("."+options.pagination_current, container).addClass('hover').removeClass(options.pagination_current);
			$("."+options.pagination+"[current_no="+current_no+"]", container).addClass(options.pagination_current).removeClass('hover');

			console.log('step > before_page : ' + before_page);
			console.log('step > current_page : ' + current_page);
			console.log('step > ceil_page : ' + Math.ceil( seq / options.page_scale ));

			// 페이지 단위 이동확인
			if( current_no > before_page * parseInt(options.page_scale) || Math.ceil( seq / options.page_scale ) < before_page  )
			{
				container.data('current_no', current_no);

				console.log('Test ' +  (current_page * options.page_scale) + ' '+  current_no);
				// 현재 페이지 마지막 번호가 선택한 페이지 번호와 같을 경우, 페이지 앞으로 이동 시키기 위해 -1
				if( (current_page * options.page_scale) == current_no )
				{
					current_page = current_page - 1;
				}

				container.data('current_page', current_page);

				var paging_html = make_paging_html();
				container.html(paging_html);

				set_event();
			}


			container.data('current_no', current_no);

			// 유저가 붙인 커스텀 함수 호출
			if(typeof options.onchange == 'function'){
				options.onchange.call(this, current_no);
			}
			
		}
		
		// 페이징 HTML 생성
		function make_paging_html()
		{
			
			// 전체 갯수가 페이지당 게시물 수 보다 작은 경우, 페이징 처리가 필요 없음.
			if(options.total_cnt < options.row_scale)
				return '';

			var result_html = '';
			var page_scale = 1;
			var total_page = Math.ceil(options.total_cnt / options.row_scale ); //전체 페이지 수
			var current_page = container.data('current_page') * options.page_scale; // 현재 페이지 단위 ( 1, 10, 100 등 시작번호 ) 
			
			console.log('make_paging > total_cnt : ', options.total_cnt);
			console.log('make_paging > total_page : ', total_page);
			console.log('make_paging > page_scale : ', page_scale);
			console.log('make_paging > current_page : ', current_page);
		
			// 총 페이지수가 페이지 출력갯수 보다 클 경우
			if(total_page > options.page_scale )
			{
				// 총 페이지 수 보다 페이지 마지막 번호가 클 경우
				if( total_page < ( container.data('current_page') + 1 ) * options.page_scale )
				{
					// 페이지 출력 갯수 - ( 페이지 마지막 번호 - 총 페이지 ) = 페이지 출력 갯수 
					page_scale = options.page_scale - ( ( (container.data('current_page') + 1 ) * options.page_scale ) - total_page ); 
				}
				else
				{
					// 그외에는 페이지 출력 갯수만큼
					page_scale = options.page_scale;
				}
				result_html += prev_html;
			}
			else
			{
				// 적을 경우 총 페이지수 만큼 출력
				page_scale = total_page;
			}

			//console.log('make_paging > current_no : ', container.data('current_no'));

			for(i=1; i<=page_scale; i++)
			{
				page_no = i + current_page ;
				if(container.data('current_no') == page_no)
					result_html += '<a href="#" class="'+options.pagination+' '+options.pagination_current+'" seq="'+i+'" current_no="'+page_no+'">'+page_no+'</a>';
				else
					result_html += '<a href="#" class="'+options.pagination+' hover" seq="'+i+'" current_no="'+page_no+'">'+page_no+'</a>';
			}
			
			// 전체 갯수가 페이지 스케일보다 클 경우 
			if(total_page > options.page_scale )
			{
				result_html += next_html;
			}

			return $("<div class='"+options.viewport+"'>").append(result_html);
		}


		
		init_paging();
		
	};


	$.fn.Paging = function( options )
	{

		options = options || {};
		options.container = this;
		Paging(options);

		return this;
	};
}(jQuery));