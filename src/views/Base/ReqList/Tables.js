import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class Tables extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
         

          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> All Cash Payment Requests
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

export default Tables;
