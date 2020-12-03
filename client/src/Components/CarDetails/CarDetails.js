import React, { Component } from 'react';
import './style.css';

export class CarDetails extends Component {
  render() {
    return (
      <div className='container single-product'>
        <div className='row'>
          <div className='col-6'>
            <p>براند السيارة</p>
            <h7>اسم البائع</h7>
          </div>
          <div className='col-6 carImgSlider'>
            <img src='/assets/img/car5.jpg' style={{ width: '100%' }} id='CarImg' />

            <div className='small-img-row '>
              <div className='small-img-col'>
                <img src='/assets/img/car5.jpg' style={{ width: '100%' }} className='small-img' />
              </div>

              <div className='small-img-col'>
                <img src='/assets/img/car5.jpg' style={{ width: '100%' }} className='small-img'/>
              </div>

              <div className='small-img-col'>
                <img src='/assets/img/car5.jpg' style={{ width: '100%' }} className='small-img' />
              </div>
              <div className='small-img-col'>
                <img src='/assets/img/car5.jpg' style={{ width: '100%' }} className='small-img'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarDetails;
