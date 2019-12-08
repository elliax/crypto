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
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="rank" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Name" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
         );
    }
}
 
export default Chart;