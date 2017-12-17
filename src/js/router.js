import { Route, Router, hashHistory, IndexRedirect } from "react-router";

import MainRouter from "./view/page/mainRouter";

import Daodian from "./view/page/daodianController";
import Mine from "./view/page/mine";
import Temai from "./view/page/temai";
import Home from "./view/page/home";
import Find from "./view/page/find";
import Order from "./view/components/order/order";
import Collection from "./view/components/collection/collection";
import Set from "./view/components/set/set";
import Address from "./view/components/address/address";
import Login from "./view/components/login/login";
import Register from "./view/components/register/register";
import Xianqin  from "./view/components/xianqin/xianqin";
export default React.createClass({

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={MainRouter}>
                    <IndexRedirect to="home" />

                    <Route path="daodian" component={Daodian} />
                    <Route path="mine" component={Mine} />
                      <Route path="/mine/order" component={Order} />
                          <Route path="mine/collection" component={Collection} />
                           <Route path="mine/set" component={Set} />
                            <Route path="mine/address" component={Address} />
                               <Route path="mine/login" component={Login} />
                               <Route path="mine/register" component={Register} />
                    <Route path="temai" component={Temai} />
                    <Route path="temai/xianqin" component={Xianqin} />
                    <Route path="home" component={Home} />
                    <Route path="find" component={Find} />
                </Route>
            </Router>
        )
    }
})


