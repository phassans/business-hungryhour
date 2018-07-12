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
            <div>Enter your Email</div>
            <input type='text' />
          </div>
          <div className='inputContainer centeredInput' >
            <div>Enter your Password</div>
            <input type='password' placeholder='Password' />
          </div>
          <label className="container rememberCheckbox" >
            Remember Me
            <input type="checkbox" />
            <span style={{ marginLeft: '1%', marginTop: '2px', }} className="checkmark"></span>
          </label>
          <div className='flink' ><a href='#' >Forgot username or password?</a></div>
          <div className='flink' ><a href='#' >Log in with SSO</a></div>
        </div>

        <div className='footer' >
          <div className='btnContainer' >
            <button className="btn orangeBtn">Log in</button>
            <div className='orTxtMainCont' >
              <div className='orLineCont' ><div className='orLine' /></div>
              <div className='orTxt' >Or</div>
              <div className='orLineCont' ><div className='orLine' /></div>
            </div>
            <div className='AnotherWayAdviceSL' >Log in with your Facebook or Google Account</div>
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

        </div>
      </div>
    );
  }
}

export default LoginContainer;
