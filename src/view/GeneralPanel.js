import React, {Component} from 'react';
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import ChangingNumber from './Number';

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
                    {this.props.showDetails ?<GoChevronUp onClick={() => this.props.changeDetails()} /> 
                    : <GoChevronDown onClick={() => this.props.changeDetails()}/>} 
                    {this.props.securityPositions.security.fullQualifiedName} ({this.props.securityPositions.security.wkn}) 
                </td>
                <td>
                <ChangingNumber value={this.props.marketData.currentValue} />
                </td>
                <td><ChangingNumber value={this.props.marketData.changeTotal} /><br/><ChangingNumber value={this.props.marketData.changePercent} />%</td>
                <td></td>
            </tr>        
        );
    }
}

export default GeneralPanel;