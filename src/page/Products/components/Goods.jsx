import React from 'react'
import GoodsList from './GoodsList'
import data from '../data'
import { Redirect } from 'react-router-dom'

function Products1(props) {
  const {
    history,
    match: {
      params: { num, goods },
    },
  } = props
  console.log(props, '...............')
  const tempGoods = data[num]
  const goodsList = tempGoods && tempGoods.goods
  return (
    <div>
      {!goodsList && <Redirect to="/products/products/0" />}
      {goodsList && !goods ? (
        <GoodsList goodsList={goodsList} history={history} />
      ) : (
        <div>商品详情</div>
      )}
    </div>
  )
}

export default Products1
