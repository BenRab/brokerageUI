import React, {Component} from 'react';
import { TiArrowDown, TiArrowUp } from "react-icons/ti";

class GeneralPanel extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            marketData: [],
        };
    }

    render() {
        return (
            <tr key={this.props.securityPositions.toString()}>
                <td key={this.props.index}>{this.props.index + 1}</td>
                <td key={this.props.securityPositions.security.fullQualifiedName.toString()}>
                    {this.props.securityPositions.security.fullQualifiedName} ({this.props.securityPositions.security.wkn}) <TiArrowDown />
                </td>
                <td>{this.props.marketData.currentValue}</td>
                <td>{this.props.marketData.changeTotal}<br/>{this.props.marketData.changePercent}%</td>
                <td></td>
            </tr>        
        );
    }
}

export default GeneralPanel;