import React, {Component} from 'react';
import AnimatedNumber from "react-animated-number";

class ChangingNumber extends Component {
    render() {
        return (
                <AnimatedNumber 
                    value={this.props.value}

                    frameStyle={perc => (
                        perc === 100 ? {} : {backgroundColor: '#ffeb3b'}
                    )}
                    duration={200}
                />    
        );
    }
}

export default ChangingNumber;