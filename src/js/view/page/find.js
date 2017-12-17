import  HeaderDom from "../components/header";

import Footer from "../components/footer";

import FindImg from "../components/findImg";

export default React.createClass({
    getInitialState(){
        return{
              title:"发现"

        }
      
    },
   

    render(){
    
        return(
            <div>
           <HeaderDom title={this.state.title}  />

           <FindImg/>

           <Footer />
             </div>

        )

    }


})