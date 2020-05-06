import React from 'react'
import './style.scss'
function Goods(props) {
  const { imgUrl, title } = props
  return (
    <div className="goods">
      <div className="goods__img">
        <img src={imgUrl} alt="" />
      </div>
      <div className="goods__title">{title}</div>
    </div>
  )
}
function GoodsList(props) {
  return (
    <div className="goods-list">
      <Goods
        imgUrl="http://www.kofler.com.cn/images/siwo.jpg"
        title="KT-GA系列双电源自动切换开关"
      />
    </div>
  )
}

export default GoodsList
