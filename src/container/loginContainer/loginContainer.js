import React, { Component } from 'react';
import '../signUpContainer/signUpContainer.css';
import { Link } from 'react-router-dom';
import NavBar from '../../components/navs/signUpLoginNav/signUpLoginNav';

class LoginContainer extends Component {
  render() {
    return (
      <div className='mainContainer' >

        <NavBar btnTitle='Signup' />

        <div className="top-header" >
          <div className="heading" >Log into your account</div>
          <div className='login' >Don’t have an account? <Link to="/Signup">Signup</Link></div>
        </div>

        <div className='inputMainContainer' >
          <div className='inputContainer centeredInput' >
            <input type='text' placeholder='Email' />
          </div>
          <div className='inputContainer centeredInput' >
            <input type='password' placeholder='Password' />
          </div>
        </div>

        <div className='footer' >
          <div className='btnContainer' >
            <button className="btn">Log in</button>
            <div><a href='#' >or Log in with</a></div>
          </div>
          <div className="btnGroup" >
            <button className="btn1">Facebook</button>
            <button className="btn1">Google</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
