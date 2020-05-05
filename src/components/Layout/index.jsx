import React from "react";
import "./style.scss";
export default class Layout extends React.PureComponent {
  render() {
    const { left, right, history } = this.props;
    return (
      <div className="layout">
        <div className="layout__left">
          {left()}
          <div
            className="layout__get-more"
            onClick={() => {
              history.push("/about/contact");
            }}
          >
            <img
              className="layout__get-more-img"
              src="http://www.kofler.com.cn/images/xj2.jpg"
              alt="获取更多"
            />
          </div>
        </div>
        <div className="layout__right">{right()}</div>
      </div>
    );
  }
}
