

import React, {Component} from 'react';

class DetailsPanel extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            marketData: [],
        };
    }

    render() {
        const quote = this.props.marketData.currentQuote;
        if (this.props.showDetails) {
            return (
                <tr key={this.props.securityPositions.toString()}>
                    <td></td>
                    <td>
                        Low: {quote.low} <br/>
                        Current: {quote.currentValue} <br/>
                        High: {quote.high}
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