import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Head extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6  pl-0 parent'>
            <img
              src='assets/img/header1.png'
              className='img-fluid '
              id='headRight'
            />
            <img
              src='assets/img/carHead.png'
              className='img-fluid  '
              id='carHead'
            />
          </div>

          <div className='col-lg-6 cl-md-6 pr-5' id='rightDiv'>
            <h5 className='pHead1'>
              نحن هنا لمساعدتك في اختيار السيارة الأفضل لك
            </h5>
            <h6 className='pHead2'>
              ابحث هنا واحجز سيارتك للشراء وسنقوم بالتواصل معك في أقرب وقت
            </h6>

            <InputGroup className='mt-5 mb-5 w-75' style={{ float: 'right' }}>
              <InputGroup.Prepend>
                <Button
                  variant='outline-secondary'
                  style={{ backgroundColor: '#ff6c37', color: 'white' }}
                >
                  {/* <img
                    src='/assets/fontello/font/icons.svg'
                    className='filterIcon'
                  ></img> */}
                  Search
                </Button>
              </InputGroup.Prepend>
              <FormControl
                aria-describedby='basic-addon1'
                type='text'
                placeholder='ابحث هنا'
              />
            </InputGroup>

            <div className='appButton'>
              <a href='https://play.google.com/store' target='_blank'>
                <img src='/assets/img/googlePlay.png' id='appBtn' />
              </a>
              <a href='https://www.apple.com/app-store/' target='_blank'>
                <img src='/assets/img/appleStore.png' id='appBtn' />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Head;
