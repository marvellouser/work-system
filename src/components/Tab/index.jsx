import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './style.scss'

export default class Tab extends React.Component {
  static defaultProps = {
    tabs: [],
  }
  static propTypes = {
    tabs: PropTypes.array,
  }
  render() {
    const tabs = this.props.tabs.map((tab) => {
      return (
        <NavLink
          to={tab.path}
          key={tab.name}
          activeClassName="tab__active"
          className="tab__item"
          exact={tab.path === '/' ? true : false}
        >
          {tab.name}
        </NavLink>
      )
    })
    return <div className="tab-menu">{tabs}</div>
  }
}
