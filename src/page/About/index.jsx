import React from "react";
import Layout from "../../components/Layout";
import "./style.scss";
import Menu from "../../components/Menu/index";
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
        right={() => <div className="about-right">22222</div>}
        history={this.props.history}
      />
    );
  }
}
