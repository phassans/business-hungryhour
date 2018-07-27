import React, { Component } from 'react';
import './signUpContainer.css';
import { Link } from 'react-router-dom';
import NavBar from '../../components/navs/signUpLoginNav/signUpLoginNav';
import TextField from "material-ui/TextField";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BASE_URL } from "../../data/api";

class SignUpContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      nameError: "",
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
      nameError: "",
      emailError: "",
      passwordError: ""
    };

    if (this.state.name.length == 0) {
      isError = true;
      errors.nameError = "Full name is required";
    }

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
    // this.props.onSubmit(this.state);
    const err = this.validate();
    if (!err) {
      // clear form
      this.setState({
        nameError: "",
        emailError: "",
        passwordError: "",
        submitErrors: ""
      });

      fetch(BASE_URL + 'user/add', {
        method: 'POST',
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        })
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          if (responseJson.code === 400 && responseJson.message) {
            this.setState({submitErrors: responseJson.message});
            return;
          }

          this.props.history.push('/AddBusiness');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <div className='mainContainer' >

        <NavBar btnTitle='Login' />

        <div className="top-header" >
          <div className="heading" >Get started with a free account</div>
          <div className='login' >Already have an account? <Link to="/Login">Log In</Link></div>
        </div>
        <form>
          <MuiThemeProvider>
            <div>
              <div className='inputMainContainer signUpInputCont'>
                <div className='inputContainer centeredInput' style={{color: 'rgb(244, 67, 54)'}}>
                  {this.state.submitErrors}
                  </div>
              </div>
              <div className='inputMainContainer signUpInputCont' >
                <div className='inputContainer centeredInput' >
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
                  {/* <input type='text' placeholder='Full Name' ref={(nameInput) => this.userInfo.name = nameInput} required /> */}
                  <TextField
                    name="name"
                    hintText="Full name"
                    value={this.state.name}
                    onChange={e => this.change(e)}
                    errorText={this.state.nameError}
                  />
                </div>
                <div className='inputContainer centeredInput' >
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
              </div>

              <div className='footer' >
                <div className='btnContainer' >
                  <button onClick={e => this.onSubmit(e)} className="btn orangeBtn">Sign Up</button>
                  {/* <Link to='/AddBusiness' className="btn orangeBtn">Sign Up</Link> */}
                  <div className='orTxtMainCont' >
                    <div className='orLineCont' ><div className='orLine' /></div>
                    <div className='orTxt' >Or</div>
                    <div className='orLineCont' ><div className='orLine' /></div>
                  </div>
                  <div className='AnotherWayAdviceSL' >Sign up with your Facebook or Google Account</div>
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

                <div className="condition" >By clicking sign up, you agree to the Terms and Conditions of HungryHour.</div>
              </div>
            </div>
          </MuiThemeProvider>

        </form>
      </div>
    );
  }
}

export default SignUpContainer;
