

import React, {Component} from 'react';
import { TiArrowDown, TiArrowUp } from "react-icons/ti";

class DetailsPanel extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            marketData: [],
        };
    }

    render() {
        return (
            <tr key={this.props.securityPositions.toString()}>
                <td colspan="2"></td>
                <td colSpan="3">{this.props.marketData.currentValue}</td>
                <td></td>
            </tr>     
        );
    }
}

export default DetailsPanel;