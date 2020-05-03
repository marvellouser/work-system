import React from "react";
import Head from "../components/Head/index";
import { Route, Switch } from "react-router-dom";
import Admin from "./Admin";
import About from "./About";
import Products from "./Products";
import News from "./News";
import SellAndServer from "./SellAndServer";
import Human from "./Human";
import "./style.scss";
export default class Index extends React.PureComponent {
  render() {
    return (
      <div>
        <Head {...this.props} />
        <Switch>
          <Route path="/" exact component={Admin} />
          <div className="container">
            <div className="con">
              <Route path="/about" component={About} />
              <Route path="/products" component={Products} />
              <Route path="/news" component={News} />
              <Route path="/sellandserver" component={SellAndServer} />
              <Route path="/human" component={Human} />
            </div>
          </div>
        </Switch>
      </div>
    );
  }
}
