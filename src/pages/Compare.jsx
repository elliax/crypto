import React, { Component } from 'react';

  import {
    LineChart, Line, PieChart, Pie, Legend, Tooltip,  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, 
  } from 'recharts';


class Compare extends Component {
    state = {  }
    render() { 
      let chartData = this.props.chartData.slice(0, 10);  
      let series = [
        {
          name: "USD",
          data: []
        }
      ];
      chartData.map(data =>
        series[0].data.push({
          Symbol: data.Symbol,
          Price: parseFloat(data.quotes.USD.price),
          Supply: parseInt(data.total_supply),
          Max: parseInt(data.max_supply)
        })
      )

      console.log(series[0]);

        return ( 
          <div>
         <h1>Jämför de 10 mest populära kryptovalutorna!</h1>
          <div className="box medium">
            <h2>Pris i USD</h2>
         <p>När du tittar på det här diagrammet så ser du att en Bitcoin är värd mycket, mycket mer än många andta kryptovalutor.</p>
            
              <BarChart
                width={800}
                height={500}
                data={series[0].data}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="" />
                <XAxis dataKey="Symbol" />
                <YAxis type="number" domain={[0, 8500]}  allowDataOverflow="true" interval="preseveStart"/>
                <Tooltip />
                <Legend />
                <Bar dataKey="Price" name="Pris" fill="#f7578e" />
              </BarChart>

                <p>Här ser du samma diagram som ovan, fast mycket mer inzoomad. Därför är värdet på Bitcoin långt över vart diagrammet slutar här.</p>
               <BarChart
                width={800}
                height={500}
                data={series[0].data}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="" />
                <XAxis dataKey="Symbol" />
                <YAxis type="number" domain={[0, 250]}  allowDataOverflow="true" interval="preseveStart"/>
                <Tooltip />
                <Legend />
                <Bar dataKey="Price" name="Pris" fill="#f7578e" />
              </BarChart>
          </div>

      </div>
         );
    }
}
 
export default Compare;