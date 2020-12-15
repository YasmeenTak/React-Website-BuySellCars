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
            نبذة تعريفية نبذة تعريفية نبذة تعريفية <br />
            نبذة تعريفية نبذة تعريفية نبذة تعريفية نبذة تعريفية نبذة تعريفية
            نبذة تعريفية نبذة تعريفية
          </p>
        </div>

        {/* ------------------------------------------------- */}
        <IconContext.Provider value={{ size: '1.3em' }}>
          <div
            className='container  personalInfoDiv shadow fieldset'
            style={{ direction: 'rtl' }}
          >
            <div className='row addressUserDiv'>
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

            <span class='divider'></span>

            <div className='row regionUserDiv'>
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
            <span class='divider'></span>

            <div className='row phoneNoUserDiv'>
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
            <span class='divider'></span>

            <div className='row emailUserDiv'>
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
          </div>
        </IconContext.Provider>
        {/* ------------------------------------------------- */}
      </div>
    );
  }
}

export default UserProfile;
