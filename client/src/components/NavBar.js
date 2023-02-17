import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/const';
import Button from 'react-bootstrap/Button';
import {observer} from 'mobx-react-lite';


const NavBar = observer(() => {
    const { user } = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white',  }} to={SHOP_ROUTE} >By now</NavLink>
                {user.Auth 
                ?
                <Nav className="ml-auto" color={{color: 'white'}}>
                    <Button variant={'outline-light'}>Admin</Button>
                    <Button variant={'outline-light'} className='ml-3 ' >exit</Button>
                </Nav>
                :
                <Nav className="ml-auto" color={{color: 'white'}}>
                    <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>auth</Button>
                </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;