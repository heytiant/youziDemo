import  HeaderDom from "../components/header";

import Footer from "../components/footer";

import MineLog from "../components/mineLog";

import Order from "../components/order/order";

export default React.createClass({
    getInitialState(){
        return{
              title:"我的"

        }
      
    },
   

    render(){
    
        return(
            <div>
          <MineLog />

           <Footer />
             </div>

        )

    }


})