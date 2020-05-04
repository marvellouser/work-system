import React from 'react'
import './style.scss'

export default class index extends React.PureComponent {
  render() {
    const { title, time, path } = this.props
    return (
      <li className="admin__container-news-list-li">
        <span>
          <a href={path}>{title}</a>
        </span>
        <span className="admin__container-news-list-time">{time}</span>
      </li>
    )
  }
}
