import React, { Component } from 'react';
//import { Row, Col, Footer } from 'react-bootstrap';
//import Carousel from 'react-elastic-carousel';
// import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
        {/* <section className='header'>
          <Row>
            <Row class='parent'>
              <img src='assets/img/header1.png' className='headRight' />
              <img src='assets/img/carHead.png' className='carHead' />
            </Row>
            <Col>
              <div className='headDetails'>
                <h3 className='pHead1'>
                  نحن هنا لمساعدتك في اختيار السيارة الأفضل لك
                </h3>
                <h6 className='pHead2'>
                  ابحث هنا واحجز سيارتك للشراء وسنقوم بالتواصل معك في أقرب وقت
                </h6>
                <form>
                  <input type='text' placeholder='ابحث هنا' />
                </form>

                <a href='https://play.google.com/store' target='_blank'>
                  <img src='/assets/img/googlePlay.png' id='appBtn' />
                </a>

                <a href='https://www.apple.com/app-store/' target='_blank'>
                  <img src='/assets/img/appleStore.png' id='appBtn' />
                </a>
              </div>
            </Col>
          </Row>
        </section> */}

        <Head />
        {/* ----------------------------------- Section2 ---------------------------------------- */}
        <div>
          <section>
            <div id='firstInSec2'>
              {/* <a>عرض الكل</a> */}
              <p id='topCars' style={{ fontWeight: 'bold' }}>
                السيارات المميزة
              </p>
            </div>
            <p>
              السيارات المميزة ذات الموصفات العالية السيارات المميزة ذات
              الموصفات العالية
            </p>
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
              <img
                src='/assets/img/car 2.png'
                alt='car'
                className='imgSlider'
              />
              <img src='/assets/img/car1.png' alt='car' className='imgSlider' />
              <img
                src='/assets/img/car 4.png'
                alt='car'
                className='imgSlider'
              />
              <img
                src='/assets/img/car 2.png'
                alt='car'
                className='imgSlider'
              />
              <img
                src='/assets/img/car 2.png'
                alt='car'
                className='imgSlider'
              />
              <img src='/assets/img/car1.png' alt='car' className='imgSlider' />
              <img
                src='/assets/img/car 4.png'
                alt='car'
                className='imgSlider'
              />
              <img
                src='/assets/img/car 2.png'
                alt='car'
                className='imgSlider'
              />
            </Carousel>

            {/* ----------------------------------------------- slider end ------------------------------------------ */}
          </section>
        </div>
        {/* --------------------------------------- Footer Start ------------------------------------- */}

        <footer id='footer'>
          <div className='footer-top'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-3 col-md-6 footer-info'>
                  <h4>NJ Cash Cars</h4>
                  <p>
                    Get cash for your used car in New Jersey. We pay the highest
                    dollars. We come to you and buy your car as it is! Sell your
                    car quickly and easily today!
                  </p>
                </div>

                <div className='col-lg-3 col-md-6 footer-links'>
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i className='fa fa-angle-right'></i> <a href='#s'>Home</a>
                    </li>
                    <li>
                      <i className='fa fa-angle-right'></i>{' '}
                      <a href='#'>About us</a>
                    </li>
                    <li>
                      <i className='fa fa-angle-right'></i>{' '}
                      <a href='#'>Blogs</a>
                    </li>
                    <li>
                      <i className='fa fa-angle-right'></i> <a href='#'>FQAs</a>
                    </li>
                  </ul>
                </div>

                <div className='col-lg-3 col-md-6 footer-links'>
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i className='fa fa-angle-right'></i> <a href='#'>Home</a>
                    </li>
                    <li>
                      <i className='fa fa-angle-right'></i>{' '}
                      <a href='#'>About us</a>
                    </li>
                    <li>
                      <i className='fa fa-angle-right'></i>{' '}
                      <a href='#'>Blogs</a>
                    </li>
                    <li>
                      <i className='fa fa-angle-right'></i> <a href='#'>FQAs</a>
                    </li>
                  </ul>
                </div>

                <div className='col-lg-3 col-md-6 footer-contact'>
                  <h4>Contact Us</h4>
                  <p>Call Now : +1(908) 688-4059</p>

                  <div className='social-links'>
                    <a href='#' className='twitter'>
                      <i className='fa fa-twitter'></i>
                    </a>
                    <a href='#' className='facebook'>
                      <i className='fa fa-facebook'></i>
                    </a>
                    <a href='#' className='instagram'>
                      <i className='fa fa-instagram'></i>
                    </a>
                    <a href='#' className='google-plus'>
                      <i className='fa fa-google-plus'></i>
                    </a>
                    <a href='#' className='linkedin'>
                      <i className='fa fa-linkedin'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* ---------------------------------------- Footer End ------------------------------------- */}
      </div>
    );
  }
}

export default home;
