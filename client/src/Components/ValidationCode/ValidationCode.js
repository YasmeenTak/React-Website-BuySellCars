import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import './style.css';

export class ValidationCode extends Component {
  render() {
    return (
      <div className='container'>
        <div>
          <img
            className='img-responsive vcImg'
            alt='#logo'
            src='./assets/img/logo.png'
          />
        </div>
        <div className='codeValidDiv  shadow'>
          <h5 style={{ textAlign: 'center' }}>أدخل الكود للتحقق</h5>

          <div className=' codeInputsDiv'>
            <input
              className='col-sm-3'
              type='text'
              placeholder='___'
              id='codeInput'
            />
            <input
              className='col-sm-3'
              type='text'
              placeholder='___'
              id='codeInput'
            />
            <input
              className='col-sm-3'
              type='text'
              placeholder='___'
              id='codeInput'
            />
            <input
              className='col-sm-3'
              type='text'
              placeholder='___'
              id='codeInput'
            />
          </div>

          <Button
            className='btnSend'
            variant='primary'
            type='submit'
            style={{
              background: '#ff6c37',
              border: '1px solid #ff6c37',
              borderRadius: '12px',
              marginBottom: '50px',
              width: '170px',
              marginTop: '30px',
              marginButtom: '30px',
            }}
          >
            إرسال
          </Button>
        </div>

        <div className='last3Div'>
          <a href='#'>تواصل معنا</a>
          <a href='#'>سياسة الخصوصية</a>
          <a href='#'>شروط الاستخدام</a>
        </div>
      </div>
    );
  }
}

export default ValidationCode;
