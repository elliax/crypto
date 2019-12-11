import React, { Component } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';


class Chart extends Component {
    state = {  }

    render() { 

        return ( 
          <LineChart
          width={500}
          height={300}
          data={this.state.thisCurrency}
          
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="Name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total_supply" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
         );
    }
}
 
export default Chart;