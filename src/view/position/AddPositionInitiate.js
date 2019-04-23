import React from 'react';
import Button from 'react-bootstrap/Button'

const AddPositionInitiate =  ({toggleShow}) => (
<div> 
        <Button variant="primary" onClick={toggleShow}>
          Add Security Position
        </Button>
</div>
);
export default AddPositionInitiate;