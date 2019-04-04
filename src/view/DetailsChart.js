import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import React, {Component} from 'react';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
class DetailsChart extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          marketData: [],
        };
    }

    async componentDidMount() {
        const request = interval(90000).pipe( 
          startWith(0), 
          switchMap(() => 
          fetch('http://localhost:8080/marketdata/chart/' + this.props.wkn + '/' + this.props.market)
            .then(response => response.json())
        ));
    
        request.subscribe((data) => {
            console.log(data);
            const timeArray = data[0].Time;
            const valueArray = data[0].Value;
            var resultArray = [];
            for (var i = 0; i < timeArray.length; i++) {
                var date = new Date(timeArray[i]*1000);
                // Hours part from the timestamp
                var hours = date.getHours();
                // Minutes part from the timestamp
                var minutes = "0" + date.getMinutes();
                // Seconds part from the timestamp
                var seconds = "0" + date.getSeconds();

                // Will display time in 10:30:23 format
                var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                resultArray.push({time: formattedTime, val: valueArray[i]})
            }
            this.setState({marketData : resultArray});
        })
      }
	render () {
        return (
            <LineChart width={600} height={300} data={this.state.marketData}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="time"/>
            <YAxis domain={['auto', 'auto']} />
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Line type="monotone" dataKey="val" stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
        );
  }
}

export default DetailsChart;
