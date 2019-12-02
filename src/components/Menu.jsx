import React, { Component } from 'react';
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
                        <Link to='/about'>
                            <li>About</li>
                        </Link>
                        <Link to='/crypto'>
                            <li>Cryptocurrencies</li>
                        </Link>
                        <Link to='/about'>
                            <li>About</li>
                        </Link>
                        <Link to='/about'>
                            <li>About</li>
                        </Link>
                    </ul>
                    
                </div>
            </div>
        );
    }
}
 
export default Menu;