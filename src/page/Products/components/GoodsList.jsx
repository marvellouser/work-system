import React from 'react'
import './style.scss'
function GoodsCard(props) {
  const { imgUrl, title, path, history } = props
  return (
    <div
      className="goods"
      onClick={() => {
        history.push(path)
      }}
    >
      <div className="goods__img">
        <img src={imgUrl} alt="" />
      </div>
      <div className="goods__title">{title}</div>
    </div>
  )
}
function GoodsList(props) {
  const { history, goodsList } = props
  const list =
    goodsList &&
    goodsList.map((goods, index) => (
      <div className="goods-wrap" key={index}>
        <GoodsCard
          imgUrl={goods.imgUrl}
          title={goods.goodsName}
          path={goods.path}
          history={history}
        />
      </div>
    ))
  return <div className="goods-list">{list}</div>
}

export default GoodsList
