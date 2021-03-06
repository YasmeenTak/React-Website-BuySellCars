import React, { Component } from 'react';
import { IconContext } from 'react-icons';

import { FiMapPin, FiPhone } from 'react-icons/fi';
import { FaEdit, FaWarehouse } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import './style.css';

export class UserProfile extends Component {
  // style={{ border: '1px solid black' }}
  render() {
    return (
      <div>
        <div className='profilImgDiv'>
          <div className='container-fulid userCover'></div>
          <img
            src='assets/img/profileImg.jpg'
            alt='Avatar'
            className='userImg img-responsive'
          />
        </div>
        {/* ------------------------------------------------- */}
        <div className='userBioDiv'>
          <h5 className='userName'>اسم المستخدم</h5>
          <p className='userBio'>
            نبذة تعريفية نبذة تعريفية نبذة تعريفية نبذة تعريفية نبذة تعريفية
            نبذة تعريفية نبذة تعريفية
            <br />
            نبذة تعريفية نبذة تعريفية نبذة تعريفية نبذة تعريفية نبذة تعريفية
            نبذة تعريفية نبذة تعريفية
          </p>
        </div>

        {/* ------------------------------------------------- */}
        <IconContext.Provider value={{ size: '1.3em' }}>
          <fieldset
            className='container  personalInfoDiv shadow fieldset'
            style={{ direction: 'rtl' }}
          >
            <legend className=''>المعلومات الشخصية</legend>

            <div className='row-lg-6 md-4 sm-2  pr-3 addressUserDiv'>
              <div className='col addressUser'>
                <p>
                  <FiMapPin className='iconUser' />
                  العنوان
                </p>
              </div>
              <div className='col editDeleteBtnDiv'>
                <FaEdit className='editIcon' />
              </div>
            </div>

            <span className='divider'></span>

            <div className='row-lg-6 md-4 sm-2  pr-3 regionUserDiv'>
              <div className='col regionUser'>
                <p>
                  <FaWarehouse className='iconUser' />
                  المحافظة
                </p>
              </div>
              <div className='col editDeleteBtnDiv'>
                <FaEdit className='editIcon' />
              </div>
            </div>
            <span className='divider'></span>

            <div className='row-lg-6 md-4 sm-2  pr-3 phoneNoUserDiv'>
              <div className='col phoneNoUser'>
                <p>
                  <FiPhone className='iconUser' />
                  +123 456 7890
                </p>
              </div>
              <div className='col editDeleteBtnDiv'>
                <FaEdit className='editIcon' />
              </div>
            </div>
            <span className='divider'></span>

            <div className='row-lg-6 md-4 sm-2  pr-3 emailUserDiv'>
              <div className='col emailUser'>
                <p>
                  <HiOutlineMail className='iconUser' />
                  الايميل
                </p>
              </div>
              <div className='col editDeleteBtnDiv'>
                <FaEdit className='editIcon' />
              </div>
            </div>
          </fieldset>
        </IconContext.Provider>
        {/* ------------------------------------------------- */}
        {/* <div className='container'>
          <div>
            <p className='a'>yasmeen</p>
            <p className='a'>icon</p>
            <p className='a'>edit</p>
          </div>
          <p>talal</p>
          <p>malak</p>
          <p>jazar</p>
        </div> */}
      </div>
    );
  }
}

export default UserProfile;
