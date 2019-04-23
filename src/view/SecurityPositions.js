import React from 'react';
import Table from 'react-bootstrap/Table'
import SecurityPositionFunction from '../functional/SecurityPositionFunction';

const SecurityPositions =  ({data = [], marketData}) => (
<div>      
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
            {data[0] !== undefined ? data[0].map((securityPositions, index) => {
                return <SecurityPositionFunction securityPositions={securityPositions} index={index} marketData={marketData[index]}/>;
            }
            ) : null}
        </tbody>
    </Table>
</div>
);
export default SecurityPositions;