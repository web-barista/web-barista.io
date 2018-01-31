$(document).ready(function() {

	//slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});


	$('#open-video-modal').on('click', function(e){
		e.preventDefault();
		$('.my-modal-wrapper').addClass('my-modal-wrapper--open');
		$('.my-modal').addClass('bounceInDown');
	});


	$('a[data-my-modal=close]').on('click', function(e){
		e.preventDefault();
		$('.my-modal-wrapper').removeClass('my-modal-wrapper--open');
		$('.my-modal').removeClass('bounceInDown');
	});

});