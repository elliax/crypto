import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import NumberFormat from 'react-number-format';


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
              
              
              <th>Namn 
                  <FontAwesomeIcon icon={faQuestionCircle} /> 
                  </th>
                <th>Börsvärde
                <FontAwesomeIcon icon={faQuestionCircle} /> 
                </th>
              <th>Pris (USD)
              <FontAwesomeIcon icon={faQuestionCircle} /> 
              </th>
              <th>Volym (24h)
              <FontAwesomeIcon icon={faQuestionCircle} /> 
              </th>
              <th>Trend (24h)
              <FontAwesomeIcon icon={faQuestionCircle} /> 
              </th>
              <th></th>
          </thead>
          <tbody>
          
          {allCurrency.slice(0, 10).map(index =>(
                <tr className="row">
                    <td>{index.Name}</td>
                    <td><NumberFormat value={index.quotes.USD.market_cap} displayType={'text'} thousandSeparator={' '}/></td>
                    
                    <td>${index.quotes.USD.price}</td>
                    <td><NumberFormat value={index.quotes.USD.volume_24h} displayType={'text'} thousandSeparator={' '}/></td>
                    <td onChange={changeColor(index.quotes.USD.percentage_change_24h)} > 
                        <div className={posNeg}>{index.quotes.USD.percentage_change_24h}%</div>
                    </td>
                    <td>
                        <Link className="arrowLink"  to={`/crypto/${index.Symbol}`}> 
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