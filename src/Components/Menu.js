import React from 'react'
import {NavLink} from 'react-router-dom'

function Menu() {
    return (
      
             <div className="Menu">
                <div className="Menu__back">
                <NavLink to="/">
                <img src="../recycle.png" alt="LoGo"/>
                </NavLink>
                </div>
                <div className="Menu__main">
                <NavLink to="/employee">
                  <h5>Employees</h5>
                </NavLink>
                <NavLink to="/register">
                    <h5>Register</h5>
                </NavLink>
                </div>
             </div>
    )
}

export default Menu
