import React, { Component } from 'react';
import Table from "./components/Table";
import Menu from "./components/Menu";
import './style.css';
import About from './pages/About';
import Home from './pages/Home';
import cryptoCurrencies from './pages/cryptocurrencies';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import cryptoDetails from './pages/cryptoDetails';


class App extends Component {
  state = {  }
  render() { 
    return (  
    <Router>
      <div className="App">
        <Menu/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/crypto" exact component={cryptoCurrencies}/>
        <Route path="/crypto/:Symbol" component={cryptoDetails}/>
        
        </Switch>
        
    
      </div>
    </Router> );
  }
}
 
export default App;
