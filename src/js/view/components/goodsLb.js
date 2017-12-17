import {Link,hashHistory} from "react-router";

var Goods =React.createClass({
	render(){

		return(
		
			<li>
			<Link to="temai/xianqin">
			<img src={this.props.goods.goodImg} /> 	
			<h2>{this.props.goods.goodName}</h2>
			<p>{this.props.goods.price}</p>
			</Link>	
				
				
			</li>
		


		)

	}





})


export default  React.createClass({

    render(){
				console.log(this.props.goodsLb);

			var goods =this.props.goodsLb.map((item,index)=>{

					return <Goods  goods={item}  key={index} />

				})

            return(

				<div className="bannerList">
			
			<ul>	
				{goods}

			</ul>
			</div>

				
            )


    }

})

