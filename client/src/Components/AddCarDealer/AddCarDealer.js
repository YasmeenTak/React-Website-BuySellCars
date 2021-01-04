import Navbar from '../NavBar/navbar';
import { Form, Col, Button, Group } from 'react-bootstrap';

import './style.css';

function AddCarDealer() {
  return (
    <div>
      <Navbar />

      <div className='container mainDiv'>
        <div className='row'>
          <div className='col-lg-6  addDealerImgDiv '>
            <img
              src='/assets/img/cardealer.jpg'
              className='img-fluid'
              alt='Add dealer'
            />
          </div>
          <div className='col mt-5 formDiv'>
            <Form>
              <h5 className='titleReg'>أضف معرضك </h5>
              <Form.Row>
                <Form.Group as={Col} controlId='formGridEmail'>
                  <Form.Label>الاسم الثاني</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='الاسم الثاني'
                    className='inputReg'
                  />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridPassword'>
                  <Form.Label>الاسم الأول</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='الاسم الأول'
                    className='inputReg'
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId='formGridEmail'>
                <Form.Label>البريد الإلكتروني</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='admin@company.com'
                  className='inputReg'
                />
              </Form.Group>

              <Form.Group controlId='formGridPhoneNum'>
                <Form.Label>رقم الهاتف المحمول</Form.Label>
                <Form.Control placeholder='0591234567' className='inputReg' />
              </Form.Group>

              <Form.Group controlId='formGridPhoneNum'>
                <Form.Label>العنوان</Form.Label>
                <Form.Control
                  placeholder='0591234567'
                  className='inputReg'
                  type='text'
                />
              </Form.Group>
            </Form>
            <Button
              variant='primary'
              type='submit'
              className='joinUsBtn'
              data-target='#addDealer'
              data-toggle='modal'
              style={{
                background: '#ff6c37',
                border: '1px solid #ff6c37',
                borderRadius: '12px',
                width: '180px',
                marginTop: '50px',
              }}
            >
              انضم الآن
            </Button>
            {/* -----------------------------Modal---------------------------------------- */}
            <div
              class='modal fade'
              id='addDealer'
              tabindex='-1'
              role='dialog'
              aria-labelledby='ReserveCarTitle'
              aria-hidden='true'
            >
              <div class='modal-dialog modal-dialog-centered' role='document'>
                <div class='modal-content modal2SendRate'>
                  <div class='modal-header'>
                    <img
                      src='assets/img/success2.jpg'
                      alt='succsses'
                      className='successImg img-responsive'
                    />
                  </div>
                  <div
                    class='modal-body'
                    style={{ margin: 'auto', width: '100%' }}
                  >
                    <p style={{ textAlign: 'center' }}>
                      تم إضافة بياناتك بنجاح، سنتواصل معك في أقرب فرصة
                    </p>
                  </div>
                  <div class='modal-footer' style={{ margin: 'auto' }}>
                    <a href='#home Page' data-dismiss='modal'>
                      العودة إلى الصفحة الرئيسية
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* ---------------------------------------------------------------------- */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddCarDealer;
