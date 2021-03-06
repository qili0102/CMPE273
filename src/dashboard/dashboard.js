import React from 'react';
import { ListGroup, Jumbotron, Col, Row, Badge, ListGroupItem } from 'reactstrap';
import DetailField from '../project/detail_field';

export default class Dashboard extends React.Component {
  render() {
    return (
        <div className="container col-sm-11">
            <Jumbotron>
                    <h4>Dashboard</h4>
            </Jumbotron>
            <Row>
                <Col sm="6">
                <h4><Badge color="light">Projects you have bid on</Badge></h4>
                    <ListGroup>
                        {/* <DetailField /> */}
                        <ListGroupItem><a>A 273 lab</a></ListGroupItem>
                    </ListGroup>
                </Col>
                <Col sm="6">
                <h4><Badge color="light">Projects you have published</Badge></h4>
                    <ListGroup>
                    <ListGroupItem><a>A Webpage</a></ListGroupItem>
                    <ListGroupItem><a>page</a></ListGroupItem>
                    <ListGroupItem><a>Restful Services</a></ListGroupItem>
                    <ListGroupItem><a>Sprint boot</a></ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    );
  }
}