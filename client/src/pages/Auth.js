import React from 'react';
import { Container, Form, Card, Row, Button } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const';

const Auth = () => {

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container
            className='d-flex justify-content-center align-items-center mt-5'
            style={{ heigh: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className='p-5 mt-8'>
                <h2 className='m-auto'> {isLogin ? "Authorization" : "Registration"}</h2>
                <Row className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='add email ...'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='add password ...'
                    />

                </Row>
                <Row className='d-flex  p-1 '>
                    {isLogin ?
                        <div className='d-flex  justify-content-between mt-4'>
                            <p>Нет Аккаунта ?</p>
                            <NavLink to={REGISTRATION_ROUTE}> Зарегистрируйся!</NavLink>
                        </div>
                        :
                        <div className='d-flex  justify-content-between mt-4'>
                            <p>Есть аккаунт?</p>
                            <NavLink to={LOGIN_ROUTE}> Войдите!</NavLink>
                        </div>
                    }
                    <Button variant={'outline-success'} className='mt-3 align-self-end'>
                        {isLogin ? 'Sing in' : 'Registration'}
                    </Button>
                </Row>
            </Card>
        </Container>
    );
};

export default Auth;