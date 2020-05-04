import React from "react";
import "./style.scss";

export default class Organization extends React.PureComponent {
  render() {
    return (
      <div className="organization">
        <img
          src="http://www.kofler.com.cn/images/organization.JPG"
          alt="组织结构"
        />
      </div>
    );
  }
}
