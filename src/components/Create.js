import React, { Component } from "react";
import { ListGroup, ListGroupItem, PageHeader } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, FormControl, option, Form, FormGroup, Col, Checkbox, ControlLabel } from 'react-bootstrap';

export default class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        fish: {
          id: 1
        },
        seller: {
          id: null
        },
        buyer: {
          id: 2
        },
        portId: null,
        price: null,
        kilos: null,
        comments: '',
      },
      fish: [{
        id: 1,
        name: 'Nile Perch',
        description: ''
      },
      {
        id: 2,
        name: 'Tilapia',
        description: ''
      },
      {
        id: 3,
        name: 'Silver Cyprinid',
        description: ''
      },
      {
        id: 4,
        name: 'Pied Kingfisher',
        description: ''
      }],
      ports: [
        {
            id: 1,
            name: "Kisumu",
            latitude: 0.0917,
            longitude: 34.7680,
            latitudeDelta: null,
            longitudeDelta: null,
        },
        {
            id: 2,
            name: "Mwanza",
            latitude: 2.5164,
            longitude: 32.9175,
            latitudeDelta: null,
            longitudeDelta: null,
        },
        {
            id: 3,
            name: "Bukoba",
            latitude: 1.3296,
            longitude: 31.8050,
            latitudeDelta: null,
            longitudeDelta: null,
        },
        {
            id: 4,
            name: "Entebbe",
            latitude: 0.0512,
            longitude: 32.4637,
            latitudeDelta: null,
            longitudeDelta: null,
        },
        {
            id: 5,
            name: "Port Bell",
            latitude: 0.2978,
            longitude: 32.6532,
            latitudeDelta: null,
            longitudeDelta: null,
        },
        {
            id: 6,
            name: "Jinja",
            latitude: 0.4479,
            longitude: 33.2026,
            latitudeDelta: null,
            longitudeDelta: null,
        }
      ],
      buyers: [
        {
         id: 2,
         name: "Tommy Cahill",
         email: "tommy@gmail.com",
         seller: false,
         createdAt: "2018-02-11T01:05:55.331Z",
         updatedAt: "2018-02-11T01:05:55.331Z"
       }
      ],
      sellers: [
        {
          id: 3,
          name: "Patrick Smith",
          email: "patrick@gmail.com",
          seller: true,
          createdAt: "2018-02-11T01:07:53.146Z",
          updatedAt: "2018-02-11T01:07:53.146Z"
        },
        {
         id: 1,
         name: "Michael Litchev",
         email: "litchev@gmail.com",
         seller: true,
         createdAt: "2018-02-11T01:01:23.366Z",
         updatedAt: "2018-02-11T01:01:23.366Z"
        }
      ]
    }
  }

  handleChange = event => {
    console.log(event.target.id, event.target.value);
    // let targ = event.target.id
    let form = this.state.form;
    form[event.target.id] = event.target.value
      this.setState({
        form
      });
    }

  handleSubmit = event => {
    console.log({logtest: this.state});
    console.log(event.target);

    event.stopPropagation();
    console.log(event.target);
  }


  render() {
    const fishTitle = 'Fish'
    const portTitle = 'Port'

    return(
      <div>
        <PageHeader>Report of Fish Sale</PageHeader>

        <Form horizontal>

          <h4>Port</h4>
          <FormGroup controlId="port">
            <FormControl
              componentClass="select"
              onChange={this.handleChange}
              bsStyle={'primary'}
              title={'port'}
              key={'gaseasd'}
              id={`port`}
              value={this.state.form.port}
            >
              <option eventKey="1">{this.state.ports[0].name}</option>
              <option eventKey="2">{this.state.ports[1].name}</option>
              <option eventKey="2">{this.state.ports[2].name}</option>
              <option eventKey="2">{this.state.ports[3].name}</option>
            </FormControl>
          </FormGroup>

          <h4>Fish Species</h4>
          <FormGroup controlId="fish">
            <FormControl
              componentClass="select"
              bsStyle={'primary'}
              title={'fish'}
              key={'hfggs'}
              id={`sgwweb`}
            >
              <option eventKey="1">{this.state.fish[0].name}</option>
              <option eventKey="2">{this.state.fish[1].name}</option>
              <option eventKey="2">{this.state.fish[2].name}</option>
              <option eventKey="2">{this.state.fish[3].name}</option>
            </FormControl>
          </FormGroup>

          <h4>Seller</h4>
          <FormGroup controlId="seller">
            <FormControl
              componentClass="select"
              bsStyle={'primary'}
              title={'Sellers'}
              key={'awefawefwa'}
              id={`formHorizontalSellers`}
            >
              <option eventKey="1">{this.state.sellers[0].name}</option>
              <option eventKey="2">{this.state.sellers[1].name}</option>
            </FormControl>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              Weight in Kilos
            </Col>
            <Col sm={6}>
              <FormControl
                type="number"
                onChange={this.handleChange}
                placeholder="kilos"
                id="kilos"
                value={this.state.form.kilos}
              />
            </Col>
          </FormGroup>

          <h4>Price</h4>
          <FormGroup controlId="price">
            <Col componentClass={ControlLabel} sm={4}>
              Price per Kilo in Ugandan Shillings
            </Col>
            <Col sm={6}>
              <FormControl
                type="number"
                onChange={this.handleChange}
                id="price"
                placeholder="price"
                value={this.state.form.price}
              />
            </Col>
          </FormGroup>


          <FormGroup controlId="comments">
            <Col componentClass={ControlLabel} sm={4}>
              Comments
            </Col>
            <Col sm={6}>
              <FormControl
                type="text"
                onChange={this.handleChange}
                id="comments"
                value={this.state.form.comments}
                placeholder="comments"
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={4} sm={6}>
              {/* <Button
                type="button"
                onClick={this.handleSubmit}
                >Submit</Button> */}
              <Link to={`/transactions/complete`}>
                <h4>
                  Submit
                </h4>
                {/* { "Submitted: " + (new Date(transaction.createdAt)).toLocaleString() } */}
              </Link>


            </Col>
          </FormGroup>

        </Form>


        <ListGroup>


            {/* { this.renderTransactions(this.state.transactions)} */}
        </ListGroup>

      </div>
    )
  }
}
