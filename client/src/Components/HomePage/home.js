import React, { Component } from 'react';
import { Row, Col, Footer } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import './style.css';

export class home extends Component {
  render() {
    const breakPoints = [
      { width: 500, itemToShow: 1 },
      { width: 768, itemToShow: 2 },
      { width: 1200, itemToShow: 3 },
      { width: 1500, itemToShow: 4 },
    ];
    return (
      <div>
        <section className='header'>
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
        </section>
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
            <div id='slider'>
              <Carousel breakPoints={breakPoints}>
                <img src='/assets/img/logo.png'></img>
                <img src='/assets/img/logo.png'></img>
                {/* <img src='/assets/img/car1.png' />
                <img src='/assets/img/car 2.png' />
                <img src='/assets/img/car 4.png' />
                <img src='/assets/img/car1.png' />
                <img src='/assets/img/car1.png' />
                <img src='/assets/img/car1.png' />
                <img src='/assets/img/car 4.png' />
                <img src='/assets/img/car 4.png' />
                <img src='/assets/img/car1.png' /> */}
              </Carousel>
            </div>
            {/* ----------------------------------------------- slider end ------------------------------------------ */}
          </section>
        </div>
        {/* --------------------------------------- Footer Start ------------------------------------- */}

        <footer id='footer'>
          <div class='footer-top'>
            <div class='container'>
              <div class='row'>
                <div class='col-lg-3 col-md-6 footer-info'>
                  <h4>NJ Cash Cars</h4>
                  <p>
                    Get cash for your used car in New Jersey. We pay the highest
                    dollars. We come to you and buy your car as it is! Sell your
                    car quickly and easily today!
                  </p>
                </div>

                <div class='col-lg-3 col-md-6 footer-links'>
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i class='fa fa-angle-right'></i> <a href='#'>Home</a>
                    </li>
                    <li>
                      <i class='fa fa-angle-right'></i> <a href='#'>About us</a>
                    </li>
                    <li>
                      <i class='fa fa-angle-right'></i> <a href='#'>Blogs</a>
                    </li>
                    <li>
                      <i class='fa fa-angle-right'></i> <a href='#'>FQAs</a>
                    </li>
                  </ul>
                </div>

                <div class='col-lg-3 col-md-6 footer-links'>
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i class='fa fa-angle-right'></i> <a href='#'>Home</a>
                    </li>
                    <li>
                      <i class='fa fa-angle-right'></i> <a href='#'>About us</a>
                    </li>
                    <li>
                      <i class='fa fa-angle-right'></i> <a href='#'>Blogs</a>
                    </li>
                    <li>
                      <i class='fa fa-angle-right'></i> <a href='#'>FQAs</a>
                    </li>
                  </ul>
                </div>

                <div class='col-lg-3 col-md-6 footer-contact'>
                  <h4>Contact Us</h4>
                  <p>Call Now : +1(908) 688-4059</p>

                  <div class='social-links'>
                    <a href='#' class='twitter'>
                      <i class='fa fa-twitter'></i>
                    </a>
                    <a href='#' class='facebook'>
                      <i class='fa fa-facebook'></i>
                    </a>
                    <a href='#' class='instagram'>
                      <i class='fa fa-instagram'></i>
                    </a>
                    <a href='#' class='google-plus'>
                      <i class='fa fa-google-plus'></i>
                    </a>
                    <a href='#' class='linkedin'>
                      <i class='fa fa-linkedin'></i>
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
