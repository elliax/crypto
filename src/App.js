import React, { Component } from 'react';
import Table from "./components/Table";
import Menu from "./components/Menu";
import './style.css';

class App extends Component {
  state = { 
    cryptoData: []
   };

  async componentDidMount(){
    {
      const url = "https://my.api.mockaroo.com/cryptocurrency-data.json?key=8eb9e6f0";
      const response = await fetch(url);
      const data = await response.json();
 
      this.setState({cryptoData: data});

      
   }
  }

  render() { 
    return (
      <div className="App">
        <Menu/>
        <Table 
      allCurrency={this.state.cryptoData} />
      </div>
    );
  }
}
 
export default App;