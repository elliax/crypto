import React, { Component } from 'react';
import './loader.css';

class Loader extends Component {
    state = {  }
    render() { 
        return (  
            <div className="container">
                <div className="item-1"><div></div></div>
                <div className="item-2"><div></div></div>
                <div className="item-3"><div></div></div>
                <div className="item-4"><div></div></div>
                <div className="item-5"><div></div></div>
                <div className="item-6"><div></div></div>
                <div className="item-7"><div></div></div>
                <div className="item-8"><div></div></div>
                <div className="item-9"><div></div></div>
                <div className="item-10"><div></div></div>
            </div>
        );
    }
}
 
export default Loader;