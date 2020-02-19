import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
  Form,
  FormGroup,
  Fade,
  Badge,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
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
     
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Search </strong> Beneficiary
              </CardHeader>
              <CardBody>
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="12">
                      <InputGroup>
                        <Input type="text" id="input2-group2" name="input2-group2" placeholder="Search by name, account number or progress number" />
                        <InputGroupAddon addonType="append">
                          <Button type="button" color="primary">Search</Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  
                </Form>
              </CardBody>
              <CardFooter>
                <small>Input Name, Account Number etc</small>
              </CardFooter>
            </Card>
          </Col>
          
        </Row>
        <Row>
        <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Ben Details
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>Cycle Code</th>
                    <th>Settlement</th>
                    <th>Households</th>
                    <th>Individuals</th>
                    <th>Totals</th>
                    <th>Download</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Cycle 3</td>
                    <td>Lobule</td>
                    <td>880</td>
                    <td>3,400</td>
                    <td>110,000,000</td>
                    <td>
                    <Badge color="danger"><a href="#">PDF</a></Badge> 
                    &nbsp; &nbsp;
                    <Badge color="danger">PDF</Badge> 
                    &nbsp; &nbsp;
                      <Badge color="success">Excel</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Cycle 2</td>
                    <td>Rhino</td>
                    <td>8,400</td>
                    <td>13,000</td>
                    <td>340,000,000</td>
                    <td>
                    <Badge color="danger"><a href="#">PDF</a></Badge> 
                    &nbsp; &nbsp;
                    <Badge color="danger">PDF</Badge> 
                    &nbsp; &nbsp;
                      <Badge color="success">Excel</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Cycle 2</td>
                    <td>Lobule</td>
                    <td>890</td>
                    <td>4,300</td>
                    <td>120,000,000</td>
                    <td>
                    <Badge color="danger"><a href="#">PDF</a></Badge> 
                    &nbsp; &nbsp;
                    <Badge color="danger">PDF</Badge> 
                    &nbsp; &nbsp;
                      <Badge color="success">Excel</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Cycle 1</td>
                    <td>Rhino</td>
                    <td>4,000</td>
                    <td>12,000</td>
                    <td>310,000,000</td>
                    <td>
                    <Badge color="danger"><a href="#" color="white">PDF</a></Badge> 
                    &nbsp; &nbsp;
                    <Badge color="danger">PDF</Badge> 
                    &nbsp; &nbsp;
                      <Badge color="success">Excel</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Cycle 1</td>
                    <td>Lobule</td>
                    <td>750</td>
                    <td>2,300</td>
                    <td>80,000,000</td>
                    <td>
                    <Badge color="danger"><a href="#">PDF</a></Badge> 
                    &nbsp; &nbsp;
                    <Badge color="danger">PDF</Badge> 
                    &nbsp; &nbsp;
                      <Badge color="success">Excel</Badge>
                    </td>
                  </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="page-item"><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
    
        </Row>
        

      </div>
    );
  }
}

export default Forms;
