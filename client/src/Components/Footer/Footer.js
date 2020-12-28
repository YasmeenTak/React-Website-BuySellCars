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
        <footer>
          <div className='container py-5'>
            <div className='row py-4'>
              <div className='col-lg-4 col-md-6 mb-4 mb-lg-0 firstSectionFooter'>
                <div>
                  <img
                    src='assets/img/logo.png'
                    alt=''
                    className='mb-3 logoFooter col'
                  />
                </div>
                <div className='socialMediaIcons '>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ color: '#1BA5EC', marginRight: '30px' }}
                  />

                  <FontAwesomeIcon
                    icon={faFacebookF}
                    style={{ color: '#00719B', marginRight: '30px' }}
                  />
                  <FontAwesomeIcon
                    icon={faApple}
                    style={{ color: 'black', marginRight: '30px' }}
                  />
                </div>

                <div className='appButton '>
                  <a href='https://www.apple.com/app-store/' target='_blank'>
                    <img src='/assets/img/appleStore.png' id='appBtn' />
                  </a>
                  <a href='https://play.google.com/store' target='_blank'>
                    <img
                      src='/assets/img/googlePlay.png'
                      id='appBtn'
                      className='googlePlayImg'
                    />
                  </a>
                </div>
                {/* ---------------------------------------------------------------------------- */}
              </div>
              <div className='col-lg-2 col-md-6 mb-4 mb-lg-0 scndSectionFooter'>
                <ul style={{ textAlign: 'right' }}>
                  <li className='mb-2' style={{ textDecoration: 'underline' }}>
                    روابط مهمة
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
              <div className='col-lg-2 col-md-6 mb-4 mb-lg-0 scndSectionFooter'>
                <ul style={{ textAlign: 'right' }}>
                  <li className='mb-2' style={{ textDecoration: 'underline' }}>
                    التصنيفات
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
              {/* ---------------------------------------------------------------------------- */}

              <div className='col-lg-4 col-md-6 mb-lg-0'>
                <p className='text-uppercase  mb-4 pIn3Section'>
                  النشرة الإخبارية
                </p>
                <p className='text mb-4'>
                  ليصلك كل جديد الرجاء الاشتراك بكتابة البريد الإلكتروني
                </p>

                <div className='input-group mb-3 inputGroupFooter'>
                  <input
                    className='border-0 shadow-0'
                    type='email'
                    placeholder='jeamen1990@gmail.com'
                    className='form-control'
                    aria-label=''
                    aria-describedby='basic-addon1'
                  />
                  <div className='input-group-prepend'>
                    <button
                      className='btn btn-outline-secondary'
                      type='button'
                      style={{
                        backgroundColor: '#FFC107',
                        color: 'white',
                        border: '#FFC107',
                        borderRadius: '5px 0 0 5px',
                      }}
                    >
                      اشتراك
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
