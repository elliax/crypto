import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import NumberFormat from 'react-number-format';
import { Tooltip } from '@material-ui/core';
import Invest from '../img/invest.png';


class Table extends Component {
    state = { 
        
     }
     
    render() { 
          
        let allCurrency = this.props.cryptoData;
        let posNeg = "change";
        function changeColor (value) {
            if (value < 0 ){
                posNeg = "change neg";
            
            }

            else {
                posNeg = "change pos";
            }
        }

        return (
            <React.Fragment>
        
          <table className="Table">
          <thead>
              
       <Tooltip title="Namnet på valutan." arrow placement="top">
              
              <th>Namn 
                  <FontAwesomeIcon icon={faQuestionCircle} /> 
                  </th>
</Tooltip>
                  
       <Tooltip title="Ett mätvärde som anger marknadsvärdet på en kryptovaluta. Marknadsvärdet representeras av: det nuvarande marknadspriset x cirkulerande utbud (totalt antal mynt på marknaden) = kryptovärdet." arrow placement="top">
                  
                <th>Börsvärde
                <FontAwesomeIcon icon={faQuestionCircle} /> 
                </th>
</Tooltip>
                
       <Tooltip title="Så mycket korstar det att köpa en enhet av valutan." arrow placement="top">
                
              <th>Pris (USD)
              <FontAwesomeIcon icon={faQuestionCircle} /> 
              </th>
</Tooltip>
              
       <Tooltip title="Volym är det som gör utbyte av pengar. Det är den totala mängden som byts ut under en viss tidsperiod." arrow placement="top">
              
              <th>Volym (24h)
              <FontAwesomeIcon icon={faQuestionCircle} /> 
              </th>
</Tooltip>
              
       <Tooltip title="Visar om en kryptovaluta har stigit eller sjunkit i värde." arrow placement="top">
              
              <th>Trend (24h)
              <FontAwesomeIcon icon={faQuestionCircle} /> 
              </th>
</Tooltip>
              
              <th></th>
          </thead>
          <tbody>
          
          {allCurrency.slice(0, 10).map(index =>(
                <tr className="row">
                    <td>{index.Name}</td>
                    <td><NumberFormat value={index.quotes.USD.market_cap} displayType={'text'} thousandSeparator={' '}/></td>
                    
                    <td><NumberFormat displayType={'text'} decimalScale={'2'} value={index.quotes.USD.price} prefix={'$'}></NumberFormat></td>
                    <td><NumberFormat value={index.quotes.USD.volume_24h} displayType={'text'} thousandSeparator={' '}/></td>
                    <td onChange={changeColor(index.quotes.USD.percentage_change_24h)} > 
                        <div >{index.quotes.USD.percentage_change_24h}%</div>
                    </td>
                    <td>
                        <Link className={`arrowLink`}  to={`/crypto/${index.Symbol}`}> 
                        <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </td>
                </tr>
              ))}
          
          </tbody>
          </table>
          
          
          </React.Fragment>
         );
    }
}
 
export default Table; 