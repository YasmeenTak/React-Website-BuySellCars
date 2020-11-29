import React, { Component } from 'react';
import './style.css';
import {
  Nav,
  Button,
  Navbar,
  FormControl,
  Form,
  NavDropdown,
} from 'react-bootstrap';
// import { Button } from '@material-ui/core';

export class navbar extends Component {
  render() {
    return (
      <div>
        {/* <Navbar className='navbar navbar-light bg-light'>
          <div className='container-fluid'>
            <Nav className='btnNav'>
              <Button
                className='singInBtn mr-sm-2'
                style={{
                  background: '#FFFFFF',
                  color: '#ff6c37',
                  border: '1px solid #ff6c37',
                  borderRadius: '7px',
                }}
              >
                تسجيل
              </Button>
              <Button
                className='loginBtn'
                style={{
                  background: '#ff6c37',
                  border: '1px solid #ff6c37',
                  borderRadius: '7px',
                }}
              >
                تسجيل الدخول
              </Button>
            </Nav>
            <Nav className='mr-auto'>
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
            <img src='assets/img/logo.png' className='logoImg' />
          </div>
        </Navbar> */}

        <Navbar bg='light' expand='lg'>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Form inline id="Btns">
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
              <Button
                variant='outline-success'
                className='loginBtn mr-sm-2'
                style={{
                  background: '#ff6c37',
                  border: '1px solid #ff6c37',
                  borderRadius: '7px',
                  color: 'white',
                  width:'120px'
                }}
              >
                تسجيل الدخول
              </Button>
            </Form>
            <Nav className='mr-auto'>
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
          </Navbar.Collapse>
          <Navbar href='#home'>
            <img src='assets/img/logo.png' className='logoImg' />
          </Navbar>
        </Navbar>
      </div>
    );
  }
}

export default navbar;
