import React, { Component } from 'react';
//import { Row, Col, Footer } from 'react-bootstrap';
//import Carousel from 'react-elastic-carousel';
// import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/style.css'

import './style.css';
import Head from '../Head/Head';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export class home extends Component {
  render() {
    return (
      <div>
        <Head />
        {/* ----------------------------------- Section2 ---------------------------------------- */}
        <div>
          <div>
            {/* <div id='row firstInSec2'>
              <p className='col' id='topCars' style={{ fontWeight: 'bold' }}>
                السيارات المميزة
              </p>
              <a className='col'>عرض الكل</a>
            </div>
            <div className='row'>
              <p>
                السيارات المميزة ذات الموصفات العالية السيارات المميزة ذات
                الموصفات العالية
              </p>
            </div> */}
            <div>
              <p id='topCars'>السيارات المميزة</p>
              {/* <p className='col'>
                السيارات المميزة ذات الموصفات العالية السيارات المميزة ذات
                الموصفات العالية
              </p> */}
            </div>
          </div>
          {/* ----------------------------------------------- slider start ------------------------------------------ */}
          {/* <div id='slider'>
              <Carousel
                plugins={[
                  'infinite',
                  'arrows',
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 3,
                    },
                  },
                ]}
              >
                <img src='/assets/img/car 2.png' />
                <img src='/assets/img/car1.png' />
                <img src='/assets/img/car 4.png' />
              </Carousel>
            </div> */}
          <Carousel responsive={responsive} className='carouselSlider'>
            <img src='/assets/img/car 2.png' alt='car' className='imgSlider' />
            <img src='/assets/img/car1.png' alt='car' className='imgSlider' />
            <img src='/assets/img/car 4.png' alt='car' className='imgSlider' />
            <img src='/assets/img/car 2.png' alt='car' className='imgSlider' />
            <img src='/assets/img/car 2.png' alt='car' className='imgSlider' />
            <img src='/assets/img/car1.png' alt='car' className='imgSlider' />
            <img src='/assets/img/car 4.png' alt='car' className='imgSlider' />
            <img src='/assets/img/car 2.png' alt='car' className='imgSlider' />
          </Carousel>
          <p id='topCars'>السيارات الأخيرة</p>

          <Carousel responsive={responsive} className='carouselSlider'>
            <img src='/assets/img/car 2.png' alt='car' className='imgSlider' />
            <img src='/assets/img/car1.png' alt='car' className='imgSlider' />
            <img src='/assets/img/car 4.png' alt='car' className='imgSlider' />
            <img src='/assets/img/car 2.png' alt='car' className='imgSlider' />
            <img src='/assets/img/car 2.png' alt='car' className='imgSlider' />
            <img src='/assets/img/car1.png' alt='car' className='imgSlider' />
            <img src='/assets/img/car 4.png' alt='car' className='imgSlider' />
            <img src='/assets/img/car 2.png' alt='car' className='imgSlider' />
          </Carousel>
          <p id='topCars'>المتعاقدون</p>

          <Carousel responsive={responsive} className='carouselSlider'>
            <img src='/assets/img/car 2.png' alt='car' className='imgSlider' />
            <img src='/assets/img/car1.png' alt='car' className='imgSlider' />
            <img src='/assets/img/car 4.png' alt='car' className='imgSlider' />
            <img src='/assets/img/car 2.png' alt='car' className='imgSlider' />
            <img src='/assets/img/car 2.png' alt='car' className='imgSlider' />
            <img src='/assets/img/car1.png' alt='car' className='imgSlider' />
            <img src='/assets/img/car 4.png' alt='car' className='imgSlider' />
            <img src='/assets/img/car 2.png' alt='car' className='imgSlider' />
          </Carousel>

          {/* ----------------------------------------------- slider end ------------------------------------------ */}
        </div>
      </div>
    );
  }
}

export default home;
