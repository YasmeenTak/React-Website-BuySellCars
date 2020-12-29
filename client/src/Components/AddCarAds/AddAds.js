import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormFile from 'react-bootstrap/FormFile';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import NavbarlogIn from '../NavBar/NavbarlogIn';

import './style.css';

export class AddAds extends Component {
  render() {
    return (
      <div>
        <NavbarlogIn />
        <div className='container mainDiv'>
          <div className='row'>
            <div className='col-lg-6 regImgDiv '>
              <img src='/assets/img/register.png' className='img-fluid' />
            </div>
            <div className='col-lg-6 col-xs-2 mt-5 formSelectDiv'>
              <Form>
                <h5 className='titleReg'>إعلان بيع سيارة جديدة</h5>
                <div className='innerFormDiv'>
                  <select className='form-control selectAdd' id='allInputs'>
                    <option>سنة الإصدار</option>
                  </select>
                  <select className='form-control selectAdd' id='allInputs'>
                    <option>براند السيارة</option>
                  </select>
                  <select className='form-control selectAdd' id='allInputs'>
                    <option>الموديل</option>
                  </select>
                  <select className='form-control selectAdd' id='allInputs'>
                    <option>الزخرفة الخارجية</option>
                  </select>
                  <select className='form-control selectAdd' id='allInputs'>
                    <option>النوع</option>
                  </select>
                  <select className='form-control selectAdd' id='allInputs'>
                    <option>الحالة العامة</option>
                  </select>
                  <select className='form-control selectAdd' id='allInputs'>
                    <option>الحالة المالية</option>
                  </select>
                  <select className='form-control selectAdd' id='allInputs'>
                    <option>اللون</option>
                  </select>
                  <FormFile
                    id='allInputs'
                    placeholder='إرفاق صور'
                    style={{ backgroundColor: 'white', textAlign: 'center' }}
                  ></FormFile>

                  <input
                    className='form-control'
                    type='text'
                    placeholder='المسافة المقطوعة'
                    id='allInputs'
                    style={{ textAlign: 'right' }}
                  />
                  <input
                    className='form-control'
                    type='text'
                    placeholder='كلمات مفتاحية'
                    id='allInputs'
                  />
                  <input
                    className='form-control description'
                    type='text'
                    placeholder='وصف عام عن السيارة - اختياري'
                    id='allInputs'
                  />
                </div>
                <div>
                  <FormControlLabel
                    value='start'
                    control={<Checkbox color='primary' />}
                    label={
                      <span style={{ fontSize: '0.8rem', color: '#193441' }}>
                        أضف مبلغ 10$ لعرض السيارة في أول نتائج البحث
                      </span>
                    }
                    labelPlacement='start'
                    style={{
                      width: '535px',
                      marginBottom: '20px',
                    }}
                  />

                  <div className='btnSell'>
                    <Button
                      variant='primary'
                      type='submit'
                      style={{
                        background: '#ff6c37',
                        border: '1px solid #ff6c37',
                        borderRadius: '12px',
                        width: '120px',
                        float: 'center',
                      }}
                    >
                      عرض للبيع
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddAds;
