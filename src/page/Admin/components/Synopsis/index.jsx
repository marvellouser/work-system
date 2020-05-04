import React from 'react'
import './style.scss'

export default class index extends React.PureComponent {
  render() {
    const text = '上海科菲勒电气有限公司（以下简称科菲勒）是一家专业从事研发、生产和销售双电源自动切换开关，控制与保护开关，HPD多功能谐波保护器，智能数显电力仪表，万能式断路器等低压配电电器的高新技术企业。科菲勒自成立以来一直致力于为工业自动化控制提供全面服务，长期为用户提供先进技术和优质服务...'
    return (
      <div className="admin__container-synopsis">
        <div className="admin__container-synopsis-brief">公司简介</div>
        <div className="admin__container-synopsis-con">
          <div>
            <img src="http://www.kofler.com.cn/images/at.jpg" alt="" />
          </div>
          <div>
            <span className="admin__container-synopsis-con-text">{text}</span>
            <a className="admin__container-synopsis-con-icon" href="/about/about">
              <img src="http://www.kofler.com.cn/images/gmore.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
