import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../Footer/Footer';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';
import NavbarlogIn from '../NavBar/NavbarlogIn';

import './style.css';

export class Dealers extends Component {
  render() {
    return (
      <div>
        <NavbarlogIn />
        <div className='titleDiv'>
          <p className='titleMain'>أحدث عروض السيارات</p>
          <p className='titleSub'>
            السيارات ذات المواصفات المتفاوتة والتي يمكن الوصول إليه في أي وقت
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
            <Card className='mainCard shadow'>
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
                        <FontAwesomeIcon
                          icon={farFaHeart}
                          className='favHeart'
                        />
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
    );
  }
}

export default Dealers;
