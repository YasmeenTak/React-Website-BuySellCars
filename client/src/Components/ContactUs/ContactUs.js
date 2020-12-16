import React, { Component } from 'react';
import { IconContext } from 'react-icons';

import { FiMapPin } from 'react-icons/fi';
import { FaFax } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { ImPhone } from 'react-icons/im';

import './style.css';

export class ContactUs extends Component {
  render() {
    return (
      <div>
        <div className='container-fulid '>
          <div className='contactUsRow'>
            <img
              src='/assets/img/contactus.jpg'
              alt='Contact Us'
              className='contactUS img-responsive'
            />
          </div>
        </div>

        <div className='container mainCCU' style={{ direction: 'rtl' }}>
          <div className='row titleContactUS'>
            <p className='titleCU'>تواصل معنا</p>
          </div>
          <div className='row'>
            <div className='col-lg-6' style={{ border: '1px solid black' }}>
              <input type='text' />
              <input type='text' />
              <input type='text' />
              <button style={{ display: 'flex', margin: 'auto' }}>ok</button>
            </div>
            <div className='col-lg-6' style={{ border: '1px solid black' }}>
              <img src='assets/img/map.jpg' alt='map' className='mapCU' />

              <div class='row contactUsInfo'>
                <div class='col'>
                  <p>
                    <FiMapPin className='cuIcon' />
                    2486 Vauxhall Rd Union NJ 07083
                  </p>
                </div>
                <div class='col'>
                  <p>
                    <ImPhone className='cuIcon' />
                    +1(908) 688-4059
                  </p>
                </div>
                <div class='w-100'></div>
                <div class='col'>
                  <p>
                    <HiOutlineMail className='cuIcon' />
                    gaza-cars2020@gmail.com
                  </p>
                </div>
                <div class='col'>
                  <p>
                    <FaFax className='cuIcon' />
                    +1(908) 688-4059
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

export default ContactUs;
