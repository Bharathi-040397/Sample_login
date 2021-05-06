import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Welcome from './Welcome';
import Menu from './Menu';
import Employee from './Employee'
import Register from './Register'


function App() {
    return (
        <div className="App">
            <Menu/>
            <Switch>
                <Route path='/' exact component={Welcome}/>
                <Route path='/employee' exact component={Employee}/>
                <Route path='/register' exact component={Register}/>
          </Switch>
        </div>
    )
}

export default App