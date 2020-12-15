import React, { Component } from 'react';
import './style.css';

export class ContactUs extends Component {
  render() {
    return (
      <div>
        <div className='container-fulid '>
          <div className='contactUsRow'>
            <img
              src='/assets/img/contactus.jpg'
              alt='Contact Us'
              className='contactUS img-responsive'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
