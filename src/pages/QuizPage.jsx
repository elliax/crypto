import React, { Component } from 'react';
import Quiz from '../components/Quiz/Quiz';
import Popup from '../components/Popup/Popup';

class QuizPage extends Component {
    state = { 
        showPopup: true
     }

     togglePopup() {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
         }  

    render() { 
       
            return (  
                <div>
                    <Quiz/>

                {this.state.showPopup ?  
                <Popup   
                 closePopup={this.togglePopup.bind(this)}  
                />  
                : null  
                }  

                
                </div>
            );
        

       
        
    }
}
 
export default QuizPage;