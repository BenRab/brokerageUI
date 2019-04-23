import React, {Component} from 'react';
import AddPositionInitiate from "../view/position/AddPositionInitiate";
import AddPositionModal from "../view/position/AddPositionModal";

class AddPositionArea extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            show: false,
        };

        this.toggleShow = this.toggleShow.bind(this);
        this.addPosition = this.addPosition.bind(this);
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

    toggleShow() {
        this.setState({show: !this.state.show});
    }

    addPosition(test) {
        alert(test)
        this.props.addPositionsCallback();
        this.setState({show: !this.state.show});
    }

    render() {
        return (
            <div>
                <AddPositionInitiate toggleShow={this.toggleShow}/>
                <AddPositionModal show={this.state.show} addPositionsCallback={this.addPosition} toggleShow={this.toggleShow}/>
            </div>
        );
      }
}

export default AddPositionArea;