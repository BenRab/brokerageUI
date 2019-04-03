import React, {Component} from 'react';
import GeneralPanel from './GeneralPanel'
import DetailsPanel from './DetailsPanel'

class SecurityPosition extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            showDetails: false,
        };
    }

    changeDetailsView = () => {
        this.setState({showDetails : !this.state.showDetails});
    };
    
    render() {
        return (
            this.props.securityPositions !== undefined && this.props.marketData !== undefined?
            <React.Fragment>
                <GeneralPanel {...this.props} showDetails={this.state.showDetails} changeDetails={this.changeDetailsView}/>
                <DetailsPanel {...this.props} showDetails={this.state.showDetails}/>
            </React.Fragment>
            : null
        );
    }
}

export default SecurityPosition;