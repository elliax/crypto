import React, { Component } from 'react';
import './popup.css';
import QuizImg from '../../img/quiz.png';

class Popup extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='popup'>  
                <div className='popupCon'>  
                    <h1>Välkommen till quizet!</h1>  
                    <p>Känner du dig redo att testa dina kunskaper om kryptovalutor?</p>
                    <button className="quizBtn" onClick={this.props.closePopup}>Starta Quizet!</button> 
                    <img className="QuizImg" src={QuizImg} alt=""/> 
                </div>  
            </div>  
         );
    }
}
 
export default Popup;