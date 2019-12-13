import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="content">
                <div className="box small">
                    <h1>Har du hört talas om kryptovalutor?</h1>
                    <p>
                    År 2008 skriver Satoshi Nakamoto koden som skapar Bitcoin. Bitcoin är den första och mest välkända kryptovalutan. Idag finns det över 2000 olika kryptovalutor.
                    </p>
                    <Link to='/about'>
                        <button className="cta-button">Lär dig mer!</button>
                    </Link>
                </div>
                <div className="box big">
                    <img src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80" alt="A golden bitcoin in front of a computerscreen with statistics "/>
                </div>
            </div>
         );
    }
}
 
export default Home;