import React from 'react';
import GeneralPanel from './GeneralPanel'
import DetailsPanel from './DetailsPanel'

const SecurityPosition =  ({securityPositions}) => (
    securityPositions !== undefined ?
        <React.Fragment>
            <GeneralPanel {...this.props}/>
            <DetailsPanel {...this.props}/>
        </React.Fragment>
    : null
);

export default SecurityPosition;