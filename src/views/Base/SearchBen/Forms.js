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
                    <th>Progres Number</th>
                    <th>Beneficiary Details</th>
                    <th>Bank Account</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>WA9-18H65429</td>
                    <td> KIDEN, JOYCE</td>

                    <td>1150036008624</td>
                    <td>
                      <Badge color="success">Edit</Badge>
                      &nbsp; &nbsp;
                      <Badge color="danger">Deactivate</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>WA9-18H36179</td>
                    <td>HENRY, ROSE KIDEN </td>
    
                    <td>1150036008634</td>
                    <td>
                      <Badge color="success">Edit</Badge>
                      &nbsp; &nbsp;
                      <Badge color="danger">Deactivate</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>WA9-18H36180</td>
                    <td>KIDEN, GRACE</td>
               
                    <td>1150036004524</td>
                    <td>
                      <Badge color="success">Edit</Badge>
                      &nbsp; &nbsp;
                      <Badge color="danger">Deactivate</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>WA9-18H36349</td>
                    <td>LADU, CICILA KIDEN</td>
       
                    <td>1150036005682</td>
                    <td>
                      <Badge color="success">Edit</Badge>
                      &nbsp; &nbsp;
                      <Badge color="danger">Deactivate</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>WA9-18H55679</td>
                    <td>Lobule</td>
              
                    <td>1150036005233</td>
                    <td>
                      <Badge color="success">Edit</Badge>
                      &nbsp; &nbsp;
                      <Badge color="danger">Deactivate</Badge>
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
