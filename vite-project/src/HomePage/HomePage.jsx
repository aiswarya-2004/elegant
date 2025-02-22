import React, { useState } from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
import images1 from '../images/ticket-percent.png'
import images2 from '../images/search.png'
import images3 from '../images/shopping-bag.png'
import images4 from '../images/user-circle.png'
import images5 from '../images/home.png'
import images6 from '../images/homechair.png'
import images7 from '../images/hometable.png'
import images8 from '../images/paste-image.png'
import images9 from '../images/homesofa.png'
import images10 from '../images/homelamp.png'
import images11 from '../images/homelamps.png'
import images12 from '../images/basket.png'
import images13 from '../images/card.png'
import images14 from '../images/wishlist.png'
import images15 from '../images/ratinggroup.png'
import images16 from '../images/fast-delivery.png'
import images17 from '../images/money.png'
import images18 from '../images/lock.png'
import images19 from '../images/call.png'
import images20 from '../images/homehall.png'
import images21 from '../images/newsletter.png'
import images22 from '../images/union.png'
import images24 from '../images/instagram.png'
import images25 from '../images/facebook.png'
import images26 from '../images/youtube.png'

function HomePage() {
 const [showPromo, setShowPromo]=useState(true);
 
  return (
    <div className='HomePage'>
      {showPromo &&(
      <div className='slidebar-home'>
       <div className='promoline-home'>
          <div className='promoimg-home'><img src={images1} alt="ticket" /></div>
          <div className='notificationbar-home'>30% off storewide — Limited time! <Link to='/shop' className='shopnow'> Shop Now → </Link></div>
        </div>
        <button
           className='close-button'
           onClick={() => setShowPromo(false)}
           >
             ✕
          </button>
      </div>
  )}
      <div className='header-home'>
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

        <Link to='/AddToCart'> <button className='home-carting'>
        <img src={images3} alt="cart" />
        <span className="cart-count">2</span>
         </button></Link>

        <button className='home-user'>
            <img src={images4} alt="user" />
          </button>
        </div>

      </div>


      <div className='Home-1'>
        <div className='img5'> <img src={images5} alt="home" /></div>
        <div className='first-div'>
          <div className='simple'>
            <p>Simply Uniqe<span style={{ color: 'gray' }}>/</span><br />
              Simply Better<span style={{ color: 'gray' }}>.</span> </p>
          </div>
          <div className='elegant-word'><p> <strong>3legant</strong> is a gift & decoration store based in HCMC, <br />
            Vietnam. Est since 2019.</p></div>
        </div>
      </div>


      <div className='center'>
        <div className='center-image1'>
          <img src={images6} alt="homechair" />
          <div className='livingroom'>Livingroom <br /><Link to='/shop' className='shopnow'>Shop Now →</Link>
          </div>
        </div>
        <div className='left-image'>
          <div className='center-image2'>
            <img src={images7} alt="hometable" />
            <div className='bedroom'>Bedroom<br /><Link to='/shop' className='shopnow'>Shop Now →</Link></div>
          </div>
          <div className='center-image3'>
            <img src={images8} alt="paste-image" />
            <div className='kitchen'>Kitchen<br /><Link to='/shop' className='shopnow'>Shop Now →</Link></div>
          </div>
        </div>
      </div>


      <div className='home-end-line'>
        <div className='new-arrivals'><p>New <br /> Arrivals</p></div>
        <div className='products'> <Link to='/Shop' className='product-link'>More Products →</Link></div>
      </div>

      <div className='new-products'>

        {/* sofa  */}

        <div className='div-sofa'>
          <div className='sofa'><img src={images9} alt="homesofa" />

              <div className="label-container">
                <span className="label new">NEW</span>
                <span className="label discount">-50%</span>
              </div>

              <div className='home-addtocart-sofa'>
              <Link to='/AddToCart'> <button className='addtocart-home'>Add to cart</button></Link>
              </div>

             <div className='div-wishlist'>
                <Link to='/wishlist'><span className='wishlist'> <img src={images14} alt="wishlist" /></span></Link>
             </div>

          </div>

            <div className='sofa-price'>
                <div className='rating-img'><img src={images15} alt="rating" /></div>
                <div className='sofaname'><p>Loveseat Sofa <br />$199.00<span style={{ color: 'rgba(108, 114, 117, 1)' }}>$400.00</span></p> </div>
            </div>
        </div>

        {/* glasslamp  */}

        <div className='div-glasslamp'>
          <div className='glasslamp'><img src={images10} alt="homelamp" />
            
            <div className="label-container-glasslamp">
              <span className="label-glasslamp new-glasslamp">NEW</span>
              <span className="label-glasslamp discount-glasslamp">-50%</span>
            </div>


          </div>

          <div className='glasslamp-price'>
            <div className='rating-img'><img src={images15} alt="rating" /></div>
            <div className='glasslampname'><p>Tamble Lamp <br />$24.99</p> </div>
          </div>

        </div>


        {/* goldenlamp  */}


       <div className='div-goldenlamp'>
          <div className='goldenlamp'><img src={images11} alt="homelamps" />
            <div className="label-container-goldenlamp">
              <span className="label-goldenlamp new-goldenlamp">NEW</span>
              <span className="label-goldenlamp discount-goldenlamp">-50%</span>
            </div>

          </div>

          <div className='goldenlamp-price'>
            <div className='rating-img'><img src={images15} alt="rating" /></div>
            <div className='goldenlampname'><p>Beige Table Lamp <br />$24.99</p> </div>
          </div>

        </div>

          {/* woodbasket  */}

          <div className='div-woodbasket'>
        <div className='woodbasket'><img src={images12} alt="basket" />
        <div className="label-container-woodbasket">
              <span className="label-woodbasket new-woodbasket">NEW</span>
              <span className="label-woodbasket discount-woodbasket">-50%</span>
            </div>

           
        </div>
        <div className='woodbasket-price'>
            <div className='rating-img'><img src={images15} alt="rating" /></div>
            <div className='woodbasketname'><p>Bamboo basket<br />$24.99</p> </div>
          </div>
        </div>

        {/* oven  */}

        <div className='div-oven'>
          <div className='oven'><img src={images13} alt="card" />
          <div className="label-container-oven">
              <span className="label-oven new-oven">NEW</span>
              <span className="label-oven discount-oven">-50%</span>
            </div>
          </div>
          <div className='oven-price'>
            <div className='rating-img'><img src={images15} alt="rating" /></div>
            <div className='ovenname'><p>Toasted<br />$24.99</p> </div>
          </div>
      </div>

      <div className='new-products-line'></div>
  </div>


      <div className='values'>
        <div className='card01'>
          <img src={images16} alt="card1" />
          <div className='free-shopping'><p> <strong>Free Shopping </strong></p></div>
          <div className='card01-order'><span style={{ color : 'rgba(108, 114, 117, 1)'}}>Order above $200</span></div>
          </div>

        <div className='card01'>
        <img src={images17} alt="card1" />
        <div className='free-shopping'><p> <strong>Money-back </strong></p></div>
          <div className='card01-order'><span style={{ color : 'rgba(108, 114, 117, 1)'}}>30 days guarantee</span></div>
          </div>

          <div className='card01'>
          <img src={images18} alt="card1" />
        <div className='free-shopping'><p> <strong>Secure Payments</strong></p></div>
          <div className='card01-order'><span style={{ color : 'rgba(108, 114, 117, 1)'}}>Secured by Stripe</span></div>
          </div>

        <div className='card01'>
            <img src={images19} alt="card1" />
        <div className='free-shopping'><p> <strong>24/7 Support</strong></p></div>
          <div className='card01-order'><span style={{ color : 'rgba(108, 114, 117, 1)'}}>Phone and Email support</span></div>
         </div>

          </div>



      <div className='sales-up-to'>
        <div className='sales-upto-image'><img src={images20} alt="homehall" /></div>
        
        <div className='sales-offers-home'>
         <div className='sales-home'><p>SALES UP TO 35% OFF</p></div>
         <div className='bold-sentence'><p>HUNDREDS of <br />New lower prices!</p></div>
         <div className='home-sentence'><p>It's more affordable than ever to give every <br /> room in your home a stylish makeover</p></div>
        <div className='shoplink'><Link to= '/shop' className='shopnow'>Shop Now →</Link></div>
        </div>

      </div>
      
       <div className='lastimg-home'>
        <img src={images21} alt="image-newsletter" />
        <div className='newsletter-bold'>Join Our Newsletter</div>
        <div className='signup-deals'>Sign up deals, new products and promotions</div>
        <div className='email-signup-box'>
              <img src={images22} alt="union"  />
             <div className='email-signup'> Email address</div>
                <div className='home-signup'>Signup</div>
          </div>
        </div>
        <div className='last-blacktheme'>
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

export default HomePage
