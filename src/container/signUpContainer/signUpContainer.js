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

        <div className='inputMainContainer signUpInputCont' >
          <div className='inputContainer centeredInput' >
            <input type='text' placeholder='Email' />
          </div>
          <div className='inputContainer centeredInput' >
            <input type='text' placeholder='Full Name' />
          </div>
          <div className='inputContainer centeredInput' >
            <input type='password' placeholder='Password' />
          </div>
        </div>

        <div className='footer' >
          <div className='btnContainer' >
            <Link to='/AddBusiness' className="btn orangeBtn">Sign Up</Link>
            <div className='orTxtMainCont' >
              <div className='orLineCont' ><div className='orLine' /></div>
              <div className='orTxt' >Or</div>
              <div className='orLineCont' ><div className='orLine' /></div>
            </div>
            <div className='AnotherWayAdviceSL' >Sign up with your Facebook or Google Account</div>
          </div>

          <div className="btnGroup" >
            <button className="btn1"> <span>
              <img src={require('../../assets/ficom.png')} style={{width: 25, height: 25}} />
              {/* <i class="fab fa-facebook-square"></i> */}
            </span> Facebook</button>
            <button className="btn1" > <span>
              <img src={require('../../assets/gicon.png')} style={{width: 25, height: 25}} />
              {/* <i class="fab fa-google"></i> */}
              </span> Google</button>
          </div>

          <div className="condition" >By clicking sign up, you agree to the Terms and Conditions of HungryHour.</div>
        </div>
      </div>
    );
  }
}

export default SignUpContainer;
