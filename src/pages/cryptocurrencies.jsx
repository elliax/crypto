import React, { Component } from 'react';
import Table from "../components/Table";
import Loader from '../components/Loader/Loader';

class cryptoCurrencies extends Component {
    state = { 
        cryptoData:[],
        loading: true
     }

    async componentDidMount(){
        const url = "https://my.api.mockaroo.com/cryptocurrency-data.json?key=8eb9e6f0";
        const response = await fetch(url);
        const data = await response.json();
     
        this.setState({cryptoData: data});
        this.setState({loading: false});
       }

    render() { 
        if (this.state.loading) return <Loader/>

        return ( 
            <Table allCurrency={this.state.cryptoData} />
        )
    }
}
 
export default cryptoCurrencies;