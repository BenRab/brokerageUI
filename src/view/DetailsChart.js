import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from "recharts";
import React, {Component} from 'react';
import ReactLoading from 'react-loading';

class DetailsChart extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          marketData: [],
          loading: true,
        };
    }

    async componentDidMount() {
        const request = fetch('http://localhost:8080/marketdata/chart/' + this.props.wkn + '/' + this.props.market)
            .then(response => response.json());
    
        request.then((data) => {
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
            this.setState({marketData : resultArray, loading: false});
        })
      }
	render () {
        if (this.state.loading) {
            return <ReactLoading type="spin" color={'#000'} height={'16%'} width={'16%'} />
        }
        return (
            <LineChart width={600} height={300} data={this.state.marketData}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="time"/>
            <YAxis domain={['auto', 'auto']} />
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Line type="monotone" dataKey="val" stroke="#8884d8" activeDot={false} dot={false}/>
            </LineChart>
        );
  }
}

export default DetailsChart;
