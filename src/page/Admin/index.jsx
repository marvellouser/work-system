import React from "react";
import "./style.scss";
import Swiper from "./components/Swiper/index";
export default class Admin extends React.PureComponent {
  render() {
    const swiperArr = [
      "http://www.kofler.com.cn/images/show01.JPG",
      "http://www.kofler.com.cn/images/show02.JPG",
      "http://www.kofler.com.cn/images/show03.JPG",
      "http://www.kofler.com.cn/images/show04.JPG",
    ];
    return (
      <div className="admin-wrapper">
        <Swiper swiperArr={swiperArr} />
        <div className="admin-container"></div>
      </div>
    );
  }
}
