import {render} from "react-dom";
import React from "react";
import {Provider} from "react-redux";
import { HashRouter, hashHistory, Route } from 'react-router-dom';
import List from './components/List';
import App from "./containers/App";
import store from "./store";
import '../app/styles/styles.css';
render(
    <Provider store={store}>
       <HashRouter hashType="noslash" basename="index.html" history={hashHistory}>
       <div>
           <Route path="/list" component={List} />
           {/*<Route path="**" component={App} />*/}
       </div>   
       </HashRouter>
    </Provider>,
    window.document.getElementById('app'));