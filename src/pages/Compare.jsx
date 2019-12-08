import React, { Component } from 'react';

  import {
    PieChart, Pie, Legend, Tooltip,  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, 
  } from 'recharts';



class Compare extends Component {
    state = {  }
    render() { 
      let data = this.props.chartData.slice(0, 10);
        return ( 
          <div>
          <BarChart
        width={800}
        height={500}
        data={data}
        margin={{
          top: 5, right: 50, left: 20, bottom: 5,
        }}
      >
        
        <XAxis dataKey="Symbol" />
        <YAxis type="number" domain={[0, 'dataMax']} allowDataOverflow="true"/>
        <Tooltip />
        <Legend />
        <Bar dataKey="Circulating Supply" label="Symbol" fill="blue" />

      </BarChart>
      </div>
         );
    }
}
 
export default Compare;