import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormFile from 'react-bootstrap/FormFile';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './style.css';

export class AddAds extends Component {
  render() {
    return (
      <div className='container mainDiv'>
        <div className='row'>
          <div className='col-lg-6  regImgDiv '>
            <img src='/assets/img/register.png' className='img-fluid' />
          </div>
          <div className='col mt-5 formSelectDiv'>
            <Form>
              <h5 className='titleReg'>إعلان بيع سيارة جديدة</h5>
              <div className='innerFormDiv'>
                <select class='form-control' id='allInputs'>
                  <option>سنة الإصدار</option>
                </select>
                <select class='form-control' id='allInputs'>
                  <option>براند السيارة</option>
                </select>
                <select class='form-control' id='allInputs'>
                  <option>الموديل</option>
                </select>
                <select class='form-control' id='allInputs'>
                  <option>الزخرفة الخارجية</option>
                </select>
                <select class='form-control' id='allInputs'>
                  <option>النوع</option>
                </select>
                <select class='form-control' id='allInputs'>
                  <option>الحالة العامة</option>
                </select>
                <select class='form-control' id='allInputs'>
                  <option>الحالة المالية</option>
                </select>
                <select class='form-control' id='allInputs'>
                  <option>اللون</option>
                </select>
                <FormFile id='allInputs' placeholder='إرفاق صور'></FormFile>
                <input
                  class='form-control'
                  type='text'
                  placeholder='المسافة المقطوعة'
                  id='allInputs'
                  style={{ textAlign: 'right' }}
                />
                <input
                  class='form-control'
                  type='text'
                  placeholder='كلمات مفتاحية'
                  id='allInputs'
                />
                <input
                  class='form-control description'
                  type='text'
                  placeholder='وصف عام عن السيارة - اختياري'
                  id='allInputs'
                />
              </div>
              <div>
                <FormControlLabel
                  value='start'
                  control={<Checkbox color='primary' />}
                  label='أضف مبلغ 10 $ لعرض السيارة في أول نتائج البحث'
                  labelPlacement='start'
                  style={{
                    paddingLeft: '100px',
                  }}
                />
                <Button
                  variant='primary'
                  type='submit'
                  style={{
                    background: '#ff6c37',
                    border: '1px solid #ff6c37',
                    borderRadius: '12px',
                    width: '120px',
                    float: 'right',
                  }}
                >
                  عرض للبيع
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddAds;
