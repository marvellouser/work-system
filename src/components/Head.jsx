import React from 'react'
import './head.scss'
export default class Head extends React.PureComponent {
  render() {
    const { history } = this.props
    return (
      <div className="head-wrap">
        <div className="head-con">
          <div
            className="logo-wrap"
            onClick={() => {
              history.push('/')
            }}
          >
            <img
              className="logo"
              src="http://www.kofler.com.cn/images/logo.jpg"
              alt="logo"
            />
          </div>
          <div className="menu">
            <div
              className="item"
              onClick={() => {
                history.push('/')
              }}
            >
              首页
            </div>
            <div
              className="item"
              onClick={() => {
                history.push('/about')
              }}
            >
              关于科菲勒
            </div>
            <div
              className="item"
              onClick={() => {
                history.push('/products')
              }}
            >
              产品中心
            </div>
            <div
              className="item"
              onClick={() => {
                history.push('/news')
              }}
            >
              新闻中心
            </div>
            <div
              className="item"
              onClick={() => {
                history.push('/sellandserver')
              }}
            >
              销售与服务
            </div>
            <div
              className="item"
              onClick={() => {
                history.push('/human')
              }}
            >
              人力资源
            </div>
            <div
              className="item"
              onClick={() => {
                history.push('/contact')
              }}
            >
              联系我们
            </div>
          </div>
          <div
            className="phone-wrap"
            onClick={() => {
              history.push('contact')
            }}
          >
            <img src="http://www.kofler.com.cn/images/tel.jpg" alt="phone" />
          </div>
        </div>
        <div className="head-bottom"></div>
      </div>
    )
  }
}
