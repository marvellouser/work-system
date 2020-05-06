import React from 'react'
import HeadTitle from '../../../components/HeadTitle'
import './style.scss'
import { Link } from 'react-router-dom'
export default class Hr extends React.PureComponent {
  render() {
    const jobs = [
      {
        name: '外贸业务员/单证员',
        place: '上海',
        date: '2015-11-10',
        path: '/human/hr/salesman',
        avoid: '2015-12-30',
        num: 5,
        Requirement: {
          head: [
            '	1、负责电子商务平台信息维护和产品更新，新产品发布；',
            '2、负责涉外定单合同洽谈和外商接待工作；',
            '3、相关外贸单证制作和交单管理等申报、验单工作；',
            '4、客户往来信函和单证处理。;',
          ],
          another: [
            '其他要求：',
            '1、英语口语流利，能直接同外商交流；',
            '2、熟悉外贸流程。',
            '3、外贸业务员需两年以上工作经验',
          ],
          treatment: ['其他待遇： 底薪+提成+奖金', '双休，法定节日正常休息。'],
        },
        contacts: '人力资源',
        phone: '400-0799-628',
      },
      {
        name: '电气工程师/助理工程师',
        place: '上海',
        date: '2015-11-10',
        path: '/human/hr/engineer',
        avoid: '2015-12-30',
        num: 5,
        Requirement: {
          head: [
            '1、大专及以上学历，电气自动化、机电一体化相关专业。',
            '2、对绘制电气图纸有一定了解；熟练掌握OFFICE、EXCEL办公软件制作文档等；',
            '3、有电气技术员工作经验优先',
          ],
          another: [
            '其他要求： ',
            '1、优秀的团队意识，良好的沟通协调能力。',
            '2、思维敏捷、动手能力强、能吃苦，坚强的意志。',
            '3、有耐心，坚强的意志，工作勤奋，积极进取，服从工作分配。',
          ],
          wel: '本岗位助理工程师职位欢迎应届生应聘',
          treatment: [
            '待遇从优、5险1金、带薪年假、发展空间广阔！',
            '双休，法定节日正常休息。',
          ],
        },
        contacts: '人力资源',
        phone: '400-0799-628',
      },
      {
        name: '区域经理',
        place: '上海',
        date: '2015-11-10',
        path: '/human/hr/manager',
        avoid: '2015-12-30',
        num: 10,
        Requirement: {
          head: [
            '1、负责区域市场开拓，同代理商客户沟通和联络；',
            '2、客户订单合同转化为采购或生产订单，并与财务对接；',
            '3、协助市场部主管处理内勤事物，负担本区域客户资料整理和合同、订单管理与客户服务支持。',
          ],
          another: [
            '其他要求： ',
            '1、三年以上电器产品市场开拓经验；',
            '2、熟悉office软件操作及良好的语言表达和沟通能力。',
          ],
          treatment: [
            '其他待遇：',
            '底薪+高提成+年底分红+奖金',
            '双休，法定节假日正常休息。',
          ],
        },
        contacts: '人力资源',
        phone: '400-0799-628',
      },
    ]
    const jobList = jobs.map((job, index) => {
      return (
        <div className="hr__job-tab-flex hr__job-tab-item" key={index}>
          <div className="hr__job-tab-flex-name">
            <Link to={job.path}>{job.name}</Link>
          </div>
          <div className="hr__job-tab-flex-place">{job.place}</div>
          <div className="hr__job-tab-flex-date">{job.date}</div>
        </div>
      )
    })
    const {
      match: {
        params: { job },
      },
    } = this.props
    const jobMap = {
      salesman: 0,
      engineer: 1,
      manager: 2,
    }
    const jobInfo = jobs[jobMap[job]]
    return (
      <div className="hr">
        <HeadTitle title="人才招聘" />
        {!job || !jobInfo ? (
          <div className="hr__job-tab">
            <div className="hr__job-tab-head hr__job-tab-flex">
              <div className="hr__job-tab-flex-name hr__job-tab-flex-bg">
                职位名称
              </div>
              <div className="hr__job-tab-flex-place hr__job-tab-flex-bg">
                工作地点
              </div>
              <div className="hr__job-tab-flex-date hr__job-tab-flex-bg">
                更新日期
              </div>
            </div>
            {jobList}
          </div>
        ) : (
          <div className="hr__job">
            <div className="hr__job-table">
              <div className="hr__job-table-tr hr__job-table-head">
                <div className="hr__job-table-tr-td hr__job-table-tr-left">
                  详细信息
                </div>
                <div className="hr__job-table-tr-td hr__job-table-tr-right">
                  <Link to="/human/hr">返回人才招聘</Link>
                </div>
              </div>
              <div className="hr__job-table-tr">
                <div className="hr__job-table-tr-td hr__job-table-tr-left">
                  职位:
                </div>
                <div className="hr__job-table-tr-td hr__job-table-tr-right">
                  {jobInfo.name}
                </div>
              </div>
              <div className="hr__job-table-tr">
                <div className="hr__job-table-tr-td hr__job-table-tr-left">
                  有效期:
                </div>
                <div className="hr__job-table-tr-td hr__job-table-tr-right">
                  {jobInfo.avoid}
                </div>
              </div>
              <div className="hr__job-table-tr">
                <div className="hr__job-table-tr-td hr__job-table-tr-left">
                  招聘人数:
                </div>
                <div className="hr__job-table-tr-td hr__job-table-tr-right">
                  {jobInfo.num}
                </div>
              </div>
              <div className="hr__job-table-tr">
                <div className="hr__job-table-tr-td hr__job-table-tr-left">
                  具体要求:
                </div>
                <div className="hr__job-table-tr-td hr__job-table-tr-right">
                  <p className="hr__job-table-tr-td-treat">
                    {jobInfo.Requirement.head.map((ele) => (
                      <p key={ele}>{ele}</p>
                    ))}
                  </p>
                  <p className="hr__job-table-tr-td-treat">
                    {jobInfo.Requirement.another.map((ele) => (
                      <p key={ele}>{ele}</p>
                    ))}
                  </p>
                  {jobInfo.Requirement.wel && (
                    <p className="hr__job-table-tr-td-treat">
                      {jobInfo.Requirement.wel}
                    </p>
                  )}
                  <p className="hr__job-table-tr-td-treat">
                    {jobInfo.Requirement.treatment.map((ele) => (
                      <p key={ele}>{ele}</p>
                    ))}
                  </p>
                  <p></p>
                </div>
              </div>

              <div className="hr__job-table-tr">
                <div className="hr__job-table-tr-td hr__job-table-tr-left">
                  联系人:
                </div>
                <div className="hr__job-table-tr-td hr__job-table-tr-right">
                  {jobInfo.contacts}
                </div>
              </div>
              <div className="hr__job-table-tr">
                <div className="hr__job-table-tr-td hr__job-table-tr-left">
                  联系电话:
                </div>
                <div className="hr__job-table-tr-td hr__job-table-tr-right">
                  {jobInfo.phone}
                </div>
              </div>
              <div className="hr__job-table-tr">
                <div className="hr__job-table-tr-td hr__job-table-tr-left">
                  联系地址:
                </div>
                <div className="hr__job-table-tr-td hr__job-table-tr-right">
                  {jobInfo.place}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
