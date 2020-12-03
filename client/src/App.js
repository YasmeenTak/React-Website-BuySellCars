// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/HomePage/home';
import StaticLine from './Components/StaticLine/staticLine';
import NavBar from './Components/NavBar/navbar';
import Head from './Components/Head/Head';
import Registration from './Components/Registration/registration';
import Login from './Components/Login/Login';
import AddAds from './Components/AddCarAds/AddAds';
import CarDetails from './Components/CarDetails/CarDetails';

import Footer from './Components/Footer/Footer';
import SpecialCars from './Components/SpecialCars/SpecialCars';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className='App'>
      <StaticLine />
      <NavBar />
      {/* <Head /> */}
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Registration /> */}
      {/* <AddAds /> */}
      <CarDetails />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
