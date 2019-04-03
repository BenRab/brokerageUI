import React, {Component} from 'react';

class LastQuoteRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.quote.currentValue}</td>
                <td></td>
                <td></td>
            </tr>     
        )
    }
}

export default LastQuoteRow;