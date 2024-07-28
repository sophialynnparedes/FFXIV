import {Route, Switch, Router } from "wouter";
import Home from "../pages/Home";
import Party from "../pages/Party";

export default function PageRouter(){
    return(
        <Router>
            <Switch>
                <Route path="/" component={Home}/>
                <Route path="/party" component={Party}/>
            </Switch>
        </Router>
    );
}