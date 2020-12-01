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
        <footer class='footer'>
          <div class='container py-5'>
            <div class='row py-4'>
              <div class='col-lg-4 col-md-6 mb-lg-0'>
                <h6 class='text-uppercase font-weight-bold mb-4'>
                  النشرة الإخبارية
                </h6>
                <p class='text mb-4'>
                  ليصلك كل جديد الرجاء الاشتراك بكتابة البريد الإلكتروني
                </p>
                <div class='p-1 rounded border'>
                  <div class='input-group'>
                    <input
                      type='email'
                      placeholder='jeamen1990@gmail.com'
                      aria-describedby='button-addon1'
                      class='form-control border-0 shadow-0'
                    />
                    <div class='input-group-append'>
                      <button
                        id='button-addon1'
                        type='submit'
                        class='btn btn-link'
                      >
                        <i class='fa fa-paper-plane'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-lg-2 col-md-6 mb-4 mb-lg-0'>
                {/* <h6 class='text-uppercase font-weight-bold mb-4'>التصنيفات</h6> */}
                <ul class='list-unstyled mb-0'>
                  <li class='mb-2'>
                    <a href='#' class='text'>
                      النصنيفات
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a href='#' class='text'>
                      اتصل بنا
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a href='#' class='text'>
                      الأسئلة الأكثر تكرار
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a href='#' class='text'>
                      من نحن؟
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a href='#' class='text'>
                      شروط الاستخدام
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a href='#' class='text'>
                      سياسة الخصوصية
                    </a>
                  </li>
                </ul>
              </div>
              <div class='col-lg-2 col-md-6 mb-4 mb-lg-0'>
                {/* <h6 class='text-uppercase font-weight-bold mb-4'>روابط مهمة</h6> */}
                <ul class='list-unstyled mb-0'>
                  <li class='mb-2'>
                    <a href='#' class='text'>
                      روابط مهمة
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a href='#' class='text'>
                      اتصل بنا
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a href='#' class='text'>
                      الأسئلة الأكثر تكرار
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a href='#' class='text'>
                      من نحن؟
                    </a>
                  </li>
                  <li class='mb-2'>
                    <a href='#' class='text'>
                      شروط الاستخدام
                    </a>
                  </li>

                  <li class='mb-2'>
                    <a href='#' class='text'>
                      سياسة الخصوصية
                    </a>
                  </li>
                </ul>
              </div>

              <div class='col-lg-4 col-md-6 mb-4 mb-lg-0'>
                <img
                  src='assets/img/logo.png'
                  alt=''
                  width='180'
                  class='mb-3'
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
                
                <ul class='list-inline mt-4'>
                  <li class='list-inline-item'>
                    <a href='#' target='_blank' title='twitter'>
                      <i class='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li class='list-inline-item'>
                    <a href='#' target='_blank' title='facebook'>
                      <i class='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li class='list-inline-item'>
                    <a href='#' target='_blank' title='instagram'>
                      <i class='fa fa-instagram'></i>
                    </a>
                  </li>
                  <li class='list-inline-item'>
                    <a href='#' target='_blank' title='pinterest'>
                      <i class='fa fa-pinterest'></i>
                    </a>
                  </li>
                  <li class='list-inline-item'>
                    <a href='#' target='_blank' title='vimeo'>
                      <i class='fa fa-vimeo'></i>
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
