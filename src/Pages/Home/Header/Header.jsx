import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logoBlack.svg';
import Modals from '../Modals/Modals';
import './Header.css';
const Header = () => {
    return (
        <div className='sticky-top'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <NavLink to='/' className={(navinfo) => navinfo.isActive ? "active" : "unactive"}><img src={logo} className='header-img' alt="" /></NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink to='/sikayetler' className={(navinfo) => navinfo.isActive ? "active" : "unactive"}>Şikayetler</NavLink>
        </li>
        <li class="nav-item">
         <NavLink to='/karsilastir' className={(navinfo) => navinfo.isActive ? "active" : "unactive"}>Marka Karşılaştır</NavLink>
        </li>
        <li class="nav-item ">
          <NavLink to='trend-100' className={(navinfo) => navinfo.isActive ? "active" : "unactive"}>Trend 100</NavLink>
        </li>
        
      </ul>
      <div>
      <Modals />
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;