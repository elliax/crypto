import React, { Component } from 'react';
import Table from "../components/Table";

class cryptoCurrencies extends Component {
    state = { 
        cryptoData:[] 
     }

    async componentDidMount(){
        const url = "https://my.api.mockaroo.com/cryptocurrency-data.json?key=8eb9e6f0";
        const response = await fetch(url);
        const data = await response.json();
     
        this.setState({cryptoData: data});
       }

    render() { 
        return ( 
            
            <Table allCurrency={this.state.cryptoData} />
        )
    }
}
 
export default cryptoCurrencies;