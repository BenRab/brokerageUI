import React from 'react';
import { TiArrowDown, TiArrowUp } from "react-icons/ti";


const SecurityPosition =  ({securityPositions, marketData, index}) => (
    securityPositions !== undefined ?
        <tr key={securityPositions.toString()}>
            <td key={index}>{index + 1}</td>
            <td key={securityPositions.security.fullQualifiedName.toString()}>
                {securityPositions.security.fullQualifiedName} ({securityPositions.security.wkn}) <TiArrowDown />
            </td>
            <td>{marketData.currentValue}</td>
            <td>{marketData.changeTotal}<br/>{marketData.changePercent}%</td>
            <td></td>
        </tr>
    : null
);

export default SecurityPosition;