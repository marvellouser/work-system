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
    this.timer = setInterval(() => {
      this.autoMove();
    }, 2000);
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
    const samllImg = swiperArr.map((img, index) => {
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
            this.timer = setInterval(() => {
              this.autoMove();
            }, 2000);
          }}
        >
          <img className="swiper__img-control-item-img" src={img} alt="" />
        </li>
      );
    });
    return (
      <div className="swiper">
        <ul className="swiper__img">{bigImg}</ul>
        <ul className="swiper__img-control">{samllImg}</ul>
      </div>
    );
  }
  autoMove = () => {
    const { swiperArr } = this.props;
    const { imgIndex } = this.state;
    console.log(1111111111111111);
    let newImgIndex = imgIndex + 1;
    if (imgIndex === swiperArr.length - 1) {
      newImgIndex = 0;
    }
    console.log(newImgIndex, "..............");
    this.setState({
      imgIndex: newImgIndex,
    });
  };
}
