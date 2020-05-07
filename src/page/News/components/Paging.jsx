import React from "react";
import "./style.scss";
export default class Pagind extends React.Component {
  state = {
    pagesNum: 1,
    currentPage: 0,
  };
  render() {
    const { currentPage } = this.state;
    const { onChange, pagesNum = 10 } = this.props;
    const items = new Array(pagesNum).fill(null).map((ele, index) => (
      <div
        className={`paging__center-item ${
          index === currentPage ? "paging__center-active" : ""
        }`}
        key={index}
        onClick={() => {
          if (index === currentPage) return;
          this.setState({
            currentPage: index,
          });
          onChange && onChange(index);
        }}
      >
        {index + 1}
      </div>
    ));
    return (
      <div className="paging">
        <div
          className="paging__left"
          onClick={() => {
            const { currentPage } = this.state;
            if (currentPage === 0) return;
            this.setState({
              currentPage: currentPage - 1,
            });
            onChange && onChange(currentPage - 1);
          }}
        >
          <img src="http://www.kofler.com.cn/images/zz.jpg" alt="上一页" />
        </div>
        <div className="paging__center">{items}</div>
        <div
          className="paging__right"
          onClick={() => {
            const { currentPage } = this.state;
            if (currentPage === pagesNum - 1) return;
            this.setState({
              currentPage: currentPage + 1,
            });
            onChange && onChange(currentPage + 1);
          }}
        >
          <img src="http://www.kofler.com.cn/images/yy.jpg" alt="下一页" />
        </div>
      </div>
    );
  }
}
