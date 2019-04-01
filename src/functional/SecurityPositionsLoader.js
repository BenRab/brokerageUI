import React, {Component} from 'react';
import SecurityPositions from "../view/SecurityPositions";
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

class SecurityPositionsLoader extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          securityPositions: [],
        };
    }

    async componentDidMount() {
      const request = interval(15000).pipe( 
        startWith(0), 
        switchMap(() => 
          fetch('http://localhost:8080/marketdata/quotes')
          .then(response => response.json())
        ));
  
      request.subscribe((data) => { 
        this.setState({securityPositions : data});
      })
    }

    render() {
        return (
          <SecurityPositions data={this.state.securityPositions}/>
        );
      }
}

export default SecurityPositionsLoader;