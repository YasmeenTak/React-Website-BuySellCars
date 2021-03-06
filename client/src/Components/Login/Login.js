import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../Registration/registration';
import Registration from '../Registration/registration';

import './style.css';

export class Login extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='imgDiv animate__animated animate__bounceInRight'>
                <img src='/assets/img/login.png' className='loginImg'></img>
              </div>
            </div>
            <div className='col mt-5'>
              <div className='formDiv animate__animated animate__bounceInLeft'>
                <h5 className='title'>تسجيل الدخول</h5>
                <p className='subTitle'>
                  قم بإدخال البريد الإلكتروني وكلمة المرور للوصول
                </p>

                <form className='form-container'>
                  <label for='email'>البريد الإلكتروني</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='admin@company.com'
                  />
                  <label for='password'>كلمة المرور</label>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='*********'
                    // style={{ textAlign: 'left' }}
                  />

                  <p className='forgetPass'>هل نسيت كلمة المرور؟</p>
                </form>
                <div className='loginBtnAndReg'>
                  <Button
                    className='loginBtn'
                    style={{
                      background: '#ff6c37',
                      border: '1px solid #ff6c37',
                      borderRadius: '12px',
                      // outline: '#818181',
                    }}
                  >
                    تسجيل الدخول
                  </Button>
                  <p className='makeAccount'>
                    ليس لديك حساب بعد؟ <a href='/Register'>قم بإنشاء حساب</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
