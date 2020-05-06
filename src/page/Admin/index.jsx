import React from 'react'
import './style.scss'
import Swiper from './components/Swiper/index'
import Card from './components/Card/index'
import Synopsis from './components/Synopsis/index'
import News from './components/News/index'
export default class Admin extends React.PureComponent {
  render() {
    const { history } = this.props
    const swiperArr = [
      'http://www.kofler.com.cn/images/show01.JPG',
      'http://www.kofler.com.cn/images/show02.JPG',
      'http://www.kofler.com.cn/images/show03.JPG',
      'http://www.kofler.com.cn/images/show04.JPG',
    ]
    const cardArr = [
      {
        title: '产品信息',
        describe: '快速浏览最新产品信息',
        imgSrc: 'http://www.kofler.com.cn/images/c1.jpg',
        path: '/products',
      },
      {
        title: '代理加盟',
        describe: '携手共创，走向成功',
        imgSrc: 'http://www.kofler.com.cn/images/c2.jpg',
        path: '/sellandserver/agent',
      },
      {
        title: '商务咨询',
        describe: '销售工程师团队随时接受您关于产品的相关问题咨询',
        imgSrc: 'http://www.kofler.com.cn/images/c3.jpg',
        path: '/contact',
      },
    ]
    const cardList = cardArr.map((item, index) => {
      return <Card history={history} {...item} key={index} />
    })
    return (
      <div className="admin-wrapper">
        <Swiper swiperArr={swiperArr} />
        <div className="admin-container">
          <div className="admin-container-card">{cardList}</div>
          <div className="admin-container-wrap">
            <Synopsis />
            <News />
          </div>
        </div>
      </div>
    )
  }
}
