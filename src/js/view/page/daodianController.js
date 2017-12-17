
import store from "../../store/daodianStore.js";

import Daodian from "./daodian.js";


export default React.createClass({

    getInitialState(){
        return store.getAll();
    },

    render(){
        console.log(this.state);
        return (
            
            <Daodian dataObj={this.state} />

        )

    }


})
