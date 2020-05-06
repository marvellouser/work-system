import React from 'react'
import './style.scss'
import HeadTitle from '../../../components/HeadTitle'

export default class Organization extends React.PureComponent {
  render() {
    return (
      <div className="organization">
        <HeadTitle title="组织架构" />
        <img
          src="http://www.kofler.com.cn/images/organization.JPG"
          alt="组织结构"
        />
      </div>
    )
  }
}
