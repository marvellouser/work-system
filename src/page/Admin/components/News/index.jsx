import React from 'react'
import './style.scss'
import NewsList from '../NewsList/index'

export default class index extends React.PureComponent {
  render() {
    const newsListArr = [
      {
        title: '谐波保护器之谐波的治理',
        time: '2017-01-26',
        path: '/news/news'
      },
      {
        title: '谐波保护器工作原理',
        time: '2018-01-16',
        path: '/news/news'
      },
      {
        title: '国内外多功能谐波保护器选型大全',
        time: '2017-11-27',
        path: '/news/news'
      },
      {
        title: '双电源选购之迷你型双电源',
        time: '2017-03-24',
        path: '/news/news'
      },
      {
        title: 'PC级双电源选型注意事项',
        time: '2016-10-26',
        path: '/news/news'
      }
    ]
    const newsList = newsListArr.map((item, index) => {
      return <NewsList {...item} key={index} />
    })
    return (
      <div className="admin__container-news">
        <div className="admin__container-news-title">
          <span>新闻中心</span>
          <span>
            <a href="/news/news">
              <img src="http://www.kofler.com.cn/images/jmore.jpg" alt="更多" />
            </a>
          </span>
        </div>
        <div className="admin__container-news-list">
          <ul>
            {newsList}
          </ul>
        </div>
      </div>
    )
  }
}
