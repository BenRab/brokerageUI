import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

class PositionForm extends Component {
    constructor(...args) {
        super(...args);
    
        this.state = { validated: false };
      }
    
      handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.setState({ validated: true });
      }
    
      render() {
        const { validated } = this.state;
        return (
          <Form
            noValidate
            validated={validated}
            onSubmit={e => this.handleSubmit(e)}
          >
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="fullQualifiedName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="wkn">
                <Form.Label>WKN</Form.Label>
                <Form.Control
                  required
                  type="text"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="isin">
                <Form.Label>ISIN</Form.Label>
                <Form.Control
                  required
                  type="text"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="2" controlId="validationCustom03">
                <Form.Label>Market</Form.Label>
                <Form.Control type="text" placeholder="FRA" defaultValue="FRA" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a marketplace.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="validationCustom03">
                <Form.Label>Buy In</Form.Label>
                <Form.Control type="number" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Please provide the buy in.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="validationCustom03">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Please provide the Quantity.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="validationCustom03">
                <Form.Label>Cost</Form.Label>
                <Form.Control type="number" placeholder="0" required />
                <Form.Control.Feedback type="invalid">
                  Please provide costs.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom03">
                <Form.Label>Date</Form.Label>
                <Form.Control type="text" defaultValue="01.01.2019" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a date.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button type="submit">Submit form</Button>
          </Form>
        );
      }
}

export default PositionForm;