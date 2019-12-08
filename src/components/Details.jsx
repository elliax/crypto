import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Chart from './Chart';
class Table extends Component {
    state = { 
        
     }
    render() { 
        let thisCurrency = this.props.thisCurrency;
        let posNeg = "change";
        function changeColor (value) {
            if (value < 0 ){
                posNeg = "change neg detail";
            
            }

            else {
                posNeg = "change pos detail";
            }
        }
 
        
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
                  <p onChange={changeColor(index.quotes.USD.percentage_change_24h)} >Trend 24h:
                        <div className={posNeg}>{index.quotes.USD.percentage_change_24h}%</div>
                    </p>
                    <p>Price: ${index.quotes.USD.price}</p>
                    <p>Market Cap: {index.quotes.USD.market_cap}</p>
                    <p>Volume 24h: {index.quotes.USD.volume_24h}</p>
                    <p>Total Supply: {index.total_supply}</p>
                    
                </div>
              ))}
              <div className="box medium">
              <Chart chartData={thisCurrency}/>
              </div>
              
           <div className="box small">
                  <h2>compare</h2>
                </div>
                </div>
          
              
          </React.Fragment>
         );
    }
}
 
export default Table; 