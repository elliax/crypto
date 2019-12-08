import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

class courseNav extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="courseNav">
            <NavLink  className="courseLink" activeClassName="active" to='/step1'>
                <li>Learn more</li>
            </NavLink>
            <NavLink  className="courseLink" activeClassName="active" to='/'>
                <li>Learn more</li>
            </NavLink>
    </div>
         );
    }
}
 
export default courseNav;