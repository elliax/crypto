import React, { Component } from 'react';
import './popup.css';

class Popup extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='popup'>  
                <div className='popupCon'>  
                    <h1>Välkommen till quizet!</h1>  
                    <p>Känner du dig redo att testa dina kunskaper om kryptovalutor?</p>
                    <button className="quizBtn" onClick={this.props.closePopup}>Starta Quizet!</button>  
                </div>  
            </div>  
         );
    }
}
 
export default Popup;