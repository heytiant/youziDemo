import {hashHistory,Link}  from "react-router";

export default React.createClass({

    render(){
        return (
        <div className="banner-top">
            <div>
		<img src="img/img7.jpg" />
		</div>
		<ul>
			<li>
				<Link to={{pathname:"temai"}} activeClassName="activeitem">全部</Link>
			</li>
			<li>
				<Link to={{pathname:"temai"}}  >123柜具提交代码</Link>
				
			</li>
			<li>
                	<Link to={{pathname:"temai"}}  >啧啧啧啧啧啧做做做做做做做做123椅类提交代码</Link>
			
			</li>
			<li>
                	<Link to={{pathname:"temai"}} >123沙发提交代码</Link>
			
			</li>
			<li>
                	<Link to={{pathname:"temai"}}  >睡床</Link>
			
			</li>
			<li>
                	<Link to={{pathname:"temai"}} >桌几</Link>
			
			</li>
		</ul>
	
	</div>	


        )



    }




})