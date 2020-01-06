import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Chart from './Chart';
import NumberFormat from 'react-number-format';
import { Tooltip } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

class Table extends Component {
state = {

}

render() {

let posNeg = "change";
function changeColor (value) {
if (value < 0 ){ posNeg="change neg detail" ; } else { posNeg="change pos detail" ; } } let
    thisCurrency=this.props.thisCurrency; return ( <React.Fragment>
    <Link to='/crypto'>
    <button className="tillbaka">
        <FontAwesomeIcon icon={faArrowLeft} />
        Tillbaka till Valutor
    </button>
    </Link>
    <div className="content">

        {thisCurrency.map(index =>(
       
        <div className="box medium">
            <h1 className="cryptoName">{index.Name}</h1>
            <p>{index.Symbol}</p>

            <h2>Valutans förändring de senaste 12 månaderna:</h2>
            <Chart thisCurrency={thisCurrency} />
        </div>
        ))}

        {thisCurrency.map(index =>(
        <div className="box medium highlight">
            <img className="coin" src={require(`../img/coins/${index.Symbol}.png`)} alt="" />
            <table className="detailsTable">
                <tbody>
                    <tr>
                        <Tooltip title="Lorem Ipsum Dolor Sit Amet" arrow placement="left">

                            <td>
                                <FontAwesomeIcon icon={faQuestionCircle} /> Förändring (24h): </td>


                        </Tooltip>
                        <td onChange={changeColor(index.quotes.USD.percentage_change_24h)}>
                            <div className={posNeg}>{index.quotes.USD.percentage_change_24h}%</div>
                        </td>
                    </tr>
                    <tr>
                        <Tooltip title="Lorem Ipsum Dolor Sit Amet" arrow placement="left">

                            <td>
                                <FontAwesomeIcon icon={faQuestionCircle} /> Pris:</td>
                        </Tooltip>

                        <td>
                            <NumberFormat value={index.quotes.USD.price} prefix={'$'} displayType={'text'}
                                decimalScale={3} />
                        </td>
                    </tr>
                    <tr>
                        <Tooltip title="Lorem Ipsum Dolor Sit Amet" arrow placement="left">

                            <td>
                                <FontAwesomeIcon icon={faQuestionCircle} /> Börsvärde:</td>
                        </Tooltip>

                        <td>
                            <NumberFormat value={index.quotes.USD.market_cap} displayType={'text'} thousandSeparator={' '}/></td>
                        </tr>
                        <tr>
                     <Tooltip title="Lorem Ipsum Dolor Sit Amet" arrow placement="left">
                            
                             <td><FontAwesomeIcon icon={faQuestionCircle} />  Volym (24h):</td>
                    </Tooltip>
                             
                             <td><NumberFormat value={index.quotes.USD.volume_24h} displayType={'text'}
                                thousandSeparator={' '}/></td>
                              
                        </tr>
                        <tr>
                     <Tooltip title="Lorem Ipsum Dolor Sit Amet" arrow placement="left">
                            
                             <td><FontAwesomeIcon icon={faQuestionCircle} />  Utbud:</td>
                    </Tooltip>
                             
                             <td><NumberFormat value={index.total_supply} displayType={'text'} thousandSeparator={' '}/></td>
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