import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Index from './page/index'
import './App.scss'
function App() {
  return (
    <Router>
      <Route path="/" component={Index}></Route>
    </Router>
  )
}

export default App
