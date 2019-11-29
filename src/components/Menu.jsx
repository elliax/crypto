import React, { Component } from 'react';

class Menu extends Component {
    state = {  }
    render() { 
        return (
            <div className="header">
            <h1>CryptoMate</h1> 
                <div className="Menu">
                    
                    <a href="#">Learn more</a>
                    <a href="#">Your coins</a>
                    <a href="#">Chosen coins</a>
                    <a href="#">Comparison</a>
                    
                </div>
            </div>
        );
    }
}
 
export default Menu;