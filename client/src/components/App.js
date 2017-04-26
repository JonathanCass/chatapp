import React, { Component } from 'react'
import { BrowserRouter as Router, Router, Route} from 'react-router-dom'
import Room from './Room'
import Login from './Login'
import './App.css'

class App extends Component {
  render() {
    return(
      <Router>
        <div className='app'>
          <Route exact={true} path='/' component={Login} />
          <Route path ='/room' component={Room} />
        </div>
      </Router> 
    )
  }
}

export default App