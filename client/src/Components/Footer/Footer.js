import React, { Component } from 'react';
import {
  faApple,
  faFacebookF,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className='footer'>
          <div className='container py-5'>
            <div className='row py-4'>
              <div className='col-lg-4 col-md-6 mb-lg-0'>
                <h6 className='text-uppercase font-weight-bold mb-4'>
                  النشرة الإخبارية
                </h6>
                <p className='text mb-4'>
                  ليصلك كل جديد الرجاء الاشتراك بكتابة البريد الإلكتروني
                </p>
                {/* <div className='input-group'>
                  <input
                    type='email'
                    placeholder='jeamen1990@gmail.com'
                    aria-describedby='button-addon1'
                    className='form-control border-0 shadow-0'
                  />
                  <div className='input-group-append'>
                    <button
                      id='button-addon1'
                      type='submit'
                      className='btn btn-link'
                    >
                      <i className='fa fa-paper-plane'></i>
                    </button>
                  </div>
                </div> */}

                <div className='input-group mb-3'>
                  <div className='input-group-prepend'>
                    <button
                      className='btn btn-outline-secondary'
                      type='button'
                      style={{
                        backgroundColor: '#FFC107',
                        color: 'white',
                        border: '#FFC107',
                      }}
                    >
                      اشتراك
                    </button>
                  </div>
                  <input
                    className='border-0 shadow-0'
                    type='email'
                    placeholder='jeamen1990@gmail.com'
                    className='form-control'
                    aria-label=''
                    aria-describedby='basic-addon1'
                  />
                </div>
              </div>
              <div
                className='col-lg-2 col-md-6 mb-4 mb-lg-0'
                id='categoriesSec'
              >
                {/* <h6 className='text-uppercase font-weight-bold mb-4'>التصنيفات</h6> */}
                <ul className='list-unstyled mb-0'>
                  <li className='mb-2'>
                    <a href='#' className='text'>
                      التصنيفات
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#' className='text'>
                      السيارات المميزة
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#' className='text'>
                      السيارات الأخيرة
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#' className='text'>
                      المتعاقدون-أصحاب المعارض
                    </a>
                  </li>
                </ul>
              </div>
              <div className='col-lg-2 col-md-6 mb-4 mb-lg-0'>
                {/* <h6 className='text-uppercase font-weight-bold mb-4'>روابط مهمة</h6> */}
                <ul className='list-unstyled mb-0' id='ImportantlinksSec'>
                  <li className='mb-2'>
                    <a href='#' className='text'>
                      روابط مهمة
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#' className='text'>
                      اتصل بنا
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#' className='text'>
                      الأسئلة الأكثر تكرار
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#' className='text'>
                      من نحن؟
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href='#' className='text'>
                      شروط الاستخدام
                    </a>
                  </li>

                  <li className='mb-2'>
                    <a href='#' className='text'>
                      سياسة الخصوصية
                    </a>
                  </li>
                </ul>
              </div>

              <div className='col-lg-4 col-md-6 mb-4 mb-lg-0'>
                <img
                  src='assets/img/logo.png'
                  alt=''
                  width='180'
                  className='mb-3'
                />
                <div className='socialMediaIcons'>
                  <FontAwesomeIcon
                    icon={faApple}
                    style={{ color: 'black', marginRight: '20px' }}
                  />
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    style={{ color: '#00719B', marginRight: '20px' }}
                  />
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ color: '#1BA5EC', marginRight: '20px' }}
                  />
                </div>

                <div className='appButton'>
                  <a href='https://play.google.com/store' target='_blank'>
                    <img src='/assets/img/googlePlay.png' id='appBtn' />
                  </a>
                  <a href='https://www.apple.com/app-store/' target='_blank'>
                    <img src='/assets/img/appleStore.png' id='appBtn' />
                  </a>
                </div>

                <ul className='list-inline mt-4'>
                  <li className='list-inline-item'>
                    <a href='#' target='_blank' title='twitter'>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='#' target='_blank' title='facebook'>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='#' target='_blank' title='instagram'>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='#' target='_blank' title='pinterest'>
                      <i className='fa fa-pinterest'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='#' target='_blank' title='vimeo'>
                      <i className='fa fa-vimeo'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
