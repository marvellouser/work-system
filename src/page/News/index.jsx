import React from "react";
import Layout from "../../components/Layout";
import Menu from "../../components/Menu/index";
import { Route } from "react-router-dom";
import Company from "./components/Company";
import SubNews from "./components/News";

export default class About extends React.PureComponent {
  render() {
    const menus = [
      {
        path: "/news/company",
        name: "公司动态",
      },
      {
        path: "/news/news",
        name: "行业新闻",
      },
      {
        path: "/products/products1",
        name: "产品中心",
      },
    ];
    return (
      <Layout
        left={() => (
          <div className="news-left">
            <Menu menus={menus} />
          </div>
        )}
        right={() => (
          <div className="news-right">
            <Route path="/news/company" component={Company} />
            <Route path="/news/news" component={SubNews} />
          </div>
        )}
        history={this.props.history}
      />
    );
  }
}
