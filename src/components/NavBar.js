import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className='col-sm-5'>
  <a class="navbar-brand mr-5">TEAM SARKAR</a>
  <button class="navbar-toggler ml-5" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
      </div>
<div className='col-sm-4'></div>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/inputform">Form</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/players">Players</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/successrate">SuccessRate</Link>
      </li>
      <li class="nav-item dropdown">
        <Link class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          
        </Link>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default NavBar