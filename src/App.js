import React, { Component } from 'react';
import Table from "./components/Table";
import Menu from "./components/Menu";
import './style.css';
import About from './pages/About';
import Home from './pages/Home';
import cryptoCurrencies from './pages/cryptocurrencies';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import cryptoDetails from './pages/cryptoDetails';
import Loader from './components/Loader/Loader';
import Compare from './pages/Compare';
import QuizPage from './pages/QuizPage';



console.clear();
class App extends Component {
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
    <Router>
      <div className="App">
        <Menu/> 
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        
        <Route 
          path="/crypto" exact 
          render={props => (
            <Table {...props} cryptoData={this.state.cryptoData} />
          )}/>

        <Route 
          path="/compare" 
          render={props => (
            <Compare {...props} cryptoData={this.state.cryptoData} />
          )}/>
        <Route path="/crypto/:Symbol" component={cryptoDetails}/>
        
        <Route path="/quiz" component={QuizPage}/>
        
        </Switch>
        
          
      </div>
    </Router> );
    
  }
  
}

 
export default App;
