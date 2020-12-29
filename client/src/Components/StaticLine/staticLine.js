import React, { Component } from 'react';
import './style.css';

export class staticLine extends Component {
  render() {
    return (
      <div>
        <div
          className='row mainLine'
          style={{ border: '1px solid black', width: '100%' }}
        >
          <div className='col-sm-2'>
            <i className='icon-apple'></i>
            <i className='icon-facebook-f' style={{ color: '#00719B' }}></i>
            <i className='icon-twitter' style={{ color: '#1BA5EC' }}></i>
          </div>
          <div className='col-sm-3'></div>
          <div className='col-sm-3'>
            <div>
              <p>
                Email : <span>aioadmin@gmail.com</span>
                <i className='icon-mail'></i>
              </p>
            </div>
          </div>
          <div className='col-sm-3'>
            <div>
              <p>
                Call : <span>(0) 123 456 7890</span>
                <i className='icon-phone'></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default staticLine;
