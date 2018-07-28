import React, { Component } from 'react';
import '../signUpContainer/signUpContainer.css';
import { Link } from 'react-router-dom';
import NavBar from '../../components/navs/signUpLoginNav/signUpLoginNav';
import TextField from "material-ui/TextField";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { BASE_URL } from "../../data/api";

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.userInfo = {};
    this.userInfo.email = React.createRef();
    this.userInfo.password = React.createRef();

    this.state = {
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
      submitErrors: ""
    };
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      emailError: "",
      passwordError: ""
    };

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Requires valid email";
    }

    if (this.state.password.length == 0) {
      isError = true;
      errors.passwordError = "Password is required";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      // clear form
      this.setState({
        emailError: "",
        passwordError: "",
        submitErrors: ""
      });

      fetch(BASE_URL + 'user/verify', {
        method: 'POST',
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          if (responseJson.code === 400 && responseJson.message) {
            this.setState({ submitErrors: responseJson.message });
            return;
          }

          this.props.history.push('/');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

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

        this.props.history.push('/');
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
        <form>
          <MuiThemeProvider>
            <div>
              <div className='inputMainContainer signUpInputCont'>
                <div className='inputContainer centeredInput' style={{ color: 'rgb(244, 67, 54)' }}>
                  {this.state.submitErrors}
                </div>
              </div>

              <div className='inputMainContainer' >
                <div className='inputContainer centeredInput' >
                  {/* <div>Enter your Email</div> */}
                  <TextField
                    name="email"
                    hintText="Email"
                    value={this.state.email}
                    onChange={e => this.change(e)}
                    errorText={this.state.emailError}
                    type="email"
                  />
                  {/* <input type='email' placeholder='Email' ref={(input) => this.userInfo.email = input} required /> */}
                </div>
                <div className='inputContainer centeredInput' >
                  {/* <div>Enter your Password</div> */}
                  <TextField
                    name="password"
                    hintText="Password"
                    value={this.state.password}
                    onChange={e => this.change(e)}
                    errorText={this.state.passwordError}
                    type="password"
                  />
                  {/* <input type='password' placeholder='Password' ref={(passwordInput) => this.userInfo.password = passwordInput} required /> */}
                </div>

                <label className="container rememberCheckbox" style={{ width: '256px' }}>
                  Remember Me
                <input type="checkbox" />
                  <span style={{ marginLeft: '1%', marginTop: '2px', }} className="checkmark"></span>
                </label>
                <div className='flink' style={{ width: '256px' }} ><a href='#' >Forgot username or password?</a></div>
                {/* <div className='flink' ><a href='#' >Log in with SSO</a></div> */}
              </div>

              <div className='footer' >
                <div className='btnContainer' >
                  <button className="btn orangeBtn" onClick={e => this.onSubmit(e)}>Log in</button>
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
          </MuiThemeProvider>
        </form>
      </div>
    );
  }
}

export default LoginContainer;
