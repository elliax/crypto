import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Chart from './Chart';
class Table extends Component {
    state = { 
        
     }
    render() { 
        
        let posNeg = "change";
        function changeColor (value) {
            if (value < 0 ){
                posNeg = "change neg detail";
            
            }

            else {
                posNeg = "change pos detail";
            }
        }
        
        let thisCurrency = this.props.thisCurrency;

        return (
            <React.Fragment>
                <div className="content">
                 {thisCurrency.map(index =>(
                 <div className="box medium">
                    <h1>{index.Name}</h1>
                    <p>{index.Symbol}</p>
                    <p>{index.description}</p>
                </div>
              ))}

                 {thisCurrency.map(index =>(
                 <div className="box medium highlight">
                  <p onChange={changeColor(index.quotes.USD.percentage_change_24h)} >
                        <div className={posNeg}>{index.quotes.USD.percentage_change_24h}%</div>
                    </p>
                 <table>
                     <tbody>
                         <tr>
                             <td>Price:</td>
                             <td>${index.quotes.USD.price}</td>
                        </tr>
                        <tr>
                             <td>Market Cap:</td>
                             <td>{index.quotes.USD.market_cap}</td>
                        </tr>
                        <tr>
                             <td>Volume 24h:</td>
                             <td>{index.quotes.USD.volume_24h}</td>
                        </tr>
                        <tr>
                             <td>Total Supply:</td>
                             <td>{index.total_supply}</td>
                        </tr>

                     </tbody>
                 </table>
                 
             
                    
                </div>
              ))}
              <div className="box medium">
              <Chart thisCurrency={this.props.thisCurrency}/>
              </div>
              
           <div className="box small">
                  
                </div>
                </div>
          
              
          </React.Fragment>
         );
    }
}
 
export default Table; 