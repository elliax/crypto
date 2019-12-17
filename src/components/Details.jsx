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
                    <h1 className="cryptoName">{index.Name}</h1>
                    <p>{index.Symbol}</p>
                    <h2>Valutans förändring de senaste 12 månaderna:</h2>
              <Chart thisCurrency={thisCurrency}/>
                </div>
              ))}

                 {thisCurrency.map(index =>(
                 <div className="box medium highlight">
                 <table className="detailsTable">
                     <tbody>
                     <tr>
                             <td>Förändring (24h):</td>
                             <td onChange={changeColor(index.quotes.USD.percentage_change_24h)}>
                        <div className={posNeg}>{index.quotes.USD.percentage_change_24h}%</div>
                             </td>
                        </tr>
                         <tr>
                             <td>Pris:</td>
                             <td>${index.quotes.USD.price}</td>
                        </tr>
                        <tr>
                             <td>Börsvärde:</td>
                             <td>{index.quotes.USD.market_cap}</td>
                        </tr>
                        <tr>
                             <td>Volym (24h):</td>
                             <td>{index.quotes.USD.volume_24h}</td>
                        </tr>
                        <tr>
                             <td>Utbud:</td>
                             <td>{index.total_supply}</td>
                        </tr>

                     </tbody>
                 </table>
                 
             
                    
                </div>
              ))}
         
                </div>
          
              
          </React.Fragment>
         );
    }
}
 
export default Table; 