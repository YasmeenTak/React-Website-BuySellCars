import React, { Component } from 'react';
//import { Row, Col, Footer } from 'react-bootstrap';
import './style.css';
import Head from '../Head/Head';
import Footer from '../Footer/Footer';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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
  arrows: true,
  dots: true,
  infinite: false,
  rewind: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  initialSlide: 6,
  rtl: true,
};

export class home extends Component {
  render() {
    // const breakpoint = [
    //   { width: 500, itemToShow: 1 },
    //   { width: 768, itemToShow: 2 },
    //   { width: 1200, itemToShow: 3 },
    //   { width: 1500, itemToShow: 4 },
    // ];
    return (
      <div>
        {/* <OwlCarousel className='owl-theme' loop margin={5} nav></OwlCarousel> */}
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
              {/* <p id='topCars'>السيارات المميزة</p> */}
              {/* <p className='col'>
                السيارات المميزة ذات الموصفات العالية السيارات المميزة ذات
                الموصفات العالية
              </p> */}
            </div>
          </div>

          {/* ----------------------------------------------- slider start ------------------------------------------ */}
          <div>
            <form id='formSlider'>
              <div className='titlesSliderDiv'>
                <h5 className='titleSlider'>السيارات المميزة</h5>
                <h6 className='subTitleSlider'>
                  السيارات المميزة ذات المواصفات العالية السيارات المميزة ذات
                  المواصفات العالية
                </h6>
              </div>
              <Slider className='renderComady' {...settings}>
                <img src='/assets/img/car 4.png' className='imgSlider' />
                <img src='/assets/img/lap.jpg' className='imgSlider' />
                <img src='/assets/img/car 4.png' className='imgSlider' />
                <img src='/assets/img/car 2.png' className='imgSlider' />
                <img src='/assets/img/car1.png' className='imgSlider' />
                <img src='/assets/img/car 4.png' className='imgSlider' />
                <img src='/assets/img/car 2.png' className='imgSlider' />
                <img src='/assets/img/car 4.png' className='imgSlider' />
                <img src='/assets/img/lap.jpg' className='imgSlider' />
                <img src='/assets/img/car 4.png' className='imgSlider' />
                <img src='/assets/img/car 2.png' className='imgSlider' />
                <img src='/assets/img/car1.png' className='imgSlider' />
                <img src='/assets/img/car 4.png' className='imgSlider' />
                <img src='/assets/img/car 2.png' className='imgSlider' />
              </Slider>
            </form>
          </div>

          <div>
            <form id='formSlider'>
              <div className='titlesSliderDiv'>
                <h5 className='titleSlider'>السيارات الأخيرة</h5>
                <h6 className='subTitleSlider'>
                  السيارات ذات المواصفات المتفاوتة والتي يمكن الوصول إليه في أي
                  وقت
                </h6>
              </div>
              <Slider className='renderComady' {...settings}>
                <img src='/assets/img/car 4.png' className='imgSlider' />
                <img src='/assets/img/lap.jpg' className='imgSlider' />
                <img src='/assets/img/car 4.png' className='imgSlider' />
                <img src='/assets/img/car 2.png' className='imgSlider' />
                <img src='/assets/img/car1.png' className='imgSlider' />
                <img src='/assets/img/car 4.png' className='imgSlider' />
                <img src='/assets/img/car 2.png' className='imgSlider' />
                <img src='/assets/img/car 4.png' className='imgSlider' />
                <img src='/assets/img/lap.jpg' className='imgSlider' />
                <img src='/assets/img/car 4.png' className='imgSlider' />
                <img src='/assets/img/car 2.png' className='imgSlider' />
                <img src='/assets/img/car1.png' className='imgSlider' />
                <img src='/assets/img/car 4.png' className='imgSlider' />
                <img src='/assets/img/car 2.png' className='imgSlider' />
              </Slider>
            </form>
          </div>

          <div>
            <form id='formSlider'>
              <div className='titlesSliderDiv'>
                <h5 className='titleSlider'>المتعاقدون</h5>
                <h6 className='subTitleSlider'>
                  السيارات التابعة لمعارض متنوعة ومختلفة وبعدة مواصفات
                </h6>
              </div>
              <Slider className='renderComady' {...settings}>
                <img src='/assets/img/car 4.png' className='imgSlider' />
                <img src='/assets/img/lap.jpg' className='imgSlider' />
                <img src='/assets/img/car 4.png' className='imgSlider' />
                <img src='/assets/img/car 2.png' className='imgSlider' />
                <img src='/assets/img/car1.png' className='imgSlider' />
                <img src='/assets/img/car 4.png' className='imgSlider' />
                <img src='/assets/img/car 2.png' className='imgSlider' />
                <img src='/assets/img/car 4.png' className='imgSlider' />
                <img src='/assets/img/lap.jpg' className='imgSlider' />
                <img src='/assets/img/car 4.png' className='imgSlider' />
                <img src='/assets/img/car 2.png' className='imgSlider' />
                <img src='/assets/img/car1.png' className='imgSlider' />
                <img src='/assets/img/car 4.png' className='imgSlider' />
                <img src='/assets/img/car 2.png' className='imgSlider' />
              </Slider>
            </form>
          </div>
        </div>

        {/* ----------------------------------------------- slider end ------------------------------------------ */}
        <Footer />
      </div>
    );
  }
}

export default home;
