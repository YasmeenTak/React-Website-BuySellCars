import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

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

        <div
          className='container  personalInfoDiv shadow'
          style={{ direction: 'rtl' }}
        >
          <div className='row addressUserDiv'>
            <div className='col addressUser'>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className='iconUser faMapMarkerAlt'
              />
              <p>العنوان</p>
            </div>
            <div className='col editDeleteBtnDiv'>تعديل</div>
          </div>
          <div className='row regionUserDiv'>
            <div className='col regionUser'>المحافظة</div>
            <div className='col editDeleteBtnDiv'>تعديل</div>
          </div>
          <div className='row phoneNoUserDiv'>
            <div className='col phoneNoUser'>رقم الهاتف</div>
            <div className='col editDeleteBtnDiv'>تعديل</div>
          </div>
          <div className='row emailUserDiv'>
            <div className='col emailUser'>الايميل</div>
            <div className='col editDeleteBtnDiv'>تعديل</div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
