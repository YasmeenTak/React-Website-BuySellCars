import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';
import './style.css';

export class MySales extends Component {
  render() {
    return (
      <div>
        <div class='w3-show-inline-block' id='groupBtn'>
          <div class='w3-bar'>
            <button class='w3-btn w3' id='dealersBtn'>
              المشتريات
            </button>

            <button class='w3-btn w3' id='specialCarsBtn'>
              المبيعات
            </button>
          </div>
        </div>

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
                      براند السيارة / <p className='model'>الموديل</p>
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
                      <FontAwesomeIcon icon={farFaHeart} className='favHeart' />
                    </div>
                  </Col>
                </Row>
                <p className='descriptionDiv'>
                  تمتلك بيجاس محرك 1400 سي سي، رباعي الأسطوانات بسعة 1.4 لتر،
                  وقوة المحرك 95 حصان وقوة عزم 145 نيوتن/متر، حيث تصل عدد دورات
                  المحرك الى 6000 دورة في الدقيقة الواحدة، نظام الجر الأمامي.
                  تبلغ السرعة القصوى للسيارة : 185 كم / س . خزان الوقود السيارة
                  يتسع إلى 43 لتراً
                </p>
              </Col>
            </Row>
          </Card>
        </Container>

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
                  src='/assets/img/carcard2.jpg'
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
                      براند السيارة / <p className='model'>الموديل</p>
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
                      <FontAwesomeIcon icon={farFaHeart} className='favHeart' />
                    </div>
                  </Col>
                </Row>
                <p className='descriptionDiv'>
                  تمتلك بيجاس محرك 1400 سي سي، رباعي الأسطوانات بسعة 1.4 لتر،
                  وقوة المحرك 95 حصان وقوة عزم 145 نيوتن/متر، حيث تصل عدد دورات
                  المحرك الى 6000 دورة في الدقيقة الواحدة، نظام الجر الأمامي.
                  تبلغ السرعة القصوى للسيارة : 185 كم / س . خزان الوقود السيارة
                  يتسع إلى 43 لتراً
                </p>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    );
  }
}

export default MySales;
