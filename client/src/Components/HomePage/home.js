import React, { Component } from 'react';
//import { Row, Col, Footer } from 'react-bootstrap';
// import Carousel from 'react-elastic-carousel';
import slidesToShowPlugin from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

import Carousel from 'react-elastic-carousel';

// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

// import OwlCarousel from 'react-owl-carousel2';
//import 'react-owl-carousel2/style.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './style.css';
import Head from '../Head/Head';
import Footer from '../Footer/Footer';

import Slider from 'bootstrap';

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

//-----------------------------------------------------------------

const options = {
  items: 6,
  nav: true,
  rewind: true,
  autoplay: true,
  dots: true,
  responsive: {
    0: {
      items: 6,
    },
    600: {
      items: 6,
    },
    1000: {
      items: 6,
    },
  },
};

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
};

export class home extends Component {
  render() {
    const breakpoint = [
      { width: 500, itemToShow: 1 },
      { width: 768, itemToShow: 2 },
      { width: 1200, itemToShow: 3 },
      { width: 1500, itemToShow: 4 },
    ];
    return (
      <div>
        <OwlCarousel className='owl-theme' loop margin={5} nav></OwlCarousel>
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
          <div>
            <form>
              <h2> Comady </h2>
              <Slider className='renderComady' {...settings}>
                <img src='/assets/img/car 4.png' className='zeft' />
              </Slider>

              <h2> Action </h2>
              <Slider className='renderComady' {...settings}>
                <img src='/assets/img/car 4.png' className='zeft' />
              </Slider>

              <h2> Animation </h2>
              <Slider className='renderComady' {...settings}>
                <img src='/assets/img/car 4.png' className='zeft' />
              </Slider>

              <h2> Romantic </h2>
              <Slider className='renderComady' {...settings}>
                <img src='/assets/img/car 4.png' className='zeft' />
              </Slider>
            </form>
            <Carousel
              breakpoint={breakpoint}
              // plugins={[
              //   'infinite',
              //   'arrows',
              //   {
              //     resolve: slidesToShowPlugin,
              //     options: {
              //       numberOfSlides: 6,
              //     },
              //   },
              // ]}
            >
              <img src='/assets/img/lap.jpg' className='zeft' />
              <img src='/assets/img/car1.png' className='zeft' />
              <img src='/assets/img/car 4.png' className='zeft' />
              <img src='/assets/img/car 4.png' className='zeft' />
              <img src='/assets/img/car 2.png' className='zeft' />
              <img src='/assets/img/car 4.png' className='zeft' />
              <img src='/assets/img/car 2.png' className='zeft' />
            </Carousel>
          </div>
          {/* <Carousel responsive={responsive} className='carouselSlider'>
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
          </Carousel> */}

          <OwlCarousel ref='car' options={options}>
            <div>
              <img
                src='/assets/img/car 4.png'
                alt='car'
                className='imgSlider'
              />
            </div>
            <div>
              <img
                src='/assets/img/car 2.png'
                alt='car'
                className='imgSlider'
              />
            </div>
            <div>
              <img src='/assets/img/car1.png' alt='car' className='imgSlider' />
            </div>
            <div>
              <img
                src='/assets/img/car 4.png'
                alt='car'
                className='imgSlider'
              />
            </div>
            <div>
              <img
                src='/assets/img/car 2.png'
                alt='car'
                className='imgSlider'
              />
            </div>
            <div>
              <img src='/assets/img/car1.png' alt='car' className='imgSlider' />
            </div>
          </OwlCarousel>

          {/* ----------------------------------------------- slider end ------------------------------------------ */}

          <div class='container-fluid '>
            <div class='owl-carousel owl-them'>
              <div class='item'>
                <div class='card bg-dark text-white mb-3 mb-lg-0'>
                  <img src='/assets/img/car 4.png' class='card-img' alt='...' />
                </div>
              </div>
              <div class='item'>
                <div class='card bg-dark text-white mb-3 mb-lg-0'>
                  <img src='/assets/img/car 2.png' class='card-img' alt='...' />
                </div>
              </div>
              <div class='item'>
                <div class='card bg-dark text-white mb-3 mb-lg-0'>
                  <img src='/assets/img/car 4.png' class='card-img' alt='...' />
                </div>
              </div>
              <div class='item'>
                <div class='card bg-dark text-white mb-3 mb-lg-0'>
                  <img src='/assets/img/car 4.png' class='card-img' alt='...' />
                </div>
              </div>
              <div class='item'>
                <div class='card bg-dark text-white mb-3 mb-lg-0'>
                  <img src='/assets/img/car 4.png' class='card-img' alt='...' />
                </div>
              </div>
              <div class='item'>
                <div class='card bg-dark text-white mb-3 mb-lg-0'>
                  <img src='/assets/img/car 4.png' class='card-img' alt='...' />
                </div>
              </div>
              <div class='item'>
                <div class='card bg-dark text-white mb-3 mb-lg-0'>
                  <img src='/assets/img/car 4.png' class='card-img' alt='...' />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    );
  }
}

export default home;
