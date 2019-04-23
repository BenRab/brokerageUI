import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from "recharts";
import React, {Component} from 'react';
import ReactLoading from 'react-loading';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

class DetailsChart extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          marketData: [],
          loading: true,
          date: "1D",
          loadingChart: false,
        };
    }

    handleChartDateChange(inputDate) {
        this.requestData(inputDate);
    }

    requestData(inputDate) {
        this.setState({loadingChart : true});
        const request = fetch('http://localhost:8080/marketdata/chart/' + this.props.wkn + '/' + this.props.market + '/' + inputDate)
            .then(response => response.json());
    
        request.then((data) => {
            const timeArray = data[0].Time;
            const valueArray = data[0].Value;
            var resultArray = [];
            for (var i = 0; i < timeArray.length; i++) {
                var formattedTime = '';
                const date = new Date(timeArray[i]*1000);
                const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

                if (inputDate === '1D') {
                    // Hours part from the timestamp
                    var hours = date.getHours();
                    // Minutes part from the timestamp
                    var minutes = "0" + date.getMinutes();
                    // Seconds part from the timestamp
                    var seconds = "0" + date.getSeconds();
    
                    // Will display time in 10:30:23 format
                    formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                }
                else if (inputDate === '5D') {
                    var day = date.getDay();
                    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];    
                    formattedTime = weekdays[day];
                }
                else if (inputDate === '1M') {
                    var appendix = 'th';
                    const day = date.getDate();
                    if (day === 1) {
                        appendix = 'st';
                    } else if (day === 2) {
                        appendix = 'nd';
                    } else if (day === 3) {
                        appendix = 'rd';
                    }
                    formattedTime =  day + appendix;
                }
                else if (inputDate === '1Y' || inputDate === '6M') {
                    var appendixYear = 'th';
                    const day = date.getDate();
                    if (day === 1) {
                        appendixYear = 'st';
                    } else if (day === 2) {
                        appendixYear = 'nd';
                    } else if (day === 3) {
                        appendixYear = 'rd';
                    }
                    const month = date.getMonth();
                    formattedTime =  months[month] + ' ' + day + appendixYear;
                }
                else if (inputDate === '5Y') {
                    const year = date.getFullYear();
                    const month = date.getMonth();
                    formattedTime =  months[month] + ' ' + year;
                }

                resultArray.push({time: formattedTime, val: valueArray[i]})
            }
            this.setState({marketData : resultArray, loading: false, date: inputDate});
        })
        this.setState({loadingChart : false});
    }

    async componentDidMount() {
        this.requestData("1D")
    }

	render () {
        if (this.state.loading) {
            return <ReactLoading type="spin" color={'#000'} height={'16%'} width={'16%'} />
        }
        return (
            <div>

                <LineChart width={700} height={320} data={this.state.marketData}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="time"/>
                    <YAxis domain={['auto', 'auto']} />
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Line type="monotone" dataKey="val" stroke="#8884d8" activeDot={false} dot={false}/>
                </LineChart>
                <div align="center">
                    <ButtonGroup aria-label="Basic example">
                        <Button disabled={this.state.loadingChart} 
                            onClick={() => this.handleChartDateChange("1D")} variant={this.state.date === '1D' ? 'primary' : 'light'}>Intraday</Button>
                        <Button disabled={this.state.loadingChart} 
                            onClick={() => this.handleChartDateChange("5D")} variant={this.state.date === '5D' ? 'primary' : 'light'}>Week</Button>
                        <Button disabled={this.state.loadingChart} 
                            onClick={() => this.handleChartDateChange("1M")} variant={this.state.date === '1M' ? 'primary' : 'light'}>Month</Button>
                        <Button disabled={this.state.loadingChart} 
                            onClick={() => this.handleChartDateChange("6M")} variant={this.state.date === '6M' ? 'primary' : 'light'}>6 Months</Button>
                        <Button disabled={this.state.loadingChart} 
                            onClick={() => this.handleChartDateChange("1Y")} variant={this.state.date === '1Y' ? 'primary' : 'light'}>Year</Button>
                        <Button disabled={this.state.loadingChart} 
                            onClick={() => this.handleChartDateChange("5Y")} variant={this.state.date === '5Y' ? 'primary' : 'light'}>5 years</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
  }
}

export default DetailsChart;
