import React, {Component} from 'react';
import LastQuotesTable from './LastQuotesTable';
import DetailsChart from './DetailsChart'

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
                        <b>General Information</b> <br/>
                        Amount: {this.props.securityPositions.positionSummary.amount}<br/><br/>
                        <b>Marketdata</b> <br/>
                        Date: {quote.date} - {quote.time} <br/>
                        Low: {quote.low} <br/>
                        Current: {quote.currentValue} <br/>
                        High: {quote.high}
                    </td>
                    <td colSpan="4">
                        <DetailsChart wkn={this.props.securityPositions.security.wkn} market={this.props.securityPositions.security.market}/><br/>
                    </td>
                </tr>     
            );
        } else {
            return null;
        }
    }
}

export default DetailsPanel;