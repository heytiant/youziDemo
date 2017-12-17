

export default React.createClass({
    componentDidMount(){
   		 
	var mySwiper2 = new Swiper('#swiper-container2',{
		watchSlidesProgress : true,
		watchSlidesVisibility : true,
		slidesPerView : 6,
		onTap: function(){
				mySwiper3.slideTo( mySwiper2.clickedIndex)
			}
		})
		
		
		var mySwiper3 = new Swiper('#swiper-container3',{
	
		onSlideChangeStart: function(){
				updateNavPosition();
			}
	
		})

		function updateNavPosition(){
			
				$('#swiper-container2 .active-nav').removeClass('active-nav')
				var activeNav = $('#swiper-container2 .swiper-slide').eq(mySwiper3.activeIndex).addClass('active-nav');
		
		
				if (!activeNav.hasClass('swiper-slide-visible')) {
			console.log(1);
					if (activeNav.index()>mySwiper2.activeIndex) {
			console.log(2);
						var thumbsPerNav = Math.floor(mySwiper2.width/activeNav.width())-1
						mySwiper2.slideTo(activeNav.index()-thumbsPerNav)
					}
					else {
			console.log(3);
						mySwiper2.slideTo(activeNav.index())
					}	
				}
			}
	
	},
	componentDidUpdate(){
		this.mySwiper2.update();
        this.mySwiper3.update();


	},
	

    render(){
        return(
            
<div>	
 	
		
	<div className="swiper-container swiper-container-horizontal swp1 " id="swiper-container2" >
	<div className="swiper-wrapper swp1wrapper" >
		<div className="swiper-slide active-nav swiper-slide-visible swiper-slide-active " >
			全部
		</div>
		<div className="swiper-slide swiper-slide-visible swiper-slide-next" >
			柜类
		</div>
		<div className="swiper-slide swiper-slide-visible" >
			椅类
		</div>
		<div className="swiper-slide" >
			沙发
		</div>
		<div className="swiper-slide" >
			睡床
		</div>
		<div className="swiper-slide" >
			桌几
		</div>
		
	</div>
</div>


<div className="swiper-container swiper-container-horizontal swp2" id="swiper-container3">
	<div className="swiper-wrapper">
		<div className="swiper-slide blue-slide swiper-slide-active swp2wrapper" >
				
			<ul  className="goodsBanner">
				<li>
					<a>
						<img src="img/img1.jpg"  />
						<h2>北欧风情单椅</h2>
						<p>¥500.0</p>
						
					</a>
				</li>
				
				<li>
					<a>
						<img src="img/img2.jpg"  />
						<h2>北欧风情单椅</h2>
						<p>¥500.0</p>
						
					</a>
				</li>
				
				<li>
					<a>
						<img src="img/img3.jpg"  />
						<h2>北欧风情单椅</h2>
						<p>¥500.0</p>
						
					</a>
				</li>
				
				<li>
					<a>
						<img src="img/img4.jpg"  />
						<h2>北欧风情单椅</h2>
						<p>¥500.0</p>
						
					</a>
				</li>
				
				<li>
					<a>
						<img src="img/img5.jpg"  />
						<h2>北欧风情单椅</h2>
						<p>¥500.0</p>
						
					</a>
				</li>
				
				<li>
					<a>
						<img src="img/img6.jpg"  />
						<h2>北欧风情单椅</h2>
						<p>¥500.0</p>
						
					</a>
				</li>
				
				<li>
					<a>
						<img src="img/img7.jpg"  />
						<h2>北欧风情单椅</h2>
						<p>¥500.0</p>
						
					</a>
				</li>
				
				<li>
					<a>
						<img src="img/img8.jpg"  />
						<h2>北欧风情单椅</h2>
						<p>¥500.0</p>
						
					</a>
				</li>
				
				
			</ul>
			
			
		
		
		
		
		
		</div>
		<div className="swiper-slide red-slide swiper-slide-next" >
			slider2</div>
		<div className="swiper-slide orange-slide" >
			slider3</div>
		<div className="swiper-slide blue-slide">
			slider4</div>
		<div className="swiper-slide red-slide" >
			slider5</div>
		<div className="swiper-slide orange-slide" >
			slider6</div>
	</div>
</div>
		
		

       
        </div>


        )


    }


})

      



