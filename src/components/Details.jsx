import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Table extends Component {
    state = { 
        
     }
    render() { 
        let thisCurrency = this.props.allCurrency;
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
              <th></th>
              <th>Rank</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>USD Price</th>
              <th>Change 24h</th>
              <th></th>
          </thead>
          <tbody>
          
          {thisCurrency.map(index =>(
                <tr className="row">
                    <td><img src="https://cryptorunner.com/sv/wp-content/uploads/sites/2/2017/05/bitcoin-symbol.png" alt=""/></td>
                    <td>{index.rank}</td>
                    <td>{index.Name}</td>
                    <td>{index.Symbol}</td>
                    <td>${index.quotes.USD.price}</td>
                    <td onChange={changeColor(index.quotes.USD.percentage_change_24h)} >
                        <div className={posNeg}>{index.quotes.USD.percentage_change_24h}%</div>
                    </td>
                    <td>
                        <Link to={`/crypto/${index.Symbol}`}> 
                            --> 
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