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
				<Link to={{pathname:"temai"}}  >柜具</Link>
				
			</li>
			<li>
                	<Link to={{pathname:"temai"}}  >椅类</Link>
			
			</li>
			<li>
                	<Link to={{pathname:"temai"}} >沙发</Link>
			
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