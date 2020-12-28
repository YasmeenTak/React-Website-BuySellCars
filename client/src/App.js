import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/HomePage/home';
import StaticLine from './Components/StaticLine/staticLine';
import NavBar from './Components/NavBar/navbar';
import Head from './Components/Head/Head';
import AboutUS from './Components/AboutUS/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';

import Registration from './Components/Registration/registration';
import Login from './Components/Login/Login';
import AddAds from './Components/AddCarAds/AddAds';
import CarDetails from './Components/CarDetails/CarDetails';

import Footer from './Components/Footer/Footer';
import SpecialCars from './Components/SpecialCars/SpecialCars';
import OtherCars from './Components/OtherCars/OtherCars';
import DealersCars from './Components/DealersCars/Dealers';

import MySales from './Components/MySales/MySales';
import MyPurchases from './Components/MyPurchases/MyPurchases';
import MyGallery from './Components/MyGallery/MyGallery';

import UserProfile from './Components/UserProfile/UserProfile';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import ValidationCode from './Components/ValidationCode/ValidationCode';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import RangeSlider from './Components/RangeSlider/RangeSlider';

import NavbarlogIn from './Components/NavBar/NavbarlogIn';
import Settings from './Components/Settings/Settings';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Test from './Components/Test/Test';
import EditUserProfile from './Components/EditUserProfile/EditUserProfile';

function App() {
  return (
    <div className='App'>
      {/* <Test /> */}
      {/* <StaticLine /> */}
      {/* <NavBar /> */}
      {/* <NavbarlogIn /> */}
      {/* <RangeSlider /> */}

      <Head />
      {/* <Home /> */}
      {/* <AboutUS path='/about' /> */}
      {/* <ContactUs path='/contact us'/> */}
      {/* <Login path='/login'/> */}
      {/* <Registration /> */}
      {/* <AddAds /> */}
      {/* <CarDetails /> */}
      {/* <SpecialCars /> */}
      {/* <OtherCars /> */}
      {/* <DealersCars /> */}
      {/* <MyPurchases /> */}
      {/* <MySales /> */}
      {/* <MyGallery /> */}

      {/* <UserProfile /> */}
      {/* <EditUserProfile/> */}
      {/* <ChangePassword path='/change password' /> */}
      {/* <ForgotPassword /> */}
      {/* <ResetPassword /> */}
      {/* <ValidationCode /> */}
      {/* <Settings path='/settings' /> */}

      <Footer />
    </div>
  );
}

export default App;
