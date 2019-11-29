import React, { Component } from 'react';
import Table from "./components/Table";
import Menu from "./components/Menu";
import './style.css';
import About from './components/About';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
      <Router>
        <div className="App">
          <Menu allCurrency={this.state.cryptoData}/>
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          
          
          </Switch>
          <Table allCurrency={this.state.cryptoData} />
      
        </div>
      </Router>
    );
  }
}
 
export default App;