import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import './style.css';

export class ForgotPassword extends Component {
  render() {
    return (
      <div className='codntainer'>
        <div className='flex-container'>
          <div className='logoCP'>
            <img alt='الشعار' src='./assets/img/logo.png'></img>
          </div>
          <div className='cardCP shadow'>
            <h5 className='titleCP'>نسيت كلمة المرور؟</h5>
            <p style={{ color: '#818181', fontSize: 'small' }}>
              قم بإدخال البريد الإلكتروني أو رقم الهاتف المحمول لاسترجاع الحساب
            </p>
            <p>البريد الإلكتروني / الهاتف المحمول</p>
            <input
              type='email'
              className='emailCP'
              placeholder='admin@company.com'
            />
            <Button
              className='btnSend'
              variant='primary'
              type='submit'
              style={{
                background: '#ff6c37',
                border: '1px solid #ff6c37',
                borderRadius: '12px',
                marginBottom: '50px',
                marginTop: '30px',
              }}
            >
              أرسل كود التحقق
            </Button>
          </div>
          <div className='last3Div'>
            <a href='#'>تواصل معنا</a>
            <a href='#'>سياسة الخصوصية</a>
            <a href='#'>شروط الاستخدام</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
