import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import SinglePage from './Pages/SinglePage'

const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route export path="/Details/:id" component={SinglePage}/>
      </Switch>
    </Router>
    </>
  )
}

export default App
