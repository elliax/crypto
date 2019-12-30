import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
//import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
              
              
          <Tooltip arrow placement="top" title="Lorem Ipsum" interactive >
              <th>Namn 
                  <FontAwesomeIcon icon={faQuestionCircle} /> 
                  </th>
              </Tooltip>
              <Tooltip  arrow placement="top" title="Ett mätvärde som anger marknadsvärdet på en kryptovaluta. Marknadsvärdet representeras av: det nuvarande marknadspriset x cirkulerande utbud (totalt antal mynt på marknaden) = kryptovärdet."  >
                <th>Börsvärde
                <FontAwesomeIcon icon={faQuestionCircle} /> 
                </th>
              </Tooltip>

              <Tooltip arrow placement="top" title="Lorem Ipsum"  >
              <th>Pris (USD)
              <FontAwesomeIcon icon={faQuestionCircle} /> 
              </th>
              </Tooltip>
              <Tooltip arrow placement="top" title="Lorem Ipsum"  >              
              <th>Volym (24h)
              <FontAwesomeIcon icon={faQuestionCircle} /> 
              </th>
              </Tooltip>
              <Tooltip arrow placement="top" title="Lorem Ipsum"  >                            
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