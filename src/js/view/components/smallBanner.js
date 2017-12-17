export default React.createClass({
	componentDidMount(){
		var navSwiper = new Swiper("#nav-swiper",{
			slidesPerView:"auto",//设置slider容器能够同时显示的slides数量(carousel模式)。
			resistanceRatio:0,//抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。
			watchSlidesProgress : true,  //检测 slide切换进度
			watchSlidesVisibility : true,  // 检测slide是否可见,给可见的slide添加类  swiper-slide-visible
			onTap:function(swiper){
				console.log(swiper.clickedIndex);//返回最后点击Slide的索引。(click)
				console.log(swiper.activeIndex);//返回当前活动块(激活块)的索引。loop模式下注意该值会被加上复制的slide数。
				contentSwiper.slideTo(swiper.clickedIndex,300);//index:必选，num，指定将要切换到的slide的索引。
																//speed:可选，num(单位ms)，切换速度
																//runCallbacks:可选，boolean，设置为false时不会触发onSlideChange回调函数。
			}
		});

		var contentSwiper = new Swiper("#content-swiper",{
			resistanceRatio:0,
			onSlideChangeStart:function(swiper){
				// console.log("content滑动")
				// console.log("content==="+swiper.activeIndex);
				change();

			}
		});


		function change(){
			var currentIndex  = contentSwiper.activeIndex;
			console.log("con="+currentIndex);
			console.log("nav="+navSwiper.activeIndex);
			$("#nav-swiper .swiper-slide").removeClass("nav-active");
			var navActive = $("#nav-swiper .swiper-slide").eq(currentIndex).addClass("nav-active");

			console.log(navActive);
			//  hasClass 判断是否包含class
			if(!navActive.hasClass("swiper-slide-visible")){
				console.log("超出不可见");
				
				if(currentIndex>navSwiper.activeIndex){
					var num = Math.floor(navSwiper.width/navActive.width()) - 1;
					console.log(num);
					navSwiper.slideTo(currentIndex-num);
				}else{
					navSwiper.slideTo(currentIndex)
				}
				
			}

		}
		
				},
				componentDidUpdate(){
					this.swiper.update();
				},


    render(){
            return(

                <div>
                <div className="swiper-container" id="nav-swiper">
		<div className="swiper-wrapper   specialNav">
			<div className="swiper-slide nav-active xx">全部</div>
			<div className="swiper-slide xx">待付款</div>
			<div className="swiper-slide xx">待发货</div>
		
		</div>
	</div>

	<div className="swiper-container" id="content-swiper">
		<div className="swiper-wrapper">
			<div className="swiper-slide">全部</div>
			<div className="swiper-slide">待付款</div>
			<div className="swiper-slide">待发货</div>
			
		</div>
	</div>

    </div>

            )
    }



})