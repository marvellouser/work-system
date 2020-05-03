import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.scss";

export default class Tab extends React.PureComponent {
  static defaultProps = {
    tabs: [],
  };
  static propTypes = {
    tabs: PropTypes.array,
  };
  render() {
    const tabs = this.props.tabs.map((tab) => {
      return (
        <NavLink to={tab.path} key={tab.name} className="tab__item">
          {tab.name}
        </NavLink>
      );
    });
    return <div className="tab-menu">{tabs}</div>;
  }
}
