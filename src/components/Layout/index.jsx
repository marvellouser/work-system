import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
export default class Layout extends React.PureComponent {
  render() {
    const { left, right } = this.props
    return (
      <div className="layout">
        <div className="layout__left">
          {left()}
          <Link className="layout__get-more" to="/contact">
            <img
              className="layout__get-more-img"
              src="http://www.kofler.com.cn/images/xj2.jpg"
              alt="获取更多"
            />
          </Link>
        </div>
        <div className="layout__right">{right()}</div>
      </div>
    )
  }
}
