import React from 'react'
import Head from '../components/Head'
import { Route } from 'react-router-dom'
import Admin from './Admin'
import About from './About'
import Products from './Products'
import News from './News'
import SellAndServer from './SellAndServer'
import Human from './Human'
import Contact from './Contact'
export default class Index extends React.PureComponent {
  render() {
    return (
      <div>
        <Head {...this.props} />
        <Route path="/" exact component={Admin} />
        <div className="container">
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/news" component={News} />
          <Route path="/sellandserver" component={SellAndServer} />
          <Route path="/human" component={Human} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
    )
  }
}
