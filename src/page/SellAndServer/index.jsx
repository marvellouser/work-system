import React from "react";
import Layout from "../../components/Layout";
// import "./style.scss";
import Menu from "../../components/Menu/index";
export default class About extends React.PureComponent {
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
          <div className="about-left">
            <Menu menus={menus} />
          </div>
        )}
        right={() => <div className="about-right">销售服务页面</div>}
        history={this.props.history}
      />
    );
  }
}
