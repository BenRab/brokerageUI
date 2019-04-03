import React, {Component} from 'react';
import LastQuotesTable from './LastQuotesTable';

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
                        Date: {quote.date} - {quote.time} <br/>
                        Low: {quote.low} <br/>
                        Current: {quote.currentValue} <br/>
                        High: {quote.high}
                    </td>
                    <td colSpan="4">
                        <LastQuotesTable lastQuotes={this.props.marketData.lastQuotes}/>
                    </td>
                </tr>     
            );
        } else {
            return null;
        }
    }
}

export default DetailsPanel;