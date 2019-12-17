import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import avatar from '../img/AvatarCM.png';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="content">
                <div className="box medium">
                    <h1>Vill du få ditt studiebidrag som en kryptovaluta?</h1>
                    <p>
                    Använder du kontanter eller Swish idag? Har du alla dina pengar på ett konto och betalar med kort? Isåfall är steget till kryptovaluta inte så långt. Många affärer och företag tar idag emot kryptovalutor som betalning, och det är lätt att växla till sig kryptovalutor på internet.
                    <br/><br/>
                    År 2008 skrev Satoshi Nakamoto koden som skapade Bitcoin. Bitcoin är den första och mest välkända kryptovalutan. Idag finns det över 2000 olika kryptovalutor.
                    </p>
                    <Link to='/about'>
                        <button className="cta-button">Lär dig mer!</button>
                    </Link>
                </div>
                <div className="box medium">
                    <img src={avatar} alt=""/>
                </div>
            </div>
         );
    }
}
 
export default Home;