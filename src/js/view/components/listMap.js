

var List =React.createClass({

render(){

        return(
            <li>
					<img src={this.props.goods.img}/>
						<h2>{this.props.goods.goodsName}</h2>		
						<p>{this.props.goods.names2}</p>
			</li>
        )


}

})

export default React.createClass({
    render(){
            console.log(this.props.listObj);

            var list =this.props.listObj.map((item,index)=>{
                return <List goods={item}  key={index} />
            })

            return (
                    <div className="list">
				         <ul>
                      {list}
                        
                        </ul>

                        </div>


            )


    }




})