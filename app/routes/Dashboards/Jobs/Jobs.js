import React from 'react';
import { HeaderMain } from '../../components/HeaderMain';
import { setupPage } from './../../../components/Layout/setupPage';
import {
    Container,
    Row,
    Card,
    CardBody,
    CustomInput,
    CardDeck,
    Table,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    CardTitle,
    ListGroup,
    ListGroupItem,
    Button,
    Col
} from './../../../components';
import BootstrapTable from "react-bootstrap-table-next";


import _ from 'lodash';

const Jobs = () => (
    <Container>
        <Row className="mb-2">
            <Col lg={12}>
                <HeaderMain
                    title="Jobs"
                    className="mb-4 mb-lg-3" />
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
                <div className="hr-text hr-text-center mt-4 mb-4">
                    <span>Job Posts</span>
                </div>
            </Col>
        </Row>
        <Row>
            <Table responsive striped className='mb-0'>
                <thead>
                    <tr>
                        <th className="bt-0">Job Title</th>
                        <th className="bt-0">Company</th>
                        <th className="bt-0">Location</th>
                        <th className="bt-0">Date Posted</th>
                    </tr>
                </thead>
                <tbody>
                    {_.times(6, (index) => (
                        <tr key={index}>
                            <td>Software Developer</td>
                            <td>Google</td>
                            <td>Mountain View, CA</td>
                            <td>10/10/2020</td>
                        </tr>))}
                </tbody>
            </Table>
        </Row>

    </Container>
);

export default setupPage({
    pageTitle: 'Jobs'
})(Jobs);