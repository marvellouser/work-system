import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
export default class Swiper extends React.PureComponent {
  static defaultProps = {
    swiperArr: [],
  };
  static propTypes = {
    swiperArr: PropTypes.array,
  };
  state = {
    imgIndex: 0,
  };
  timer = null;
  componentDidMount() {
    this.autoMove();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { swiperArr } = this.props;
    const { imgIndex } = this.state;
    const bigImg = swiperArr.map((img, index) => {
      return (
        <li
          className="swiper__img-item"
          style={{ opacity: imgIndex === index ? 1 : 0 }}
          key={index}
        >
          <img className="swiper__img-item-img" src={img} alt="" />
        </li>
      );
    });
    const smallImg = swiperArr.map((img, index) => {
      return (
        <li
          className={`swiper__img-control-item ${
            imgIndex === index ? "swiper__img-control-item-active" : ""
          }`}
          key={index}
          onMouseEnter={() => {
            clearInterval(this.timer);
            this.setState({
              imgIndex: index,
            });
          }}
          onMouseLeave={() => {
            this.autoMove();
          }}
        >
          <img className="swiper__img-control-item-img" src={img} alt="" />
        </li>
      );
    });
    return (
      <div className="swiper">
        <ul className="swiper__img">{bigImg}</ul>
        <ul className="swiper__img-control">{smallImg}</ul>
      </div>
    );
  }
  autoMove = () => {
    this.timer = setInterval(() => {
      const { swiperArr } = this.props;
      const { imgIndex } = this.state;
      let newImgIndex = imgIndex + 1;
      if (imgIndex === swiperArr.length - 1) {
        newImgIndex = 0;
      }
      this.setState({
        imgIndex: newImgIndex,
      });
    }, 3500);
  };
}
