import React, { Component } from 'react';
import './App.css';

import NavBar from '../../components/nav/nav';

class App extends Component {
  render() {
    return (
      <div className='mainContainer' >
        
        <NavBar />
        
        <div className="top-header" >
          <div className="heading" >Get started with a free account</div>
          <div className='login' >Already have an account? <a href='#' >Login</a></div>
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

        <div className='btnContainer' >
          <button className="btn">Sign Up</button>
          <div><a href='#' >or sign up with</a></div>
        </div>

        <div className="btnGroup" >
          <button className="btn1">Facebook</button>
          <button className="btn1">Google</button>
        </div>

        <div className="condition" >By clicking sign up, you agree to the Terms and Conditions of HungryHour.</div>
      </div>
    );
  }
}

export default App;
