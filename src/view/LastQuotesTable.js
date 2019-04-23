import React, {Component} from 'react';
import LastQuoteRow from './LastQuoteRow';
import Table from 'react-bootstrap/Table'
import { Parallax } from 'react-scroll-parallax';


class LastQuotesTable extends Component {
    render() {
        return (
            <Table size="sm" responsive="sm">
            <Parallax className="custom-class" y={[-20, 20]} >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Price</th>
                        <th>Time</th>
                        <th>Difference</th>
                    </tr>
                </thead>
                </Parallax>
                {this.props.lastQuotes.reverse().map((quote, index) =>
                    <LastQuoteRow quote={quote} index={index + 1}/>
                )}
            </Table>
        );
    }
}

export default LastQuotesTable;