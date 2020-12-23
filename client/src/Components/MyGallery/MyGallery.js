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
        <ul class='nav nav-pills mb-3' id='pills-tab' role='tablist' className='gallerTabs'>
          <li class='nav-item'>
            <a
              class='nav-link active'
              id='pills-home-tab'
              data-toggle='pill'
              href='#pills-home'
              role='tab'
              aria-controls='pills-home'
              aria-selected='true'
            >
              المشتريات
            </a>
          </li>
          <li class='nav-item'>
            <a
              class='nav-link'
              id='pills-profile-tab'
              data-toggle='pill'
              href='#pills-profile'
              role='tab'
              aria-controls='pills-profile'
              aria-selected='false'
            >
              المبيعات
            </a>
          </li>
        </ul>
        <div class='tab-content' id='pills-tabContent'>
          <div
            class='tab-pane fade show active'
            id='pills-home'
            role='tabpanel'
            aria-labelledby='pills-home-tab'
          >
            <MyPurchases />
          </div>
          <div
            class='tab-pane fade'
            id='pills-profile'
            role='tabpanel'
            aria-labelledby='pills-profile-tab'
          >
            <MySales />
          </div>
        </div>
      </div>
    );
  }
}

export default MyGallery;
