import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
import logo from '../img/LoggaCryptoMate.png';
import logoLong from '../img/Logga2CryptoMate.png';
class Menu extends Component {
    state = {  }

    render() { 

        return (
            <div className="header">
            <Link to='/'>
               <img className="logo" src={logo} alt=""/>
               <img className="logo" src={logoLong} alt=""/>  
            </Link>
                <div className="Menu">
                    
                    <ul>
                        <NavLink  className="link" activeClassName="active" to='/about'>
                            <li>Learn more</li>
                        </NavLink>
                        <NavLink  className="link" activeClassName="active" to='/crypto'>
                            <li>Cryptocurrencies</li>
                        </NavLink>
                        <NavLink  className="link" activeClassName="active" to='/quiz'>
                            <li>Quiz</li>
                        </NavLink>
                    </ul>
                    
                </div>
            </div>
        );
    }
}
 
export default Menu;