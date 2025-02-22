import React from 'react'
import './OrderPage.css'
import { Link } from 'react-router-dom'
import images2 from '../images/search.png'
import images3 from '../images/shopping-bag.png'
import images4 from '../images/user-circle.png'
import images6 from '../images/blacktray.png'
import images7 from '../images/redtray.png'
import images8 from '../images/tablelamp.png'
import images24 from '../images/instagram.png'
import images25 from '../images/facebook.png'
import images26 from '../images/youtube.png'
function OrderPage() {
  return (
    <div className='OrderPage'>
   <div className='header-shop'>
                <div className='elegant'>3legant.</div>
                <div className='links'>
                  <div className='link1'><a href="/HomePage">Home</a> </div>
                  <div className='link2'><a href="/Shop">Shop</a></div>
                  <div className='link3'><a href="/Product">Product</a></div>
                  <div className='link4'><a href="/ContactUs">Contact Us</a></div>
                </div>
                  <div className='home-header-icon'>
                    <button className='home-search'>
                              <img src={images2} alt="search" />
                            </button>
                    
                            <Link to='/Cart-page'> <button className='home-carting'>
                            <img src={images3} alt="cart" />
                            <span className="cart-count">2</span>
                             </button></Link>
                    
                            <button className='home-user'>
                                <img src={images4} alt="user" />
                              </button>
                </div>

          </div>
    <div className='ordercomplete'>

        <div className='checkoutdiv'>
            <div className='checkoutheading'>Complete!</div>
            <div className='productstatus'>
            <div className='productstatus21'>
            <div className="shipcart">✔</div>
            <div className='shipcarting'>Shipping Cart</div>
            </div>
            <div className='productstatus21'>
            <div className="shipcart">✔</div>
            <div className='shipcarting'>Checkout details</div>
            </div>
            <div className='productstatus31'>
             <div className="shipcart21">3</div>
            <div className='shipcarting21'>Order complete</div>
            </div>
            </div>
        </div>
          
        <div className='placedorder'>
            <div className='greeting'>
                <div className='thankyou'>Thank you!🎉</div>
                <div className='yourorder'>Your order has been</div>
                <div className='yourorder'>recieved</div>
            </div>
            <div className='itemsec'>
                <div className='itemsimg1'>
                <img src={images6} alt="" />
                <span className="pq">2</span>
                </div>
                <div className='itemsimg2'>
                <img src={images7} alt="" />
                <span className="pq">2</span>
                </div>
                <div className='itemsimg3'>
                <img src={images8} alt="" />
                <span className="pq">1</span>
                </div>
            </div>
            <div className='orderde'>
                <div className='orderde1'>
                  <p>Order:</p>
                  <p>Date:</p>
                  <p>Total:</p>
                  <p>Payment method:</p>
                </div>
                <div className='orderde2'>
                  <p>#0123_45678</p>
                  <p>October 19,2023</p>
                  <p>$1,345.00</p>
                  <p>Credit Card</p>
                </div>

            </div>
            <button className='purchasehistory'>Purchase history</button>
        </div> 
    </div>
    <div className='lastblackdiv'>
        <div className='blacktheme-innerbox1'>
      <div className='home-last-elegant'>3legant.</div>
      <div className='gift-decoration-store'>Gift & Decoration Store</div>
      <div className='home-last-details'>
      <div className='link-home'><a href="/HomePage">Home</a> </div>
      <div className='link-home'><a href="/Shop">Shop</a></div>
      <div className='link-home'><a href="/Product">Product</a></div>
      <div className='link-home'><a href="/Blog">Blog</a></div>
      <div className='link-home'><a href="/ContactUs">Contact Us</a></div>
      </div>
      </div>
      <div className='blacktheme-innerbox2'>
             <div className='copyright-home'> Copyright © 2023 3legant. All rights reserved</div>
             <div className='privacy-home'>Privacy Policy</div>
             <div className='terms-home'>Terms of Use</div>
                <div className='insta-face-you'>
                    <img src={images24} alt="instagram" />
                    <img src={images25} alt="facebook" />
                    <img src={images26} alt="youtube" />
                </div>
              
         </div>
    
      </div>
        
</div>
  )
}

export default OrderPage
