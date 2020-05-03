import React from "react";
import Layout from "../../components/Layout";
import Menu from "../../components/Menu/index";
import { Route } from "react-router-dom";
import Domestic from "./components/Domestic";
import International from "./components/International";
import Agent from "./components/Agent";

export default class SellAndServer extends React.PureComponent {
  render() {
    const menus = [
      {
        path: "/sellandserver/domestic",
        name: "国内贸易",
      },
      {
        path: "/sellandserver/international",
        name: "国际贸易",
      },
      {
        path: "/sellandserver/agent",
        name: "代理加盟",
      },
    ];
    return (
      <Layout
        left={() => (
          <div className="sellandserver-left">
            <Menu menus={menus} />
          </div>
        )}
        right={() => (
          <div className="sellandserver-right">
            <Route path="/sellandserver/domestic" component={Domestic} />
            <Route
              path="/sellandserver/international"
              component={International}
            />
            <Route path="/sellandserver/agent" component={Agent} />
          </div>
        )}
        history={this.props.history}
      />
    );
  }
}
