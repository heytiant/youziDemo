
import {Link ,hashHistory} from "react-router";

export default React.createClass({


    render(){

        return(
            <div>
           
                

            	<div className="mineTop">
				<Link to="mine/login"> 
			<img src="img/1.png" />
			<h2>柚客</h2>
			<p>中国</p>
				</Link>
          
		</div>
		
		
		
		
		<div className="mineContent">
			
			<ul>
				<li>
				<Link to="/mine/order">
					<div>
						<i className="iconfont icon-benshubook119"></i>	
						<span>我的订单</span>
							<i className="bg iconfont icon-arrowRight"></i>
					</div>
					
					
				</Link>
				
				</li>
				
				<li>
				<Link to="mine/collection">
						<div>
						<i className="iconfont icon-xin"></i>	
						<span>我的收藏</span>
						<i className="bg iconfont icon-arrowRight"></i>
					</div>
						
				</Link>
				</li>
				
				
				<li className="spe-li">
				<Link to="mine/address">
					<div>
						<i className="iconfont icon-shouhuodizhi"></i>	
						<span>收货地址</span>
							<i className="bg iconfont icon-arrowRight"></i>
					</div>
					
					
					
				</Link>
				</li>
				<li className="lastli">
			<Link to="mine/set">
						<div>
						<i className="iconfont icon-shezhi"></i>	
						<span>设置</span>
							<i className="bg iconfont icon-arrowRight"></i>
					</div>
					
				</Link>
				</li>
			</ul>
			
			
			
		</div>

        </div>
		
        )

    }



})