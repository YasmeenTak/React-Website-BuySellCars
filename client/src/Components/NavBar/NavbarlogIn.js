import React, { Component } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiCar } from 'react-icons/bi';
import { Button } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';

import './styleLogin.css';

export class NavbarlogIn extends Component {
  render() {
    return (
      <nav class='navbar navbar-expand-lg navbar-light bg-light shadow-sm'>
        <a class='navbar-brand' href='#'>
          <img src='assets/img/logo.png' className='logoImg' />
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>

        <div
          class='collapse navbar-collapse  justify-content-between'
          id='navbarSupportedContent'
        >
          <ul class='navbar-nav mr-auto'>
            <li class='nav-item active'>
              <a class='nav-link' href='#'>
                <AiOutlineHome
                  size='1.3em'
                  style={{ marginBottom: '8px', marginLeft: '5px' }}
                />
                الرئيسة <span class='sr-only'>(current)</span>
              </a>
            </li>
            <li class='nav-item'>
              <a
                class='nav-link dropdown'
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
                class='dropdown-menu'
                aria-labelledby='dropdownMenu2'
                style={{ textAlign: 'right' }}
              >
                <button
                  class='dropdown-item'
                  type='button'
                  data-toggle='modal'
                  data-target='#exampleModalCenter'
                >
                  تمت عملية البيع بنجاح الرجاء قم بكتابة تقييم
                </button>

                {/* ----------------------------------------------------------------- */}
                <i className='icon'></i>
                <button
                  class='dropdown-item'
                  type='button'
                  data-toggle='modal'
                  data-target='#meetingTimeModal'
                >
                  قام عبدالله فوزي بحجز موعد لشراء السيارة
                </button>
                {/* ----------------------------------------------------------------- */}

                <button class='dropdown-item' type='button'>
                  تم عرض سيارة جديدة للبيع من نوع نيسان
                </button>
                {/* ----------------------------------------------------------------- */}

                <button class='dropdown-item' type='button'>
                  تم نشر عرض جديد من قبل معرض فورد
                </button>
                {/* ----------------------------------------------------------------- */}

                <button class='dropdown-item' type='button'>
                  تم عرض سيارة جديدة للبيع من نوع ميرسيدس
                </button>
              </div>
            </li>

            {/* ------------------------------Modal 1--------------------------------------- */}
            {/* <!-- Modal 1 --> */}
            <div
              class='modal fade'
              id='exampleModalCenter'
              tabindex='-1'
              role='dialog'
              aria-labelledby='exampleModalCenterTitle'
              aria-hidden='true'
            >
              <div class='modal-dialog modal-dialog-centered' role='document'>
                <div class='modal-content modal1body'>
                  <div class='modal-headear'>
                    <div className='AvaterImgModal'>
                      <img
                        src='assets/img/avater2.jpg'
                        alt='Avatar'
                        className='userImgModal img-responsive'
                      />
                    </div>
                  </div>
                  <div class='modal-body'>
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
                  <div class='modal-footer'>
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
              class='modal  fade'
              id='sendRating'
              tabindex='-1'
              role='dialog'
              aria-labelledby='sendRatingTitle'
              aria-hidden='true'
            >
              <div class='modal-dialog modal-dialog-centered' role='document'>
                <div class='modal-content modal2SendRate'>
                  <div class='modal-header'>
                    <img
                      src='assets/img/success2.jpg'
                      alt='succsses'
                      className='successImg img-responsive'
                    />
                  </div>
                  <div
                    class='modal-body'
                    style={{ margin: 'auto', width: '80%' }}
                  >
                    <p style={{ textAlign: 'center' }}>
                      سنقوم بأخذ هذه التقييمات بعين الاعتبار
                      <br /> لتطوير التطبيق, شكرا لتعاونكم
                    </p>
                  </div>
                  <div class='modal-footer' style={{ margin: 'auto' }}>
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
              class='modal fade'
              id='meetingTimeModal'
              tabindex='-1'
              role='dialog'
              aria-labelledby='meetingTimeModalTitle'
              aria-hidden='true'
            >
              <div class='modal-dialog modal-dialog-centered' role='document'>
                <div class='modal-content meetingDetails'>
                  <div class='modal-headear'>
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
                  <div class='modal-body meetingBody'>
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
                  <div class='modal-footer btnsMeetingModal'>
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
              class='modal  fade'
              id='meetingModal2'
              tabindex='-1'
              role='dialog'
              aria-labelledby='meetingModal2Title'
              aria-hidden='true'
            >
              <div class='modal-dialog modal-dialog-centered' role='document'>
                <div class='modal-content modal2SendRate'>
                  <div class='modal-header'>
                    <img
                      src='assets/img/success2.jpg'
                      alt='succsses'
                      className='successImg img-responsive'
                    />
                  </div>
                  <div
                    class='modal-body'
                    style={{ margin: 'auto', width: '80%' }}
                  >
                    <p style={{ textAlign: 'center' }}>تم تأكيد الموعد</p>
                  </div>
                  <div class='modal-footer' style={{ margin: 'auto' }}>
                    <a href='#home Page' data-dismiss='modal'>
                      العودة إلى الصفحة الرئيسية
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* ---------------------------------------------------------------------- */}

            <li class='nav-item'>
              <a class='nav-link' href='#'>
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
            <Button
              variant='outline-success'
              className='singInBtn mr-sm-2 mr-1'
              style={{
                background: '#FFFFFF',
                color: '#ff6c37',
                border: '1px solid #ff6c37',
                borderRadius: '7px',
                height: '38px',
              }}
            >
              + إعلان جديد
            </Button>
            <li class='nav-item dropdown' style={{ direction: 'ltr' }}>
              <a
                class='nav-link dropdown-toggle'
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
                class='dropdown-menu'
                aria-labelledby='navbarDropdown'
                style={{ direction: 'ltr' }}
              >
                <a class='dropdown-item' href='#'>
                  المفضلة
                </a>
                <a class='dropdown-item' href='#'>
                  من نحن؟
                </a>
                <a class='dropdown-item' href='#'>
                  تواصل معنا
                </a>
                <a class='dropdown-item' href='#'>
                  سياسة الخصوصية
                </a>
                <a class='dropdown-item' href='#'>
                  شروط الاستخدام
                </a>
              </div>
            </li>
          </ul>
          <form class='form-inline my-2 my-lg-0'>
            <img
              src='assets/img/profileImg.jpg'
              alt='Avatar'
              className='userImgNav img-responsive'
            />
          </form>
        </div>
      </nav>
    );
  }
}

export default NavbarlogIn;
