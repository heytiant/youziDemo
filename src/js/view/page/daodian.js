import  HeaderDom from "../components/header";

import DaodianBanner from "../components/daodianbanner.js";

import DaodianBannerImg from "../components/daodianBannerImg.js"

import Footer from "../components/footer";

export default React.createClass({

    render(){
    
        return(
            <div>
           <HeaderDom title={this.props.dataObj.title}  />
           <DaodianBannerImg />
            <DaodianBanner/>
           <Footer />
             </div>

        )

    }


})