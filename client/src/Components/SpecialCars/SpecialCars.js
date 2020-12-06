import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer';

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
        <div>
          <Container
            style={{
              direction: 'rtl',
              marginTop: '40px',
            }}
            className='mainContainer '
          >
            <Card className='shadow'>
              <Row>
                <Col lg={4} xs={12} md={4}>
                  <img
                    src='/assets/img/carcard1.jpg'
                    alt='car details'
                    className='img-fluid'
                  />
                </Col>

                <Col xs={12} md={8} className='a'>
                  <Row style={{ marginTop: '20px' }}>
                    <Col lg={6} md={10} xs={8}>
                      <p
                        className='card-title'
                        // style={{ border: '1px solid black' }}
                      >
                        براند السيارة / <a className='model'>الموديل</a>
                      </p>
                    </Col>
                    <Col>
                      <Rating
                        name='size-medium'
                        defaultValue={2}
                        style={{
                          direction: 'ltr',
                          // border: '1px solid black',
                          // paddingRight: '200px',
                        }}
                      />
                    </Col>
                    <Col>
                      <div
                        style={{
                          width: '100px',
                          hight: '30px',
                          // marginLeft: '50px',
                          // border: '1px solid black',
                        }}
                      >
                        <FontAwesomeIcon icon={faStar} className='favStar' />
                      </div>
                    </Col>
                  </Row>
                  <p className='descriptionDiv'>
                    تمتلك بيجاس محرك 1400 سي سي، رباعي الأسطوانات بسعة 1.4 لتر،
                    وقوة المحرك 95 حصان وقوة عزم 145 نيوتن/متر، حيث تصل عدد
                    دورات المحرك الى 6000 دورة في الدقيقة الواحدة، نظام الجر
                    الأمامي. تبلغ السرعة القصوى للسيارة : 185 كم / س . خزان
                    الوقود السيارة يتسع إلى 43 لتراً
                  </p>
                </Col>
              </Row>
            </Card>
          </Container>
        </div>
        <Footer />
      </div>
      // <div>
      //   <div className='titleDiv'>
      //     <p className='titleMain'>السيارات المميزة</p>
      //     <p className='titleSub'>
      //       السيارات المميزة ذات المواصفات العالية السيارات المميزة ذات
      //       المواصفات العالية
      //     </p>
      //   </div>
      //   <div className='container mt-5'>
      //     <div className='card'>
      //       <div className='row'>
      //         <div className='col-md-8'>
      //           <h5 className='card-title mt-2'>براند السيارة/الموديل</h5>
      //           <Rating name='size-medium' defaultValue={2} />

      //           <p>
      //             تمتلك بيجاس محرك 1400 سي سي، رباعي الأسطوانات بسعة 1.4 لتر،
      //             وقوة المحرك 95 حصان وقوة عزم 145 نيوتن/متر، حيث تصل عدد دورات
      //             المحرك الى 6000 دورة في الدقيقة الواحدة، نظام الجر الأمامي.
      //             تبلغ السرعة القصوى للسيارة : 185 كم / س . خزان الوقود السيارة
      //             يتسع إلى 43 لتراً
      //           </p>
      //         </div>

      //         <div className='col-md-4'>
      //           <img src='/assets/img/lap.jpg' className='img-fluid' />
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
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
