

import  HeaderDom from "../components/header";

import Footer from "../components/footer";

import ListMap from "../components/listMap";

var jsonp =require("fetch-jsonp");






export default React.createClass({
    getInitialState(){
        return{
              title:"精选",
              listMap:[]
        }
      
    },
   componentWillMount(){
        jsonp("http://datainfo.duapp.com/shopdata/getGoods.php").then(res=>res.json())
        .then(data=>{
            console.log(data);
         var list =data.map(goods=>{
                 return {
                    goodsName:goods.goodsName,
                    img:goods.goodsListImg,
                    names2:goods.className
                 }
         });
       
            this.setState({
            listMap:list

        })
           
        })

       
   },


    render(){
        console.log(this.state.listMap);
    
        return(
            <div>
           <HeaderDom title={this.state.title}  />

           <ListMap listObj={this.state.listMap}/>

           <Footer />
             </div>

        )

    }


})