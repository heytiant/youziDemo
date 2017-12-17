
import {Link,hashHistory} from "react-router";

export default  React.createClass({
    goback(){
        
                    hashHistory.goBack();
                },
    render(){
          return(

            <div className="smallHeader">
			<Link   onTouchStart={this.goback} >
			<i className="iconfont icon-jiantou21"></i>
			</Link>
			<span>获取验证码</span>
		    </div>
		
            )


    }
  




})