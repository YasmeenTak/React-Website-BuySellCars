import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './style.css';

export class Registration extends Component {
  render() {
    return (
      <div className='mainDiv'>
        <div className='col regImgDiv'>
          <img src='/assets/img/register.png' className='registerImg' />
        </div>

        <div className='col formDiv'>
          {/* <h5 className='titleReg'>إنشاء حساب جديد</h5> */}
          <form>
            <label>First name:</label>
            <br />
            <input type='text' id='fname' name='fname' />
            <br />
            <label>Last name:</label>
            <br />
            <input type='text' id='lname' name='lname' />{' '}
          </form>
        </div>
      </div>
    );
  }
}

export default Registration;
