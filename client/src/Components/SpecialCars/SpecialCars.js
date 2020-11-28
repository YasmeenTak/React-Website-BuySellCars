import React, { Component } from 'react';
import './style.css';

export class SpecialCars extends Component {
  render() {
    return (
      <div>
        <div class='w3-show-inline-block' id='groupBtn'>
          <div class='w3-bar'>
            <button class='w3-btn w3' id='dealersBtn'>
              المتعاقدون (المعارض)
            </button>
            <button class='w3-btn w3' id='otherCarsBtn'>
              السيارات الأخيرة
            </button>
            <button class='w3-btn w3' id='specialCarsBtn'>
              السيارات المميزة
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SpecialCars;