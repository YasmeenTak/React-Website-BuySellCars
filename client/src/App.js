// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/HomePage/home';
import StaticLine from './Components/StaticLine/staticLine';
import NavBar from './Components/NavBar/navbar';
import Registration from './Components/Registration/registration';
import Login from './Components/Login/Login';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className='App'>
      <StaticLine />
      <NavBar />
      <Login />
    </div>
  );
}

export default App;
