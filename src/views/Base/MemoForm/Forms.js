import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Cash Release Note</strong>
              </CardHeader>
              <CardBody>
              <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Field Office</Label>
                      <Input type="text" id="disabled-input" name="disabled-input" placeholder="Koboko" disabled />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Transfer Value</Label>
                      <Input type="text" id="disabled-input" name="disabled-input" placeholder="UGX. 31,000" disabled />
                    </FormGroup>
                  </Col>
                </Row>               
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Financial Service Provider</Label>
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Post Bank</option>
                        <option value="2">Equity Bank</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>   

                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Settlement</Label>
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Rhino</option>
                        <option value="2">Lobule</option>
                        <option value="3">Imvepi</option>
                        <option value="4">Bidibidi</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Manifest</Label>
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Cycle 1 Lobule  </option>
                        <option value="2">Cycle 1 Rhino </option>
                        <option value="3">Cycle 2 Lobule  </option>
                        <option value="4">Cycle 2 Rhino  </option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="ccmonth">Month</Label>
                      <Input type="select" name="ccmonth" id="ccmonth">
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">Mar</option>
                        <option value="4">Apr</option>
                        <option value="5">May</option>
                        <option value="6">Jun</option>
                        <option value="7">Jul</option>
                        <option value="8">Aug</option>
                        <option value="9">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="ccyear">Year</Label>
                      <Input type="select" name="ccyear" id="ccyear">
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  
                </Row>

                <Row>
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="name">Start Date</Label>
                      <Input type="date" id="start-date-input" name="start-date-input" placeholder="date" />
                    </FormGroup>
                  </Col>
                  <Col xs="6">
                    <FormGroup>
                      <Label htmlFor="name">End Date</Label>
                      <Input type="date" id="end-date-input" name="end-date-input" placeholder="date" />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <div className="form-actions">
                  <Button type="submit" color="primary">Submit</Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
          
        </Row>
        
      </div>
    );
  }
}

export default Forms;
