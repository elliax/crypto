import React, { Component } from 'react';
import Details from '../components/Details';
import Loader from '../components/Loader';

class cryptoDetails extends Component {
    state = { 
        cryptoDetails: [],
        loading: true
     }

    async componentDidMount(){

        const symbol = this.props.match.params.Symbol;
        
        const url = `https://my.api.mockaroo.com/cryptocurrency-data.json?key=8eb9e6f0`;
        const response = await fetch(url);
        const data = await response.json();
     
        

        const filtered = data.filter(a=>a.Symbol===symbol);

        this.setState({cryptoDetails: filtered});
        this.setState({loading: false});
       
       }
       
    render() { 
        if (this.state.loading) return <Loader/>
        return (
           
           
           <Details thisCurrency={this.state.cryptoDetails}/>

          );
    }
}
 
export default cryptoDetails;