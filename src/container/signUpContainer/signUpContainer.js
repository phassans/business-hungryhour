import React, { Component } from 'react';
import './signUpContainer.css';
import { Link } from 'react-router-dom';
import NavBar from '../../components/navs/signUpLoginNav/signUpLoginNav';
import { BASE_URL } from "../../data/api";

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    
    this.userInfo = {};
    this.userInfo.email = React.createRef();
    this.userInfo.name = React.createRef();
    this.userInfo.password = React.createRef();
  }

  signup = () => {
    console.log(this.userInfo.email);
    const email = this.userInfo.email;
    const name = this.userInfo.name;
    const password = this.userInfo.password;

    if (!email.validity.valid) {
      alert("(" + email.placeholder + ") - " + email.validationMessage);
      return;
    }

    if (!name.validity.valid) {
      alert("(" + name.placeholder + ") - " + name.validationMessage);
      return;
    }

    if (!password.validity.valid) {
      alert("(" + password.placeholder + ") - " + password.validationMessage);
      return;
    }


    fetch(BASE_URL + 'user/add', {
      method: 'POST',
      body: JSON.stringify({
        name: name.value,
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

        alert("Success");
        this.props.history.push('/AddBusiness');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className='mainContainer' >

        <NavBar btnTitle='Login' />

        <div className="top-header" >
          <div className="heading" >Get started with a free account</div>
          <div className='login' >Already have an account? <Link to="/Login">Log In</Link></div>
        </div>
        <div className='inputMainContainer signUpInputCont' >
          <div className='inputContainer centeredInput' >
            <input type='email' placeholder='Email' ref={(input) => this.userInfo.email = input} required />
          </div>
          <div className='inputContainer centeredInput' >
            <input type='text' placeholder='Full Name' ref={(nameInput) => this.userInfo.name = nameInput} required />
          </div>
          <div className='inputContainer centeredInput' >
            <input type='password' placeholder='Password' ref={(passwordInput) => this.userInfo.password = passwordInput} required />
          </div>
        </div>

        <div className='footer' >
          <div className='btnContainer' >
            <button onClick={this.signup} className="btn orangeBtn">Sign Up</button>
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
    );
  }
}

export default SignUpContainer;
