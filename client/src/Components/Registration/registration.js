import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Button, Group } from 'react-bootstrap';
import './style.css';

export class Registration extends Component {
  render() {
    return (
      <div className='container mainDiv'>
        <div className='row'>
          <div className='col-lg-6 regImgDiv animate__animated animate__bounceInRight'>
            <img
              src='/assets/img/register.png'
              className='img-fluid animate__backInRight'
            />
          </div>
          <div className='col mt-5 formDiv animate__animated animate__bounceInLeft'>
            <Form>
              <h5 className='titleReg'>إنشاء حساب جديد</h5>
              <Form.Row>
                <Form.Group as={Col} controlId='formGridEmail'>
                  <Form.Label>الاسم الثاني</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='الاسم الثاني'
                    className='inputReg'
                  />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridPassword'>
                  <Form.Label>الاسم الأول</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='الاسم الأول'
                    className='inputReg'
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId='formGridEmail'>
                <Form.Label>البريد الإلكتروني</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='admin@company.com'
                  className='inputReg'
                />
              </Form.Group>

              <Form.Group controlId='formGridPhoneNum'>
                <Form.Label>رقم الهاتف المحمول</Form.Label>
                <Form.Control placeholder='0591234567' className='inputReg' />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId='formGridPass2'>
                  <Form.Label>تأكيد كلمة المرور</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='********'
                    className='inputReg'
                  />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridPass'>
                  <Form.Label>كلمة المرور</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='********'
                    className='inputReg'
                  />
                </Form.Group>
              </Form.Row>

              <p>تذكر حسابي</p>
              {/* <Form.Group as={Row} controlId='formHorizontalCheck'>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Form.Check label='Remember me' />
                </Col>
              </Form.Group> */}

              <Button
                variant='primary'
                type='submit'
                style={{
                  background: '#ff6c37',
                  border: '1px solid #ff6c37',
                  borderRadius: '12px',
                  width: '180px',
                }}
              >
                إنشاء حساب
              </Button>
              <p className='makeAccount'>
                لديك حساب بالفعل؟ <a href='/Login'>قم بتسجيل الدخول</a>
              </p>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
