import React, {Component} from 'react';
import LastQuoteRow from './LastQuoteRow';
import Table from 'react-bootstrap/Table'

class LastQuotesTable extends Component {
    render() {
        return (
            <Table size="sm" responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Price</th>
                        <th>Time</th>
                        <th>Difference</th>
                    </tr>
                </thead>
                {this.props.lastQuotes.reverse().map((quote, index) =>
                    <LastQuoteRow quote={quote} index={index + 1}/>
                )}
            </Table>
        );
    }
}

export default LastQuotesTable;