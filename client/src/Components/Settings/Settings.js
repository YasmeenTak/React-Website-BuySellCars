import React, { Component } from 'react';
import { BsToggleOn } from 'react-icons/bs';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link, Redirect, Route, Router } from 'react-router-dom';

import Footer from '../Footer/Footer';
import NavbarlogIn from '../NavBar/NavbarlogIn';
import './style.css';

export class Settings extends Component {
  render() {
    return (
      <div>
        <NavbarlogIn/>
        <div className='container settingsCont' style={{ direction: 'rtl' }}>
          <div className='row'>
            <div className='col settingWord' style={{ fontSize: 'larger' }}>
              الإعدادات
            </div>
            <div className='col settingIcon'>
              <i
                className='icon-settings'
                style={{ color: 'black', fontSize: '1.3em' }}
              ></i>
            </div>
          </div>
          <span className='divider'></span>

          <div className='row'>
            <div className='col settingWord'>تفعيل الإشعارات</div>
            <div className='col settingIcon' style={{ paddingLeft: '30px' }}>
              <BsToggleOn style={{ fontSize: '1.5em' }} />
            </div>
          </div>
          <span className='divider'></span>

          <div className='row'>
            <div className='col settingWord'>
              {/* <Link to='/change password'></Link> */}
              <a href='/change password'>تغيير كلمة المرور </a>
            </div>
            <div className='col settingIcon' style={{ paddingLeft: '30px' }}>
              <RiLockPasswordLine style={{ fontSize: '1.5em' }} />
            </div>
          </div>
          <span className='divider'></span>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Settings;
