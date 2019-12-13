import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
              
              
              <th>Namn</th>
              <th>Börsvärde</th> 
              <th>Pris (USD)</th>
              <th>Volym (24h)</th>
              <th>Trend (24h)</th>
              <th></th>
          </thead>
          <tbody>
          
          {allCurrency.slice(0, 10).map(index =>(
                <tr className="row">
                    <td>{index.Name}</td>
                    <td>{index.quotes.USD.market_cap}</td>
                    
                    <td>${index.quotes.USD.price}</td>
                    <td>{index.quotes.USD.volume_24h}</td>
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