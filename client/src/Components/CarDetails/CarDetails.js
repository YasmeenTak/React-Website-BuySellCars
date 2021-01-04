import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';

import './style.css';
import NavbarlogIn from '../NavBar/NavbarlogIn';

export class CarDetails extends Component {
  // handleClick() {
  //   swal({
  //     text: 'تم استقبال الطلب, سنتواصل معك في أقرب فرصة',
  //     icon: 'success',
  //     button: 'العودة إلى الصفحة الرئيسية',
  //   });
  // }
  // border: '1px solid black'
  // style={{ border: '1px solid black'}}
  render() {
    return (
      <div>
        <NavbarlogIn />
        <div className='container mainContainer shadow '>
          <div className='row'>
            <div className='col-lg-6 carImgSlider'>
              <p className='backBtn'>رجوع</p>

              <img
                src='/assets/img/car5.jpg'
                alt='#'
                style={{ width: '100%' }}
                id='CarImg'
              />

              <div className='small-img-row'>
                <div className='small-img-col'>
                  <img
                    src='/assets/img/car5.jpg'
                    alt='#'
                    style={{ width: '100%' }}
                    className='small-img'
                  />
                </div>

                <div className='small-img-col'>
                  <img
                    src='/assets/img/car5.jpg'
                    alt='#'
                    style={{ width: '100%' }}
                    className='small-img'
                  />
                </div>

                <div className='small-img-col'>
                  <img
                    src='/assets/img/car5.jpg'
                    alt='#'
                    style={{ width: '100%' }}
                    className='small-img'
                  />
                </div>
                <div className='small-img-col'>
                  <img
                    src='/assets/img/car5.jpg'
                    alt='#'
                    style={{ width: '100%' }}
                    className='small-img'
                  />
                </div>
              </div>
            </div>
            {/* -------------------------------------------Details Start--------------------------------------------- */}
            <div className='col-lg-6 single-product leftDetailsDiv'>
              <div></div>
              <div className='row firstRow'>
                <div
                  className='col-sm releaseYear'
                  style={{ textAlign: 'right' }}
                >
                  2019
                </div>
                <div className='col-sm' style={{ textAlign: 'left' }}>
                  <FontAwesomeIcon icon={farFaHeart} className='favHeart' />
                </div>
              </div>

              <div className='row'>
                <div className='col-sm' style={{ textAlign: 'right' }}>
                  <p>
                    براند السيارة / <span className='modelCar'>الموديل</span>
                  </p>
                </div>
                <div className='col-sm ' style={{ textAlign: 'left' }}>
                  <span className='priceCar'>$ 33,650.00</span>
                </div>
              </div>
              <div
                style={{
                  textAlign: 'right',
                  color: '#9F9F9F',
                }}
              >
                اسم البائع
              </div>

              <div className='row grayDetailsDiv'>
                <div className='col-sm FinancialStatus grayDetailsGroup'>
                  مدفوعة
                </div>
                <div className='col-sm carType grayDetailsGroup'>أوتوماتيك</div>
                <div className='col-sm carMileage grayDetailsGroup'>
                  100 ميل
                </div>
              </div>
              <div>
                <p style={{ textAlign: 'right' }}>بحالة ممتازة</p>
              </div>
              <div>
                <p style={{ textAlign: 'right' }}>أبواب ورباعية الدفع 4</p>
              </div>

              <div>
                <p style={{ textAlign: 'right' }}>
                  تمتلك بيجاس محرك 1400 سي سي، رباعي الأسطوانات بسعة 1.4 لتر،
                  وقوة المحرك 95 حصان وقوة عزم 145 نيوتن/متر، حيث تصل عدد دورات
                  المحرك الى 6000 دورة في الدقيقة الواحدة، نظام الجر الأمامي.
                  تبلغ السرعة القصوى للسيارة : 185 كم / س . خزان الوقود السيارة
                  يتسع إلى 43 لتراً
                </p>
                <div>
                  <lu style={{ textAlign: 'right', direction: 'rtl' }}>
                    <li>
                      <span>متوفر منها اللون الأبيض</span>
                    </li>
                  </lu>
                </div>

                <div className='row keywordsDiv'>
                  <div className='col-sm-2 keywords'>
                    <span>#cars</span>
                  </div>
                  <div className='col-sm-2 keywords'>#براند</div>
                  <div className='col-sm-2 keywords'>#سيارات</div>
                </div>

                <Button
                  variant='primary'
                  type='submit'
                  data-target='#ReserveCar'
                  data-toggle='modal'
                  style={{
                    background: '#ff6c37',
                    border: '1px solid #ff6c37',
                    borderRadius: '12px',
                    width: '160px',
                    float: 'center',
                    marginTop: '20px',
                  }}
                >
                  حجز للشراء
                </Button>

                {/* -----------------------------Reserve Car---------------------------------------- */}
                <div
                  class='modal fade'
                  id='ReserveCar'
                  tabindex='-1'
                  role='dialog'
                  aria-labelledby='ReserveCarTitle'
                  aria-hidden='true'
                >
                  <div
                    class='modal-dialog modal-dialog-centered'
                    role='document'
                  >
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
                        style={{ margin: 'auto', width: '100%' }}
                      >
                        <p style={{ textAlign: 'center' }}>
                          تم استقبال الطلب, سنتواصل معك في أقرب فرصة
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
                {/* ---------------------------------------------------------------------- */}
              </div>
            </div>
            {/* -------------------------------------------Details End--------------------------------------------- */}
          </div>
        </div>
      </div>
    );
  }
}

export default CarDetails;
