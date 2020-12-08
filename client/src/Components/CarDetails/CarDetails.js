import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';

import './style.css';

export class CarDetails extends Component {
  // border: '1px solid black'
  // style={{ border: '1px solid black'}}
  render() {
    return (
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
            <div className='row' style={{ margin: '20px' }}>
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

            <div className='row' style={{ margin: '10px' }}>
              <div className='col-sm' style={{ textAlign: 'right' }}>
                <div className='col-sm'>
                  <p
                    className='card-titlse'
                    // style={{ border: '1px solid black' }}
                  >
                    براند السيارة / <span className='model'>الموديل</span>
                  </p>
                </div>
              </div>
              <div className='col-sm ' style={{ textAlign: 'left' }}>
                <span className='priceCar'>$ 33,650.00</span>
              </div>
            </div>
            <div>
              <p style={{ textAlign: 'right' }}>اسم البائع/المعرض</p>
            </div>

            <div className='row'>
              <div className='col-sm FinancialStatus a'>مدفوعة</div>
              <div className='col-sm carType a'>أوتوماتيك</div>
              <div className='col-sm carMileage a'>100 ميل</div>
            </div>
            <div>
              <p style={{ textAlign: 'right' }}>بحالة ممتازة</p>
            </div>
            <div>
              <p style={{ textAlign: 'right' }}>أبواب ورباعية الدفع 4</p>
            </div>

            <div>
              <p style={{ textAlign: 'right' }}>
                تمتلك بيجاس محرك 1400 سي سي، رباعي الأسطوانات بسعة 1.4 لتر، وقوة
                المحرك 95 حصان وقوة عزم 145 نيوتن/متر، حيث تصل عدد دورات المحرك
                الى 6000 دورة في الدقيقة الواحدة، نظام الجر الأمامي. تبلغ السرعة
                القصوى للسيارة : 185 كم / س . خزان الوقود السيارة يتسع إلى 43
                لتراً
              </p>
              <div>
                <lu style={{ textAlign: 'right', direction: 'rtl' }}>
                  <li>
                    <span>متوفر منها اللون الأبيض</span>
                  </li>
                </lu>
              </div>

              <div class='row'>
                <div class='col-sm'>#cars</div>
                <div class='col-sm'>#براند</div>
                <div class='col-sm'>#سيارات</div>
              </div>

              <Button
                variant='primary'
                type='submit'
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
            </div>
          </div>
          {/* -------------------------------------------Details End--------------------------------------------- */}
        </div>
      </div>
    );
  }
}

export default CarDetails;
