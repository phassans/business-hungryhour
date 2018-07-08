import React, { Component } from 'react';
import './signUpContainer.css';
import { Link } from 'react-router-dom';
import NavBar from '../../components/navs/signUpLoginNav/signUpLoginNav';

class SignUpContainer extends Component {
  render() {
    return (
      <div className='mainContainer' >

        <NavBar btnTitle='Login' />

        <div className="top-header" >
          <div className="heading" >Get started with a free account</div>
          <div className='login' >Already have an account? <Link to="/Login">Login</Link></div>
        </div>

        <div className='inputMainContainer' >
          <div className='inputContainer' >
            <div>Email :</div>
            <input type='text' placeholder='Type Your Email' />
          </div>
          <div className='inputContainer' >
            <div>Name :</div>
            <input type='text' placeholder='Type Your Full Name' />
          </div>
          <div className='inputContainer' >
            <div>Password :</div>
            <input type='password' placeholder='Type Your Password' />
          </div>
        </div>

        <div className='footer' >
          <div className='btnContainer' >
            <Link to='/AddBusiness' className="btn">Sign Up</Link>
            <div><a href='#' >or sign up with</a></div>
          </div>

          <div className="btnGroup" >
            <button className="btn1">Facebook</button>
            <button className="btn1">Google</button>
          </div>

          <div className="condition" >By clicking sign up, you agree to the Terms and Conditions of HungryHour.</div>
        </div>
      </div>
    );
  }
}

export default SignUpContainer;
