import React, { Component } from 'react';
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
      </div>
    );
  }
}

export default UserProfile;
