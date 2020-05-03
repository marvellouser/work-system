import React from "react";
import Layout from "../../components/Layout";
import "./style.scss";
import Menu from "../../components/Menu/index";
import SubAbout from "./components/About";
import Case from "./components/Case";
import Organization from "./components/Organization";
import Company from "./components/Company";
import Contact from "./components/Contact";

import { Route } from "react-router-dom";
export default class About extends React.PureComponent {
  render() {
    const menus = [
      {
        path: "/about/about",
        name: "关于科菲勒",
      },
      {
        path: "/about/company",
        name: "企业文化",
      },
      {
        path: "/about/organization",
        name: "组织架构",
      },
      {
        path: "/about/case",
        name: "工程案例",
      },
      {
        path: "/about/contact",
        name: "联系我们",
      },
    ];
    return (
      <Layout
        left={() => (
          <div className="about-left">
            <Menu menus={menus} />
          </div>
        )}
        right={() => (
          <div className="about-right">
            <Route path="/about/about" component={SubAbout} />
            <Route path="/about/company" component={Company} />
            <Route path="/about/organization" component={Organization} />
            <Route path="/about/case" component={Case} />
            <Route path="/about/contact" component={Contact} />
          </div>
        )}
        history={this.props.history}
      />
    );
  }
}
