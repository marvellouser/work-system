import React from "react";
import Layout from "../../components/Layout";
// import "./style.scss";
import Menu from "../../components/Menu/index";
export default class About extends React.PureComponent {
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
          <div className="about-left">
            <Menu menus={menus} />
          </div>
        )}
        right={() => <div className="about-right">人力资源</div>}
        history={this.props.history}
      />
    );
  }
}
