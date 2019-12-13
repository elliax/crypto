import React, { Component } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';


class Chart extends Component {
    state = {  }

    render() { 
      let thisCurrency = this.props.thisCurrency;
console.log(thisCurrency);

let series = [
  {
    name: "USD",
    data: []
  }
];

thisCurrency[0].quotes.percentage_change_12m.map(data =>
  series[0].data.push({
    Month: parseInt(data.month),
    Change: parseFloat(data.month_change)
  })
  
)


console.log(series[0].data);

        return ( 
          <LineChart
          width={500}
          height={300}
          data={series[0].data}
          
        >
          <CartesianGrid />
          <XAxis dataKey="Month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Change" stroke="#ff5da9" activeDot={{ r: 8 }} />
        </LineChart>
         );
    }
}
 
export default Chart;