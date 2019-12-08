import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import courseNav from '../components/Course/courseNav';


class Course extends Component {
    state = {  }
    render() { 
        return (  
            <div>
               <courseNav/>

                <div className="courseCon">

                </div>
            </div>
        );
    }
}
 
export default Course;