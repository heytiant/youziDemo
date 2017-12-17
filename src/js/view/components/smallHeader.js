
import {Link,hashHistory} from "react-router";

export default  React.createClass({
    render(){

          return(

            <div className="smallHeader">
			<Link to={{pathname:"mine"}} >
			<i className="iconfont icon-jiantou21"></i>
			</Link>
			<span>我的订单</span>
		    </div>
		
            )


    }
  




})