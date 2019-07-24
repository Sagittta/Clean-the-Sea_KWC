new Swiper('.swiper-container', {
	pagination : {
		el : '.swiper-pagination',
		clickable : true,
	},
	navigation : {
		nextEl : '.swiper-button-next',
		prevEl : '.swiper-button-prev',
	},
	lazy : {
		loadPrevNext : true,
	},
	on : {
		lazyImageReady : function(){
			var swiper = this;
			setTimeout(function(){
				swiper.updateAutoHeight();
			}, 100);
		}
	}
});
