

import React, {Component} from 'react';

class DetailsPanel extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            marketData: [],
        };
    }

    render() {
        if (this.props.showDetails) {
            return (
                <tr key={this.props.securityPositions.toString()}>
                    <td></td>
                    <td>
                        Low: {this.props.marketData.low} <br/>
                        Current: {this.props.marketData.currentValue} <br/>
                        High: {this.props.marketData.high}
                    </td>
                    <td colSpan="3"></td>
                    <td></td>
                </tr>     
            );
        } else {
            return null;
        }
    }
}

export default DetailsPanel;