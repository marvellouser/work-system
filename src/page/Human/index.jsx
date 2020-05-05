import React from "react";
import Layout from "../../components/Layout";
import { Route } from "react-router-dom";
import Menu from "../../components/Menu/index";
import Hr from "./components/Hr";
import Joinus from "./components/Joinus";
export default class About extends React.Component {
  render() {
    const menus = [
      {
        path: "/human/joinus",
        name: "人力资源",
      },
      {
        path: "/human/hr",
        name: "人才招聘",
      },
    ];
    return (
      <Layout
        left={() => (
          <div className="human-left">
            <Menu menus={menus} />
          </div>
        )}
        right={() => (
          <div className="human-right">
            <Route path="/human/joinus" component={Joinus} />
            <Route path="/human/hr/:job?" component={Hr} />
          </div>
        )}
        history={this.props.history}
      />
    );
  }
}
