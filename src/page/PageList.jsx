import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Products from "./Products";
import News from "./News";
import SellAndServer from "./SellAndServer";
import Human from "./Human";

export default class PageList extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <div className="con">
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/news" component={News} />
          <Route path="/sellandserver" component={SellAndServer} />
          <Route path="/human" component={Human} />
        </div>
      </div>
    );
  }
}
