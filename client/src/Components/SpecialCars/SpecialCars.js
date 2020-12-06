import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';
import './style.css';

export class SpecialCars extends Component {
  render() {
    return (
      <div>
        <div className='titleDiv'>
          <p className='titleMain'>السيارات المميزة</p>
          <p className='titleSub'>
            السيارات المميزة ذات المواصفات العالية السيارات المميزة ذات
            المواصفات العالية
          </p>
        </div>
        <div className='container mt-5'>
          <div className='card'>
            <div className='row'>
              <div className='col-md-8'>
                <h5 className='card-title mt-2'>براند السيارة/الموديل</h5>
                <Rating name='size-medium' defaultValue={2} />

                <p>
                  تمتلك بيجاس محرك 1400 سي سي، رباعي الأسطوانات بسعة 1.4 لتر،
                  وقوة المحرك 95 حصان وقوة عزم 145 نيوتن/متر، حيث تصل عدد دورات
                  المحرك الى 6000 دورة في الدقيقة الواحدة، نظام الجر الأمامي.
                  تبلغ السرعة القصوى للسيارة : 185 كم / س . خزان الوقود السيارة
                  يتسع إلى 43 لتراً
                </p>
              </div>

              <div className='col-md-4'>
                <img src='/assets/img/lap.jpg' className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SpecialCars;

/* <div class='w3-show-inline-block' id='groupBtn'>
<div class='w3-bar'>
  <button class='w3-btn w3' id='dealersBtn'>
    المتعاقدون (المعارض)
  </button>
  <button class='w3-btn w3' id='otherCarsBtn'>
    السيارات الأخيرة
  </button>
  <button class='w3-btn w3' id='specialCarsBtn'>
    السيارات المميزة
  </button>
</div>
</div> */
