import React, {Component} from 'react';
import SecurityPositions from "../view/SecurityPositions";

class SecurityPositionsLoader extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          securityPositions: null,
        };
    }

    componentDidMount() {
        return fetch('http://localhost:8080/rest/list')
            .then(response => response.json())
            .then(response => {
                this.setState({securityPositions : response[0]});
                window.dataVar = response[0];
                });
    }

    render() {
        return (
          <SecurityPositions data={this.state.securityPositions}/>
        );
      }
}

export default SecurityPositionsLoader;