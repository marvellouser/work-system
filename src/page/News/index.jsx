import React from "react";
import Layout from "../../components/Layout";
// import "./style.scss";
import Menu from "../../components/Menu/index";
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
          <div className="about-left">
            <Menu menus={menus} />
          </div>
        )}
        right={() => <div className="about-right">新闻中心</div>}
        history={this.props.history}
      />
    );
  }
}
