import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons';
import { InputGroup, Button, FormControl, FormCheck } from 'react-bootstrap';
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

            <InputGroup
              className='mt-5 mb-5 w-75'
              style={{ float: 'right', height: '40px' }}
            >
              <InputGroup.Prepend>
                <Button
                  variant='outline-secondary'
                  style={{
                    backgroundColor: '#ff6c37',
                    width: '80px',
                    border: 'none',
                    borderRadius: '10px 0 0 10px',
                  }}
                  data-toggle='modal'
                  data-target='.bd-example-modal-lg'
                >
                  {/* <img
                    src='/assets/fontello/font/icons.svg'
                    className='filterIcon'
                  ></img> */}
                  <i
                    className='icon-icon-ionic-ios-options'
                    style={{ color: 'white' }}
                  ></i>
                </Button>
              </InputGroup.Prepend>
              <FormControl
                aria-describedby='basic-addon1'
                type='text'
                placeholder='ابحث هنا'
                style={{ borderRadius: '0 10px 10px 0', height: '40px' }}
              />
            </InputGroup>

            {/* <!------------------------------ Modal ------------------------> */}
            <div
              className='modal fade bd-example-modal-lg'
              tabIndex='-1'
              role='dialog'
              aria-labelledby='myLargeModalLabel'
              aria-hidden='true'
              style={{ direction: 'rtl' }}
            >
              <div className='modal-dialog modal-lg'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <button
                      type='button'
                      class='close order-1'
                      data-dismiss='modal'
                      aria-label='Close'
                    >
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div className='modal-body' id='modalBody'>
                    <p>البراند</p>
                    <select className='form-control selectFilter' style={{}}>
                      <option>براند السيارة</option>
                    </select>
                    <select className='form-control selectFilter'>
                      <option>الموديل</option>
                    </select>
                    <p>
                      __________________________________________________________
                    </p>
                    {/* -------------------------------------------------------- */}

                    {/* -------------------------------------------------------------- */}
                  </div>
                  <div className='modal-footer'>
                    <button
                      type='button'
                      className='btn btn-secondary'
                      data-dismiss='modal'
                    >
                      Close
                    </button>
                    <button type='button' className='btn btn-primary'>
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!------------------------------ Modal ------------------------> */}

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
