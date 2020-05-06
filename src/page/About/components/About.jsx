import React from 'react'
import './style.scss'
import HeadTitle from '../../../components/HeadTitle'

export default class About extends React.PureComponent {
  render() {
    return (
      <div className="about">
        <HeadTitle title="关于科菲勒" />

        <div className="about__slogn">
          <img
            className="slogn__img"
            src="http://www.kofler.com.cn/images/about.JPG"
            alt="关于我们"
          />
        </div>
        <div className="about__title">
          上海科菲勒电气有限公司（以下简称科菲勒）是一家专业从事研发、生产和销售双电源自动切换开关，控制与保护开关，HPD多功能谐波保护器，自复式过欠压保护器，智能数显电力仪表，万能式断路器等低压配电电器的高新技术企业。
        </div>
        <div className="about__line">
          <img src="http://www.kofler.com.cn/images/nx3.jpg" alt="" />
        </div>
        <div className="about__desc">
          科菲勒自成立以来一直致力于为工业自动化控制提供全面服务，长期为用户提供先进技术和优质服务，以精确、可靠、节能、环保的智能配电产品满足电力系统各方面的需求。自公司建立质量管理体系并通过CQC审核、取得ISO9001证书起，公司主要产品均通过国家有关检测机构型式试验，并取得相关证书。公司将坚持“以质量求生存，以科技求发展，以管理出效益，一切为用户服务”的经营方针，与社会各界朋友真诚合作，以现有产品线为基础，逐步发展为以智能化配电产品为主体的高科技企业。
        </div>
        <div className="about__line">
          <img src="http://www.kofler.com.cn/images/nx3.jpg" alt="" />
        </div>
        <div className="about__info">
          <div className="about__info-text">
            <p>
              市场是我们思考问题的出发点，客户满意是衡量我们工作的宗旨。我们为服务社会满足客户而来。企业发展的核心在于紧跟时代的步伐，不断地创新，满足客户而来。企业发展的核心在于紧跟时代的步伐，不断地创新，才能永久站在前沿，走在行业前列。
            </p>
            <p style={{ marginTop: '12px' }}>
              科菲勒电气热忱欢迎新老客户来电、来函、来访洽谈业务。我们衷心希望与国内外各行各业的朋友及同行代理商建立友好的合作关系，同谋发展，共创美好未来。
            </p>
          </div>
          <div className="about__info-img">
            <img src="http://www.kofler.com.cn/images/rnrtu.jpg" alt="" />
          </div>
        </div>
      </div>
    )
  }
}
