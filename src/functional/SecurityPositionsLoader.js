import React, {Component} from 'react';
import SecurityPositions from "../view/SecurityPositions";

class SecurityPositionsLoader extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          securityPositions: [],
        };
    }

    componentDidMount() {
        return fetch('http://localhost:8080/marketdata/quotes')
            .then(response => response.json())
            .then(response => {
                this.setState({securityPositions : response});
                });
    }

    render() {
        return (
          <SecurityPositions data={this.state.securityPositions}/>
        );
      }
}

export default SecurityPositionsLoader;