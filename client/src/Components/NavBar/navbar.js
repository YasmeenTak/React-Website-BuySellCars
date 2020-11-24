import React, { Component } from 'react';
import './style.css';
import { Nav, Button, Navbar } from 'react-bootstrap';
// import { Button } from '@material-ui/core';

export class navbar extends Component {
  render() {
    return (
      <div>
        <Navbar className='navbar navbar-light bg-light'>
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
        </Navbar>
      </div>
    );
  }
}

export default navbar;
