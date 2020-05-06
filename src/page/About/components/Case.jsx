import React from 'react'
import './style.scss'
import HeadTitle from '../../../components/HeadTitle'

export default class Case extends React.PureComponent {
  render() {
    return (
      <div className="case">
        <HeadTitle title="工程案例" />
        <img src="http://www.kofler.com.cn/images/soon.JPG" alt="近期推出" />
      </div>
    )
  }
}
