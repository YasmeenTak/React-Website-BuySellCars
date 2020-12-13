import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import './style.css';
export class ResetPassword extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div>
            <img
              className='img-responsive restPassImg '
              alt='#logo'
              src='./assets/img/logo.png'
            />
          </div>
          <div className='ResetPassDiv shadow'>
            <h5
              style={{
                textAlign: 'center',
                paddingTop: '20px',
              }}
            >
              ضبط كلمة المرور
            </h5>

            <form className='ResetPassForm'>
              <div className='form-group'>
                <label htmlFor='formGroupExampleInput'>
                  كلمة المرور الجديدة
                </label>
                <input
                  type='password'
                  id='formGroupExampleInput'
                  placeholder='●●●●●●●●'
                  style={{ paddingRight: '10px' }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='formGroupExampleInput2'>
                  تأكيد كلمة المرور
                </label>
                <input
                  type='password'
                  id='formGroupExampleInput2'
                  placeholder='●●●●●●●●'
                  style={{ paddingRight: '10px' }}
                />
              </div>
            </form>

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
                marginButtom: '10px',
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
      </div>
    );
  }
}

export default ResetPassword;
