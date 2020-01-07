import React, { Component } from 'react';
import '../components/Popup/popup.css';
import Popup from '../components/Popup/Popup';
import Stats from '../img/stats.png';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
class Compare extends Component {
    state = {  
     showPopup: false,
     popupContent: ''
    }

   

    popup = (name, id) => {
      this.setState({
        showPopup: true,
        popupContent: [name, id]
      })
      console.log(name);
      
    }
    render() { 
      
      let allCurrency = this.props.cryptoData;
        return ( 
          <div>
            <h1>Jämför kryptovalutor</h1>
            <p>Klicka på en valuta för att jämföra med det tre mest värdefulla valutorna.</p>
              {allCurrency.slice(0, 10).map(index =>(
            <img 
            className="coin compare" 
            src={require(`../img/coins/${index.Symbol}.png`)} 
            alt={index.Name}
            onClick={() => this.popup(index.Name, index.id)}/>
                
              ))}

               {
          this.state.showPopup? 
          <div className='popup'>  
          <div className='popupCon compareCon'> 
          <FontAwesomeIcon icon={faTimes} onClick={() =>this.setState({showPopup: false})} className="closeBtn"/> 
          <h1 className="cryptoName">{this.state.popupContent[0]}</h1>
          <table className="table pop">
            <thead>
              <th>Rank</th>
              <th>Namn</th>
              <th>Pris (USD)</th>
            </thead>
            <tbody>
              {allCurrency.slice((this.state.popupContent[1]-1), this.state.popupContent[1]).map(index => 
              <tr className="chosenCoin">
              <td>{index.rank}</td>
                <td>{index.Name}</td>
                <td>${index.quotes.USD.price}</td>
              </tr>
              
              
              )}
            
              {allCurrency.slice(0, 3).map(index => 
              <tr>
                <td>{index.rank}</td>
                <td>{index.Name}</td>
                <td>${index.quotes.USD.price}</td>
              </tr>
              
              
              )}

              
              
            </tbody>
          </table>
 

          <img className="illustration" src={Stats} alt="" />
          
          </div>  
      </div>    : null
        }
      </div>
         );
    }
}
 
export default Compare;