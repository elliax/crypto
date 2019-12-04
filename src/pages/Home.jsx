import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="content">
                <div className="box small">
                    <h1>What is cryptocurrencies and how are they used? Let's find out!</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, 
                        mollitia esse! Esse nobis voluptas totam fugit quo neque similique? 
                        Blanditiis reprehenderit numquam similique placeat vero obcaecati quae 
                        quasi rerum voluptatibus?
                    </p>
                    <Link to='/about'>
                        <button className="cta-button">Let's get started</button>
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