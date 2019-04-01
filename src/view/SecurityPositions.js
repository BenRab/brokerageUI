import React from 'react';
import Headroom from 'react-headroom';
import Table from 'react-bootstrap/Table'
import SecurityPositionFunction from '../functional/SecurityPositionFunction';

const SecurityPositions =  ({data = []}) => (
<div>
    <Headroom>
        <h1>SecurityPositions</h1>
    </Headroom>
    <Table responsive="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Security</th>
        <th>Current Price</th>
        <th>Today</th>
        <th>In Total</th>
      </tr>
    </thead>
    <tbody>
        {data.map((securityPositions, index) => 
            <SecurityPositionFunction securityPositions={securityPositions} index={index}/>
        )}
    </tbody>
  </Table>

</div>
);
export default SecurityPositions;