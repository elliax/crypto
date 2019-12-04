import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Menu extends Component {
    state = {  }

    render() { 

        return (
            <div className="header">
            <Link to='/'>
                <h1>CryptoMate</h1>
            </Link>
                <div className="Menu">
                    
                    <ul>
                        <NavLink  className="link" activeClassName="active" to='/about'>
                            <li>Learn more</li>
                        </NavLink>
                        <NavLink  className="link" activeClassName="active" to='/crypto'>
                            <li>Cryptocurrencies</li>
                        </NavLink>
                    </ul>
                    
                </div>
            </div>
        );
    }
}
 
export default Menu;