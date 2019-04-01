import React, {Component} from 'react';
import SecurityPosition from "../view/SecurityPosition";

class SecurityPositionFunction extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            marketData: [],
        };
    }

    componentDidMount() {
        /*if (this.props.securityPositions !== undefined) {
            const response = fetch('http://localhost:8080/marketdata/quote/' + this.props.securityPositions.security.securityNumber);
            response
                .then(response => response.json())
                .then(response => {
                    this.setState({marketData : response});
                    console.log(response);
                });
        }*/
    }

    render() {
        return (
          <SecurityPosition securityPositions={this.props.securityPositions.first} marketData={this.props.securityPositions.second} index={this.props.index}/>
        );
      }
}

export default SecurityPositionFunction;