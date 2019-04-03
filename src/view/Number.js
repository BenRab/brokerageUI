import React, {Component} from 'react';
import AnimatedNumber from "react-animated-number";

class ChangingNumber extends Component {
    render() {
        return (
                <AnimatedNumber 
                    value={this.props.value}
                    style={{
                        transition: '0.8s ease-out',
                        transitionProperty:
                            'background-color, color, opacity'
                    }}
                    frameStyle={perc => (
                        perc === 100 ? {} : {backgroundColor: '#ffeb3b'}
                    )}
                    duration={200}
                />    
        );
    }
}

export default ChangingNumber;