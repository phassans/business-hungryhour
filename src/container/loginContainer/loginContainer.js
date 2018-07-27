import React, { Component } from 'react';
import '../signUpContainer/signUpContainer.css';
import { Link } from 'react-router-dom';
import NavBar from '../../components/navs/signUpLoginNav/signUpLoginNav';
import { BASE_URL } from "../../data/api";

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.userInfo = {};
    this.userInfo.email = React.createRef();
    this.userInfo.password = React.createRef();
  }

  signin = () => {
    const email = this.userInfo.email;
    const password = this.userInfo.password;

    if (!email.validity.valid) {
      alert("(" + email.placeholder + ") - " + email.validationMessage);
      return;
    }

    if (!password.validity.valid) {
      alert("(" + password.placeholder + ") - " + password.validationMessage);
      return;
    }


    fetch(BASE_URL + 'user/verify', {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.code === 400 && responseJson.message) {
          alert(responseJson.message);
          return;
        }

        console.log('user successfully loggedin!');
        let userObj = { userId: responseJson.user_id, userName: 'hungryhour' };
        localStorage.setItem('user', JSON.stringify(userObj));

        this.props.history.push('/MyListing');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className='mainContainer' >

        <NavBar btnTitle='Signup' />

        <div className="top-header" >
          <div className="heading" >Log in to your account</div>
          <div className='login' >Don’t have an account? <Link to="/Signup">Sign Up</Link></div>
        </div>

        <div className='inputMainContainer' >
          <div className='inputContainer centeredInput' >
            <div>Enter your Email</div>
            <input type='email' placeholder='Email' ref={(input) => this.userInfo.email = input} required />
          </div>
          <div className='inputContainer centeredInput' >
            <div>Enter your Password</div>
            <input type='password' placeholder='Password' ref={(passwordInput) => this.userInfo.password = passwordInput} required />
          </div>
          <label className="container rememberCheckbox" >
            Remember Me
            <input type="checkbox" />
            <span style={{ marginLeft: '1%', marginTop: '2px', }} className="checkmark"></span>
          </label>
          <div className='flink' ><a href='#' >Forgot username or password?</a></div>
          {/* <div className='flink' ><a href='#' >Log in with SSO</a></div> */}
        </div>

        <div className='footer' >
          <div className='btnContainer' >
            <button className="btn orangeBtn" onClick={this.signin}>Log in</button>
            <div className='orTxtMainCont' >
              <div className='orLineCont' ><div className='orLine' /></div>
              <div className='orTxt' >Or</div>
              <div className='orLineCont' ><div className='orLine' /></div>
            </div>
            <div className='AnotherWayAdviceSL' >Log in with your Facebook or Google Account</div>
          </div>
          <div className="btnGroup" >
            <button className="btn1"> <span>
              <img src={require('../../assets/ficom.png')} style={{ width: 25, height: 25 }} />
              {/* <i class="fab fa-facebook-square"></i> */}
            </span> Facebook</button>
            <button className="btn1" > <span>
              <img src={require('../../assets/gicon.png')} style={{ width: 25, height: 25 }} />
              {/* <i class="fab fa-google"></i> */}
            </span> Google</button>
          </div>

        </div>
      </div>
    );
  }
}

export default LoginContainer;
