import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import PropTypes from "prop-types";

export default class Menu extends React.PureComponent {
  static defaultProps = {
    menus: [],
  };
  static propTypes = {
    menus: PropTypes.array,
  };
  render() {
    const menus = this.props.menus.map((menu) => {
      return (
        <React.Fragment key={menu.name}>
          <NavLink
            className="lt__menu__item"
            activeClassName="lt__menu__active"
            to={menu.path}
          >
            {menu.name}
          </NavLink>
          <div className="lt__menu__line"></div>
        </React.Fragment>
      );
    });
    return (
      <div className="lt__menu">
        {menus}
        <div className="lt__menu__bottom">
          <img
            className="lt__menu__bottom-img"
            src="http://www.kofler.com.cn/images/nx2.jpg"
            alt=""
          />
        </div>
      </div>
    );
  }
}
