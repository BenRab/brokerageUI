import React, {Component} from 'react';
import SecurityPositions from "../view/SecurityPositions";
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import ReactLoading from 'react-loading';
import AddPositionArea from '../functional/AddPositionArea'

class SecurityPositionsLoader extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          loading: true,
          securityPositions: [],
          marketData: [],
          coba: []
        };

        this.addPosition = this.addPosition.bind(this);
    }

    addPosition() {
      this.setState({securityPositions : this.state.securityPositions});
    }

    async componentDidMount() {
      const request = interval(20000).pipe( 
        startWith(0), 
        switchMap(() => 
          fetch('http://localhost:8080/marketdata/quotes')
          .then(response => response.json())
        ));
  
      request.subscribe((data) => { 
        this.setState({marketData : data, loading: false});
      })

      fetch('http://localhost:8080/account/list/')
        .then(response => response.json())
        .then(response => {
          this.setState({securityPositions : response});
        });
    }

    render() {
      return (
        <React.Fragment>
          <AddPositionArea addPositionsCallback={this.addPosition}/>
          {this.state.loading === true ? 
            <ReactLoading type="balls" color={'#000'} height={'16%'} width={'16%'} />
            : <SecurityPositions data={this.state.securityPositions} marketData={this.state.marketData}/>
          }
        </React.Fragment>);
    }
}

export default SecurityPositionsLoader;