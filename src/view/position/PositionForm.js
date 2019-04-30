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
        } else {
            const date = event.target[7].value.split(".");
            const time = event.target[7].value.split(":");
            const day = date[0];
            const month = date[1];
            const year = date[2];
            const hours = time[0];
            const minutes = time[1];
            const dateObj = new Date(year, month - 1, day, hours, minutes);
            const requestObject = {
                "security": {
                    "securityNumber": event.target[1].value,
                    "fullQualifiedName": event.target[0].value,
                    "isin": event.target[2].value,
                    "wkn": event.target[1].value,
                    "market": event.target[4].value
                },
                "position": {
                    "date":dateObj,
                    "quantity": event.target[3].value,
                    "costs": event.target[6].value,
                    "buyInValue": event.target[5].value,
                    "exchangeRate":1,
                }
            };
            
            fetch('http://localhost:8080/account/addPosition/', {
                    method: "POST", // *GET, POST, PUT, DELETE, etc.
                    mode: "cors", // no-cors, cors, *same-origin
                    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                    headers: {
                        "Content-Type": "application/json",
                        // "Content-Type": "application/x-www-form-urlencoded",
                    },
                    redirect: "follow", // manual, *follow, error
                    referrer: "no-referrer", // no-referrer, *client
                    body: JSON.stringify(requestObject), // body data type must match "Content-Type" header
                })
                .then(response => response.json())
                .then(response => {
                    this.setState({securityPositions : response});
            });
            this.props.addPositionsCallback(requestObject);
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
              <Form.Group as={Col} md="5" controlId="fullQualifiedName">
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
              <Form.Group as={Col} md="1" controlId="validationCustom03">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Please provide the Quantity.
                </Form.Control.Feedback>
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
                <Form.Label>Cost</Form.Label>
                <Form.Control type="number" placeholder="0" required />
                <Form.Control.Feedback type="invalid">
                  Please provide costs.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="validationCustom03">
                <Form.Label>Date</Form.Label>
                <Form.Control type="text" defaultValue="01.01.2019" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a date.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="validationCustom03">
                <Form.Label>Time</Form.Label>
                <Form.Control type="text" defaultValue="17:00" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a time.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button type="submit">Submit form</Button>
          </Form>
        );
      }
}

export default PositionForm;