import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import PositionForm from '../position/PositionForm';

const AddPositionModal =  ({show, toggleShow, addPositionsCallback}) => (
<div> 
    <Modal size="lg" show={show} onHide={toggleShow}>
        <Modal.Header closeButton>
        <Modal.Title>Add Security Position</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <PositionForm/>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={toggleShow}>
            Close
        </Button>
        <Button variant="primary" onClick={() => addPositionsCallback("testtest")}>
              Save Changes
        </Button>
        </Modal.Footer>
        
    </Modal>
</div>
);
export default AddPositionModal;