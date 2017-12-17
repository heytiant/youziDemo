import {hashHistory,Link}  from "react-router";


export default React.createClass({

    render(){
        return(

            <footer className="foo">
			
			<ul>
			<li>	
			<Link to={{pathname:"home"}}  activeClassName="active">
			<span className=" iconfont icon-fangzi"></span>
			<div>精选</div>
			</Link>	
			</li>
			
			<li>	
			<Link to={{pathname:"find"}} activeClassName="active">
			<span className="iconfont icon-shuben"></span>
			<div>发现</div>
			</Link>	
			</li>
			
			<li>	
			<Link to={{pathname:"temai"}}  activeClassName="active">
			<span className="iconfont icon-suo1"></span>
			<div>特卖</div>
			</Link>	
			</li>
			
				<li>	
			<Link to={{pathname:"daodian"}}  activeClassName="active">
			<span className="iconfont icon-fz"></span>
			<div>到店</div>
			</Link>	
			</li>
				
			<li>	
			<Link to={{pathname:"mine"}}  activeClassName="active">
			<span className="iconfont icon-iconzhenghe31"></span>
			<div>我的</div>
			</Link>	
			</li>
				
				
			</ul>
			
			
			
		</footer>



      )


    }




})