import React, { Component } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiCar } from 'react-icons/bi';
import { Button } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import { BiBriefcaseAlt } from 'react-icons/bi';
import { FiPhoneOutgoing, FiFileText, FiAlertCircle } from 'react-icons/fi';
import { TiStarOutline } from 'react-icons/ti';

import './styleLogin.css';

export class NavbarlogIn extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-light shadow-sm py-3'>
          <a className='navbar-brand' href='/home'>
            <img src='assets/img/logo.png' className='logoImg' alt='#' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div
            className='collapse navbar-collapse  justify-content-between'
            id='navbarSupportedContent'
          >
            {/* ---------------------------------Start Nav 3 Items-------------------------------- */}
            <ul className='navbar-nav mr-auto pl-4 mainNavLogin'>
              <li className='nav-item active'>
                <a className='nav-link' href='#'>
                  <AiOutlineHome
                    size='1.3em'
                    style={{ marginBottom: '8px', marginLeft: '5px' }}
                  />
                  الرئيسة
                </a>
              </li>
              <li className='nav-item pr-4 notificationNav'>
                <a
                  className='nav-link dropdown'
                  id='dropdownMenu2'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                  href='#'
                >
                  <IoMdNotificationsOutline
                    size='1.3em'
                    style={{
                      marginBottom: '5px',
                      marginLeft: '5px',
                      color: 'black',
                    }}
                  />
                  الإشعارات
                </a>

                <div
                  className='dropdown-menu dropdownNotification'
                  aria-labelledby='dropdownMenu2'
                  style={{ textAlign: 'right' }}
                >
                  <div className='row'>
                    {/* <div className='col-lg-2'>
                      <img
                        src='./assets/img/buyNot.jpg'
                        alt='buy'
                        className='img-responsive'
                      />
                    </div> */}
                    <div className='c'>
                      <button
                        className='dropdown-item'
                        type='button'
                        data-toggle='modal'
                        data-target='#exampleModalCenter'
                      >
                        تمت عملية البيع بنجاح الرجاء قم بكتابة تقييم
                      </button>
                      <p>قبل 5 أيام</p>
                    </div>
                  </div>
                  <div className='divider'></div>

                  {/* ----------------------------------------------------------------- */}

                  <button
                    className='dropdown-item'
                    type='button'
                    data-toggle='modal'
                    data-target='#meetingTimeModal'
                  >
                    قام عبدالله فوزي بحجز موعد لشراء السيارة
                  </button>
                  <p>قبل 20 دقيقة</p>

                  <div className='divider'></div>

                  {/* ----------------------------------------------------------------- */}

                  <button className='dropdown-item' type='button'>
                    تم عرض سيارة جديدة للبيع من نوع نيسان
                  </button>
                  <p>قبل 10 دقائق</p>
                  <div className='divider'></div>

                  {/* ----------------------------------------------------------------- */}

                  <button className='dropdown-item' type='button'>
                    تم نشر عرض جديد من قبل معرض فورد
                  </button>
                  <p>قبل يومين</p>
                  <div className='divider'></div>

                  {/* ----------------------------------------------------------------- */}

                  <button className='dropdown-item' type='button'>
                    تم عرض سيارة جديدة للبيع من نوع ميرسيدس
                  </button>
                  <p>قبل 3 أيام</p>
                </div>
              </li>
              {/* ------------------------------Modal 1--------------------------------------- */}
              {/* <!-- Modal 1 --> */}
              <div
                className='modal fade'
                id='exampleModalCenter'
                tabIndex='-1'
                role='dialog'
                aria-labelledby='exampleModalCenterTitle'
                aria-hidden='true'
              >
                <div
                  className='modal-dialog modal-dialog-centered'
                  role='document'
                >
                  <div className='modal-content modal1body'>
                    <div className='modal-headear'>
                      <div className='AvaterImgModal'>
                        <img
                          src='assets/img/avater2.jpg'
                          alt='Avatar'
                          className='userImgModal img-responsive'
                        />
                      </div>
                    </div>
                    <div className='modal-body'>
                      <p className='textModal'>
                        تمت عملية البيع بنجاح الرجاء قم بكتابة تقييم يشمل عملية
                        البيع عن طريق التطبيق ودور البائع في تسهيل المهمة
                      </p>
                      <div>
                        <Rating
                          name='size-medium'
                          defaultValue={2}
                          style={{
                            direction: 'ltr',
                            color: '#FF6C37',
                            marginBottom: '20px',
                          }}
                        />
                      </div>
                      <input
                        type='text'
                        className='inputModal'
                        placeholder='اكتب تعليق'
                      />
                    </div>
                    <div className='modal-footer'>
                      <Button
                        data-toggle='modal'
                        data-dismiss='modal'
                        data-target='#sendRating'
                        className='btnSend'
                        variant='primary'
                        type='submit'
                        style={{
                          background: '#ff6c37',
                          border: '1px solid #ff6c37',
                          borderRadius: '12px',
                          marginBottom: '50px',
                          width: '170px',
                          margin: 'auto',
                        }}
                      >
                        إرسال
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              {/* -----------------------------modal 2---------------------------------------- */}
              <div
                className='modal  fade'
                id='sendRating'
                tabIndex='-1'
                role='dialog'
                aria-labelledby='sendRatingTitle'
                aria-hidden='true'
              >
                <div
                  className='modal-dialog modal-dialog-centered'
                  role='document'
                >
                  <div className='modal-content modal2SendRate'>
                    <div className='modal-header'>
                      <img
                        src='assets/img/success2.jpg'
                        alt='succsses'
                        className='successImg img-responsive'
                      />
                    </div>
                    <div
                      className='modal-body'
                      style={{ margin: 'auto', width: '80%' }}
                    >
                      <p style={{ textAlign: 'center' }}>
                        سنقوم بأخذ هذه التقييمات بعين الاعتبار
                        <br /> لتطوير التطبيق, شكرا لتعاونكم
                      </p>
                    </div>
                    <div className='modal-footer' style={{ margin: 'auto' }}>
                      <a href='#home Page' data-dismiss='modal'>
                        العودة إلى الصفحة الرئيسية
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* --------------------------------------------------------------------- */}
              {/* ------------------------------Meeting time Modal--------------------------------------- */}
              <div
                className='modal fade'
                id='meetingTimeModal'
                tabIndex='-1'
                role='dialog'
                aria-labelledby='meetingTimeModalTitle'
                aria-hidden='true'
              >
                <div
                  className='modal-dialog modal-dialog-centered'
                  role='document'
                >
                  <div className='modal-content meetingDetails'>
                    <div className='modal-headear'>
                      <div className='meetingTimeImgDiv'>
                        <img
                          src='assets/img/meetingtime.jpg'
                          alt='meeting details'
                          className='meetingTimeImg img-responsive'
                        />
                      </div>
                      <div style={{ marginTop: '20px' }}>
                        <p style={{ textAlign: 'center' }}>
                          تم تحديد موعد لمقابلة البائع لمعاينة السيارة
                        </p>
                      </div>
                    </div>
                    <div className='modal-body meetingBody'>
                      <div className='row '>
                        <i className='icon-calendar'></i>
                        <p>20/11/2020</p>
                      </div>
                      <div className='row '>
                        <i className='icon-clock'></i>
                        <p>5:00 p.m.</p>
                      </div>
                      <div className='row '>
                        <i className='icon-map-pin'></i>
                        <p>مطعم الروتس</p>
                      </div>
                    </div>
                    <div className='modal-footer btnsMeetingModal'>
                      <Button
                        data-toggle='modal'
                        data-dismiss='modal'
                        data-target='#meetingModal2'
                        className='btnSend'
                        variant='primary'
                        type='submit'
                        style={{
                          background: '#ff6c37',
                          border: '1px solid #ff6c37',
                          borderRadius: '12px',
                          width: '160px',
                        }}
                      >
                        تأكيد
                      </Button>
                      <Button
                        data-toggle='modal'
                        data-dismiss='modal'
                        className='btnSend'
                        variant='primary'
                        type='submit'
                        style={{
                          background: '#A8A8A8',
                          border: '1px solid #A8A8A8',
                          borderRadius: '12px',
                          width: '160px',
                        }}
                      >
                        إلغاء
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* -----------------------------meeting modal 2---------------------------------------- */}
              <div
                className='modal  fade'
                id='meetingModal2'
                tabIndex='-1'
                role='dialog'
                aria-labelledby='meetingModal2Title'
                aria-hidden='true'
              >
                <div
                  className='modal-dialog modal-dialog-centered'
                  role='document'
                >
                  <div className='modal-content modal2SendRate'>
                    <div className='modal-header'>
                      <img
                        src='assets/img/success2.jpg'
                        alt='succsses'
                        className='successImg img-responsive'
                      />
                    </div>
                    <div
                      className='modal-body'
                      style={{ margin: 'auto', width: '80%' }}
                    >
                      <p style={{ textAlign: 'center' }}>تم تأكيد الموعد</p>
                    </div>
                    <div className='modal-footer' style={{ margin: 'auto' }}>
                      <a href='#home Page' data-dismiss='modal'>
                        العودة إلى الصفحة الرئيسية
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* ---------------------------------------------------------------------- */}

              <li className='nav-item pr-4 pl-4 '>
                <a className='nav-link' href='#'>
                  <BiCar
                    size='1.3em'
                    style={{
                      marginBottom: '5px',
                      marginLeft: '5px',
                    }}
                  />
                  معرضي
                </a>
              </li>
              {/* ---------------------------------End Nav 3 Items-------------------------------- */}

              <Button
                variant='outline-success'
                className='singInBtn mr-sm-2 mr-1'
                style={{
                  background: '#FFFFFF',
                  color: '#ff6c37',
                  border: '1px solid #ff6c37',
                  borderRadius: '7px',
                  height: '36px',
                  padding: '5px',
                  fontSize: 'small',
                }}
              >
                + إعلان جديد
              </Button>
              <li
                className='nav-item dropdown pr-5'
                style={{ direction: 'ltr' }}
              >
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  المزيد
                </a>
                <div
                  className='dropdown-menu moreDropdown'
                  aria-labelledby='navbarDropdown'
                >
                  <a className='dropdown-item' href='#'>
                    المفضلة
                    <i>
                      <TiStarOutline />
                    </i>
                  </a>
                  <div className='divider'></div>

                  <a className='dropdown-item' href='#'>
                    من نحن؟
                    <i>
                      <BiBriefcaseAlt />
                    </i>
                  </a>
                  <div className='divider'></div>

                  <a className='dropdown-item' href='#'>
                    تواصل معنا
                    <i>
                      <FiPhoneOutgoing />
                    </i>
                  </a>
                  <div className='divider'></div>

                  <a className='dropdown-item' href='#'>
                    سياسة الخصوصية
                    <i>
                      <FiFileText />
                    </i>
                  </a>
                  <div className='divider'></div>

                  <a className='dropdown-item' href='#'>
                    شروط الاستخدام
                    <i>
                      <FiAlertCircle />
                    </i>
                  </a>
                </div>
              </li>
            </ul>
            <form className='form-inline my-2 my-lg-0'>
              <img
                src='assets/img/profileImg.jpg'
                alt='Avatar'
                className='userImgNav img-responsive'
              />
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarlogIn;
