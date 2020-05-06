import React from 'react'
import HeadTitle from '../../../components/HeadTitle'
import './style.scss'
export default class Domestic extends React.PureComponent {
  render() {
    return (
      <div className="domestic">
        <HeadTitle title="国内贸易" />
        <img src="http://www.kofler.com.cn/images/gmap.JPG" alt="国内贸易" />
      </div>
    )
  }
}
