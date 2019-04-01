import React from 'react';
import { TiArrowDown, TiArrowUp } from "react-icons/ti";


const SecurityPosition =  ({securityPositions, marketData, index}) => (
    securityPositions !== undefined ?
        <tr key={securityPositions.toString()}>
            <td key={index}>{index + 1}</td>
            <td key={securityPositions.security.fullQualifiedName.toString()}>
                {securityPositions.security.fullQualifiedName} ({securityPositions.security.securityNumber}) <TiArrowDown />
            </td>
            <td>{marketData !== undefined ? marketData['05. price'] :null}</td>
            <td>{marketData != undefined ? marketData["09. change"] : null}<br/>{marketData !== undefined ? marketData["10. change percent"] : null}</td>
            <td></td>
        </tr>
    : null
);

export default SecurityPosition;