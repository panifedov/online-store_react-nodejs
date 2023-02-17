import React from 'react';
import {Container, Form, Card, Row, Button} from 'react-bootstrap'

const Auth = () => {
    return (
        <Container 
        className='d-flex justify-content-center align-items-center mt-5'
        style={{heigh: window.innerHeight - 54 }}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'> Authorization</h2>
                <Row className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='add email ...'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='add password ...'
                    />
                    <Button variant='outline-success' className='mt-3'>
                        Sing in
                    </Button>
                </Row>
            </Card>
        </Container>
    );
};

export default Auth;