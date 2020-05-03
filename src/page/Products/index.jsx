import React from "react";
import Layout from "../../components/Layout";
// import "./style.scss";
import Menu from "../../components/Menu/index";
export default class About extends React.PureComponent {
  render() {
    const menus = [
      {
        path: "/products/products1",
        name: "双电源自动切换开关",
      },
      {
        path: "/products/products2",
        name: "控制与保护开关电器",
      },
      {
        path: "/products/products3",
        name: "智能数显电力仪表",
      },
      {
        path: "/products/products4",
        name: "多功能谐波保护器",
      },
      {
        path: "/products/products5",
        name: "负荷隔离开关",
      },
      {
        path: "/products/products6",
        name: "小型断路器",
      },
      {
        path: "/products/products7",
        name: "塑壳断路器",
      },
      {
        path: "/products/products8",
        name: "万能式断路器",
      },
    ];
    return (
      <Layout
        left={() => (
          <div className="about-left">
            <Menu menus={menus} />
          </div>
        )}
        right={() => <div className="about-right">产品中心页面</div>}
        history={this.props.history}
      />
    );
  }
}
