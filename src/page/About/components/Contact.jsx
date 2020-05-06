import React from 'react'
import './style.scss'
import HeadTitle from '../../../components/HeadTitle'

export default class Contact extends React.PureComponent {
  render() {
    return (
      <div className="contact">
        <HeadTitle title="联系我们" />
        <div className="contact__slogn">
          <img
            className="slogn__img"
            src="http://www.kofler.com.cn/images/contact.JPG"
            alt="联系我们"
          />
        </div>
        <div className="contact__info">
          <div className="contact__info-title">上海科菲勒电气有限公司</div>
          <div className="contact__info-address">
            地址：上海市嘉定区尚学路225-229号
          </div>
          <div className="contact__info-another">
            <img src="http://www.kofler.com.cn/images/lx2.png" alt="热线" />
            <span>全国服务热线：400 0799 628</span>
          </div>
          <div className="contact__info-another">
            <img src="http://www.kofler.com.cn/images/lx3.jpg" alt="QQ" />
            <span>商务QQ：877177266 86672191</span>
          </div>
          <div className="contact__info-another">
            <img src="http://www.kofler.com.cn/images/lx4.jpg" alt="邮箱" />
            <span>邮箱：kofler@163.com</span>
          </div>
        </div>
      </div>
    )
  }
}
