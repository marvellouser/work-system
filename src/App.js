import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
function A() {
  return <h1>组件A</h1>
}

function B() {
  return <h1>组件B</h1>
}
function App() {
  return (
    <Router>
      <Route path="/" exact component={A} />
      <Route path="/B" component={B} />
      <div>11111</div>
    </Router>
  )
}

export default App
