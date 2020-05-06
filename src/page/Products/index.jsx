import React from 'react'
import Layout from '../../components/Layout'
// import "./style.scss";
import Menu from '../../components/Menu/index'
import { Route, Redirect } from 'react-router-dom'
import Goods from './components/Goods'

export default class About extends React.Component {
  render() {
    const menus = [
      {
        path: '/products/products/0',
        name: '双电源自动切换开关',
      },
      {
        path: '/products/products/1',
        name: '控制与保护开关电器',
      },
      {
        path: '/products/products/2',
        name: '智能数显电力仪表',
      },
      {
        path: '/products/products/3',
        name: '多功能谐波保护器',
      },
      {
        path: '/products/products/4',
        name: '负荷隔离开关',
      },
      {
        path: '/products/products/5',
        name: '小型断路器',
      },
      {
        path: '/products/products/6',
        name: '塑壳断路器',
      },
      {
        path: '/products/products/7',
        name: '万能式断路器',
      },
    ]

    const {
      location: { pathname },
    } = this.props
    console.log(pathname)

    return (
      <Layout
        left={() => (
          <div className="about-left">
            <Menu menus={menus} />
          </div>
        )}
        right={() => (
          <div className="about-right">
            <Route
              exact
              path="/products"
              render={() => <Redirect to="/products/products/0" />}
            />
            <Route path="/products/products/:num?/:goods?" component={Goods} />
          </div>
        )}
        history={this.props.history}
      />
    )
  }
}
