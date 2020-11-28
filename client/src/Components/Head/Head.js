import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Head extends Component {
  render() {
    return (
      <div>
        <div className='head-container'>
          <div className='leftDiv'>
            <div class='row parent'>
              <img src='assets/img/header1.png' className='headRight' />
              <img src='assets/img/carHead.png' className='carHead' />
            </div>
          </div>

          <div className='rightDiv'>
            <h4 className='pHead1'>
              نحن هنا لمساعدتك في اختيار السيارة الأفضل لك
            </h4>
            <h6 className='pHead2'>
              ابحث هنا واحجز سيارتك للشراء وسنقوم بالتواصل معك في أقرب وقت
            </h6>

            <div class='input-container'>
              {/*           
              <input
                type='text'
                placeholder='ابحث هنا'
                className='searchInput'
              /> */}

              <InputGroup className='mb-3'>
                <InputGroup.Prepend>
                  <Button variant='outline-secondary'>Button</Button>
                </InputGroup.Prepend>
                <FormControl aria-describedby='basic-addon1' />
              </InputGroup>
            </div>

            {/* <div className='appButton'>
              <a href='https://play.google.com/store' target='_blank'>
                <img src='/assets/img/googlePlay.png' id='appBtn' />
              </a>
              <a href='https://www.apple.com/app-store/' target='_blank'>
                <img src='/assets/img/appleStore.png' id='appBtn' />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Head;
