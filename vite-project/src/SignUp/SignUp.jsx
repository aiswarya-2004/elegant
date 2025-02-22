import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
import images from '../images/chair.png'

function SignUp() {

  return (
    <div className='SignUp'>
      <div className='image'>
        <img src={images} alt="Elegant Chair" />
        <div className='overlay-text'>
          3legant.
        </div>
      </div>
      <div className='signup-form'>
        <div className='head-signup'>Sign up</div>
        <p className='forgot-password'>Already have an account? <Link to='/SignIn' className='signIn'> Sign in </Link></p>

        <form>

          <div className='input-field'>
            <input type="text" 
            placeholder="Your name" 
            className='inputspace' 
            required/>
          </div>

          <div className='input-field'>
            <input type="text" 
            placeholder="Username" 
            className='inputspace' 
            required/>
          </div>

          <div className='input-field'>
            <input type="email" 
            placeholder="Email address" 
            className='inputspace' 
            required/>
          </div>
          <div className='input-field'>
            <input type="password" 
            placeholder="Password" 
            className='inputspace' 
            required/>
          </div>

          <div className='checking'>
            <input type="checkbox" className='checkbox' />
            <span className='terms'>I agree with  <a>Privacy Policy</a> and <a>Terms of Use </a></span>
          </div>
          <div className='buttons'>
            <button type="submit" className='sign-up-button'>Sign Up</button></div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
