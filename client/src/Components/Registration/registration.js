import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './style.css';

export class Registration extends Component {
  render() {
    return (
      <div className='container mainDiv'>
        <div className='regImgDiv'>
          <img src='/assets/img/register.png' className='registerImg' />
        </div>
        <div className='formDiv'>
          <div className='row'>
            <div className='col-sm-6'>
              <section>
                <label style={{ float: 'right' }}>الاسم الأول</label>
                <input
                  type='text'
                  id='fname'
                  name='fname'
                  placeholder='الاسم الأول'
                />
              </section>
            </div>

            <div className='col-sm-6'>
              <section>
                <label style={{ float: 'right' }}>الاسم الثاني</label>

                <input
                  type='text'
                  id='lname'
                  name='lname'
                  placeholder='الاسم الثاني'
                />
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
