import  HeaderDom from "../components/header";

import Footer from "../components/footer";


import GoodBanner from "../components/goodBanner";

import GoodsLb  from "../components/goodsLb";



var jsonp =require("fetch-jsonp");

// var fetch =require("fetch");



export default React.createClass({
    getInitialState(){
        return{
              title:"特卖",
              goodsObj:[]
        }


    },
    
   
    componentWillMount(){
         var that =this;
        $.ajax({
            url:"youzi/getBannerList.php",
            dataType:"json",
            success:function(data){

                console.log(data);

               

                // console.log(obj);

                var list=data.map(goods=>{
                    return{

                        goodName:goods.title,
                        goodImg:goods.img,
                        price:goods.price
                    }
                    
                    

                });

            //    console.log(typeof list);
            
         
             that.setState({

                    goodsObj:list
                })
  
            }
        })
    },
   

    render(){
           console.log(this.state);
        return(
            <div>
           <HeaderDom title={this.state.title}  />
           <GoodBanner />
           <GoodsLb goodsLb={this.state.goodsObj}/>

           <Footer />
             </div>

        )

    }


})