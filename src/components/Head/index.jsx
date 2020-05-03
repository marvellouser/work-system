import React from "react";
import "./style.scss";
import Tab from "../Tab/index";
export default class Head extends React.PureComponent {
  render() {
    const { history } = this.props;
    const tabs = [
      {
        path: "/",
        name: "首页",
      },
      {
        path: "/about/about",
        name: "关于科菲勒",
      },
      {
        path: "/products/products1",
        name: "产品中心",
      },
      {
        path: "/news/news",
        name: "新闻中心",
      },
      {
        path: "/sellandserver/domestic",
        name: "销售与服务",
      },
      {
        path: "/human/joinus",
        name: "人力资源",
      },
      {
        path: "/about/contact",
        name: "联系我们",
      },
    ];
    return (
      <div className="head-wrap">
        <div className="head-con">
          <div
            className="logo-wrap"
            onClick={() => {
              history.push("/");
            }}
          >
            <img
              className="logo"
              src="http://www.kofler.com.cn/images/logo.jpg"
              alt="logo"
            />
          </div>
          <Tab tabs={tabs} />
          <div
            className="phone-wrap"
            onClick={() => {
              history.push("/about/contact");
            }}
          >
            <img src="http://www.kofler.com.cn/images/tel.jpg" alt="phone" />
          </div>
        </div>
        <div className="head-bottom"></div>
      </div>
    );
  }
}
