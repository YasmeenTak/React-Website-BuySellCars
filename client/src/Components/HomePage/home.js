import React, { Component } from 'react';
import Head from '../Head/Head';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/navbar';
import StaticLine from '../StaticLine/staticLine';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
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

//-----------------------------------------------------------------

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
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export class home extends Component {

  render() {
    return (
      <div>
        {/* <StaticLine /> */}
        <NavBar />
        <Head />

        {/* ----------------------------------------------- slider start ------------------------------------------ */}
        <div>
          <form id='formSlider'>
            <div className='titlesSliderDiv'>
              <div className='roaw'>
                {/* <p className='col-sm-6'style={{border:'1px solid black'}}>عرض الكل</p> */}
                <h5 className=' titleSlider '>السيارات المميزة</h5>
              </div>
              <h6 className='subTitleSlider'>
                السيارات المميزة ذات المواصفات العالية السيارات المميزة ذات
                المواصفات العالية
              </h6>
            </div>
            <Slider className='renderComady' {...settings} {...responsive}>
              <img
                src='/assets/img/car 4.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 4.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 2.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car1.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 4.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 2.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 4.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 4.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 2.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car1.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 4.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 2.png'
                className='imgSlider'
                alt='cars'
              />
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
              <img
                src='/assets/img/car 4.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 4.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 2.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car1.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 4.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 2.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 4.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 4.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 2.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car1.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 4.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 2.png'
                className='imgSlider'
                alt='cars'
              />
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
              <img
                src='/assets/img/car 4.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 4.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 2.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car1.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 4.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 2.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 4.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 4.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 2.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car1.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 4.png'
                className='imgSlider'
                alt='cars'
              />
              <img
                src='/assets/img/car 2.png'
                className='imgSlider'
                alt='cars'
              />
            </Slider>
          </form>
        </div>

        {/* ----------------------------------------------- slider end ------------------------------------------ */}
        <Footer />
      </div>
    );
  }
}

export default home;
