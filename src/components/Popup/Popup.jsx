import React, { Component } from 'react';
import './popup.css';

class Popup extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='popup'>  
                <div className='popupCon'>  
                    <h1>Welcome to the quiz!</h1>  
                    <button onClick={this.props.closePopup}>Start Quiz!</button>  
                </div>  
            </div>  
         );
    }
}
 
export default Popup;