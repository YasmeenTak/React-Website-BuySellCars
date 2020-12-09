import React, { Component } from 'react';
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
      </div>
    );
  }
}

export default MySales;
