import React, {Component} from 'react';
import SecurityPositions from "../view/SecurityPositions";
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

class SecurityPositionsLoader extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          securityPositions: [],
          marketData: [],
          coba: []
        };
    }

    async componentDidMount() {
      const request = interval(20000).pipe( 
        startWith(0), 
        switchMap(() => 
          fetch('http://localhost:8080/marketdata/quotes')
          .then(response => response.json())
        ));
  
      request.subscribe((data) => { 
        this.setState({marketData : data});
      })

      fetch('http://localhost:8080/account/list/')
        .then(response => response.json())
        .then(response => {
          this.setState({securityPositions : response});
        });
    }

    render() {
        return (
          <SecurityPositions data={this.state.securityPositions} marketData={this.state.marketData}/>
        );
      }
}

export default SecurityPositionsLoader;