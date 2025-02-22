import React from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom'
import images from '../images/chair.png'
function SignIn() {
  return (
    <div className='SignIn'>
    <div className='img'>
    <img src={images} alt="Elegant Chair" />
    <div className='overlay-text'>
        3legant.
      </div>
    </div>
    <div className='SignIn-form'>
    <div className='head-signin'>Sign In</div>
          <p className='forgot-password'> Don't have an account yet? <Link to='/SignUp' className='signup' > Sign up</Link></p>
          <form>

          <div className='input-field'>
            <input type="email" placeholder=" Username , email address"  className='inputspace' required/>
          </div>
          <div className='input-field'>
            <input type="password" placeholder="Password"  className='inputspace' required/>
          </div>
          <div className='checking'>
        <input type="checkbox" className='checkbox'/>

        <span className="term">
              Remember me       
            </span>
        <a href="/forgot-password" className='forgot-pass'>Forgot password?</a>
        </div>
            <div className='buttons'>
            <button type="submit" className="sign-In-button">Sign In</button></div>
          </form>
      </div>
        </div>
        
            
  )
}

export default SignIn
