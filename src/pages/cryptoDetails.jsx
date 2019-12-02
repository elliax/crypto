import React, { Component } from 'react';
import Details from '../components/Details';

class cryptoDetails extends Component {
    state = { 
        cryptoData: []
     }

    async componentDidMount(){

        const symbol = this.props.match.params.Symbol;
        
        const url = `https://my.api.mockaroo.com/cryptocurrency-data.json?key=8eb9e6f0`;
        const response = await fetch(url);
        const data = await response.json();
     
        

        const filtered = data.filter(a=>a.Symbol===symbol);

        this.setState({crypto: filtered});

        console.log(filtered);
       }
       
    render() { 
        return (
           
           
           <h1>Details</h1>

          );
    }
}
 
export default cryptoDetails;