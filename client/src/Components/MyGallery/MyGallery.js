import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import MyPurchases from '../MyPurchases/MyPurchases';
import MySales from '../MySales/MySales';
import Navbar from '../NavBar/navbar';
import './style.css';

export class MyGallery extends Component {
  render() {
    return (
      <div>
        <link
          href='https://fonts.googleapis.com/css?family=Work+Sans:400,600,700&display=swap'
          rel='stylesheet'
        />
        <div class='layout'>
          <input
            name='nav'
            type='radio'
            class='nav home-radio'
            id='home'
            checked='checked'
          />
          <div class='page home-page'>
            <div class='page-contents'>
              <MyPurchases />
            </div>
          </div>
          <label class='nav' for='home'>
            <span>
              <svg
                viewBox='0 0 24 24'
                width='24'
                height='24'
                stroke='currentColor'
                stroke-width='2'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='css-i6dzq1'
              >
                <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>
                <polyline points='9 22 9 12 15 12 15 22'></polyline>
              </svg>
            </span>
          </label>

          <input name='nav' type='radio' class='about-radio' id='about' />
          <div class='page about-page'>
            <div class='page-contents'>
              <MySales />
            </div>
          </div>
          <label class='nav' for='about'>
            <span>
              <svg
                viewBox='0 0 24 24'
                width='24'
                height='24'
                stroke='currentColor'
                stroke-width='2'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='css-i6dzq1'
              >
                <circle cx='12' cy='12' r='10'></circle>
                <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'></path>
                <line x1='12' y1='17' x2='12' y2='17'></line>
              </svg>
            </span>
          </label>
        </div>
      </div>
    );
  }
}

export default MyGallery;
