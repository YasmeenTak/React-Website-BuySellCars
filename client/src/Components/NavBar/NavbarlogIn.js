import React, { Component } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import './styleLogin.css';

export class NavbarlogIn extends Component {
  render() {
    return (
      <nav class='navbar navbar-expand-lg navbar-light bg-light shadow-sm'>
        <a class='navbar-brand' href='#'>
          <img src='assets/img/logo.png' className='logoImg' />
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>

        <div
          class='collapse navbar-collapse  justify-content-between'
          id='navbarSupportedContent'
        >
          <ul class='navbar-nav mr-auto'>
            <li class='nav-item active'>
              <a class='nav-link' href='#'>
                <AiOutlineHome size='1.3em' style={{ marginTop: '20px' }} />
                الرئيسة <span class='sr-only'>(current)</span>
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                <i className='icon-notifications'></i>
                الإشعارات
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                معرضي
              </a>
            </li>
            <button>إعلان جديد </button>

            <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                المزيد
              </a>
              <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
                <a class='dropdown-item' href='#'>
                  المفضلة
                </a>
                <a class='dropdown-item' href='#'>
                  من نحن؟
                </a>
                <a class='dropdown-item' href='#'>
                  تواصل معنا
                </a>
                <a class='dropdown-item' href='#'>
                  سياسة الخصوصية
                </a>
                <a class='dropdown-item' href='#'>
                  شروط الاستخدام
                </a>
              </div>
            </li>
          </ul>
          <form class='form-inline my-2 my-lg-0'>
            <img
              src='assets/img/profileImg.jpg'
              alt='Avatar'
              className='userImgNav img-responsive'
            />
          </form>
        </div>
      </nav>
    );
  }
}

export default NavbarlogIn;
