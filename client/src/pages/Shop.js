import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import TypeBar from '../components/TypeBar';

const Shop = () => {
    return (
        <Container>
            <Row className='mt-3'>
                <Col className='mt-2' md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>

                </Col>
            </Row>
        </Container>
    );
};

export default Shop;