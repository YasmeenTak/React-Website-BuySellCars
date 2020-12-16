import React, { Component } from 'react';
// import { IconContext } from 'react-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FiMapPin } from 'react-icons/fi';
import { FaFax, FaUserTie } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { ImPhone } from 'react-icons/im';
import { Button } from 'react-bootstrap';
import Footer from '../Footer/Footer';

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
            <div className='col-lg-6'>
              <form>
                <div className='inputCUDiv'>
                  <input
                    type='text'
                    placeholder='الاسم كاملاً'
                    className='form-control inputCU shadow'
                  />
                  <i className='i icon-icon'></i>
                </div>
                <div className='inputCUDiv'>
                  <input
                    type='text'
                    placeholder='البريد الإلكتروني'
                    className='form-control inputCU shadow '
                  />
                  <i className='i icon-mail'></i>
                </div>

                <div>
                  <div className='inputCUDiv'>
                    <input
                      type='text'
                      placeholder='نص الرسالة'
                      className='form-control inputCU shadow'
                      style={{ paddingBottom: '150px', paddingTop: '30px' }}
                    />
                    {/* <i className='i icon-icon'></i> */}
                  </div>
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
                  marginBottom: '30px',
                  width: '170px',
                  marginTop: '10px',
                }}
              >
                إرسال
              </Button>
            </div>

            <div className='col-lg-6'>
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
        <Footer />
      </div>
    );
  }
}

export default ContactUs;
