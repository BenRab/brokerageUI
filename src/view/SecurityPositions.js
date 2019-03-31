import React from 'react';
import Headroom from 'react-headroom';
import Table from 'react-bootstrap/Table'
import { TiArrowDown, TiArrowUp } from "react-icons/ti";


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
        {data !== null ? data.map((securityPositions, index) => 
            <tr key={securityPositions.toString()}>
                <td key={index}>{index + 1}</td>
                <td key={securityPositions.security.fullQualifiedName.toString()}>
                    {securityPositions.security.fullQualifiedName} ({securityPositions.security.securityNumber}) <TiArrowDown />
                </td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        ) 
        : null}
    </tbody>
  </Table>

</div>
);
export default SecurityPositions;