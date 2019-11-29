import React, { Component } from 'react';
class Table extends Component {
    state = {  }
    render() { 
        let allCurrency = this.props.allCurrency;
        return (
            <React.Fragment>
          <table className=" Table ui single line table">
          <thead>
              <th>Rank</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>USD Price</th>
          </thead>
          <tbody>
          
          {allCurrency.slice(0, 10).map(index =>(
                <tr>
                    <td>{index.rank}</td>
                    <td>{index.Name}</td>
                    <td>{index.Symbol}</td>
                    <td>${index.quotes.USD.price}</td>
                </tr>
              ))}
          
          </tbody>
          </table>
          </React.Fragment>
         );
    }
}
 
export default Table; 