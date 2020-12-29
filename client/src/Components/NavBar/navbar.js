import React, { Component } from 'react';
import './style.css';
import { Nav, Button, Navbar, Form } from 'react-bootstrap';
// import { Button } from '@material-ui/core';

export class navbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg='withe' expand='lg' className='shadow-sm py-3'>
          <Navbar href='#home'>
            <img src='assets/img/logo.png' className='logoImg' />
          </Navbar>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto '>
              <Nav.Link href='#contactus' style={{ color: 'black' }}>
                تواصل معنا
              </Nav.Link>
              <Nav.Link href='#faqs' style={{ color: 'black' }}>
                الأسئلة الشائعة
              </Nav.Link>
              <Nav.Link href='#aboutus' style={{ color: 'black' }}>
                من نحن؟
              </Nav.Link>
            </Nav>
            <Form inline id='Btns'>
              <Button
                variant='outline-success'
                className='loginBtn mr-sm-2'
                style={{
                  background: '#ff6c37',
                  border: '1px solid #ff6c37',
                  borderRadius: '7px',
                  color: 'white',
                  width: '120px',
                }}
              >
                تسجيل الدخول
              </Button>
              <Button
                variant='outline-success'
                className='singInBtn mr-sm-2 mr-1'
                style={{
                  background: '#FFFFFF',
                  color: '#ff6c37',
                  border: '1px solid #ff6c37',
                  borderRadius: '7px',
                }}
              >
                تسجيل
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default navbar;
