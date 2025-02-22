import React,{ useState }  from 'react'
import './Product.css'
import images1 from '../images/ticket-percent.png'
import images2 from '../images/search.png'
import images3 from '../images/shopping-bag.png'
import images4 from '../images/user-circle.png'
// import images5 from '../images/imagegrid.png'
import images6 from '../images/chair44.png'
import images7 from '../images/chair45.png'
import images8 from '../images/chair46.png'
import images9 from '../images/Meta.png'
import images10 from '../images/darrow.png'
import images11 from '../images/homesofa.png'
import images12 from '../images/homelamp.png'
import images13 from '../images/homelamps.png'
import images14 from '../images/basket.png'
import images15 from '../images/card.png'
import images21 from '../images/newsletter.png'
import images22 from '../images/union.png'
import images24 from '../images/instagram.png'
import images25 from '../images/facebook.png'
import images26 from '../images/youtube.png'
import images27 from '../images/stoolimg1.png'
import images28 from '../images/stoolimg2.png'
import images29 from '../images/stoolimg3.png'
import images30 from '../images/stoolimg4.png'
import images31 from '../images/stoolimg5.png'
import images32 from '../images/stoolimg6.png'

import { Link } from 'react-router-dom'

function Product() {
       const [showPromo, setShowPromo]=useState(true);
  return (
    <div className='Product'>
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
                <div className='heading'>
                      <span style={{ color: 'gray' }}>Home</span>
                      <span style={{ color: 'gray' }}>&gt;</span>
                      <span style={{ color: 'gray' }}>Shop</span>
                      <span style={{ color: 'gray' }}>&gt;</span>
                      <span style={{ color: 'gray' }}>Living Room</span>
                      <span style={{ color: 'gray' }}>&gt;</span>
                      <span style={{ color: 'rgba(18, 18, 18, 1)' }}>Product</span>
                </div>
            <div className='traytable'>
              <div className='traytable-photos'>
                <div className='traytable1'>
                  <img src={images27} alt="stoolimg1" />
                  <img src={images28} alt="stoolimg2" />
                </div>
                <div className='traytable1'>
                <img src={images29} alt="stoolimg3" />
                <img src={images30} alt="stoolimg4" />
                </div>
                <div className='traytable1'>
                <img src={images31} alt="stoolimg5" />
                <img src={images32} alt="stoolimg6" />
                </div>
              </div>
              <div className='trayaddtocart'>
                <span className='reviews'>★★★★★ 11 Reviews</span>
                <h1>Tray Table</h1>
                <h5>Buy one or buy few and make every space where you sit more <br />
                   convenient. Light and easy to move around with removable tray <br />
                   top, handy for serving snacks. </h5>
                   <div className='pricetray'>$299.00<span style={{ color : 'rgba(108, 114, 117, 1)'}}>$500.00</span></div>
                   <p>Measurements</p><p>17 1/2x20 5/8 "</p>
                   <div>Choose Color &gt;</div>
                   <p>Black</p>
                   <div className='small-chair'>
                    <img src={images6} alt="" />
                    <img src={images7} alt="" />
                    <img src={images8} alt="" />
                   </div>

                  <div className='product-addtocart'>
                    <div  className='product-addtocart1'>
                      <p>-</p>
                      <p>1</p>
                      <p>+</p>
                    </div>
                    <div  className='product-addtocart2'>
                      <p>♡ Wishlist</p>
                    </div>
                  </div>
                    <div className='pro-add'>Add to Cart</div>
                  <div className='sku'>
                 <img src={images9} alt="" />

                  </div>
                  <div className='additionalinfo'>
                    <h3>Additional Info</h3>
                    <img src={images10} alt="darrow" />
                 
                  </div>
                  <div className='details'>
                    <h5><span style={{ color: 'rgba(108, 114, 117, 1)' }}>Details</span></h5>
                    <p>You can use the removable tray for serving. The design makes it easy to put the tray <br /> back after use since you place it directly on the table frame without having to fit it into <br /> any holes.</p>
                  </div>
                  <div className='packaging'>
                  <h5><span style={{ color: 'rgba(108, 114, 117, 1)' }}>packaging</span></h5>
                  <p>Width: 20 " Height: 11/2 " Length:21 1/2 " <br />Width: 7 lb 8 oz <br /> Package(s): 1</p>
                  </div>
                  <div className='additionalinfo'>
                    <h3>Questions</h3>
                    <img src={images10} alt="darrow" />
                 </div>
                  <div className='additionalinfo'>
                    <h3>Reviews(11)</h3>
                    <img src={images10} alt="darrow" />
                 </div>

              </div>
            </div>
            <div className='product-end-line'>
              <div className='youmight'><p>You might also like</p></div>
              <div className='productstoshop'> <Link to='/Shop' className='productspage-link'>More Products →</Link></div>
            </div>
            <div className='more-products'> 

               <Link to='/Product'><div className='shop-products-div'>
                        <div className='shop-propertyimg'>
                            <img src={images11} alt="sofa"/>
                            <div className='label-shop'>
                              <span className='label-shopnew'>NEW</span>
                              <span className='label-shopprice'>-50%</span>
                              <button className='whishlistshop'>♡</button>
                              <button className='addtocartshop'>Add to cart</button>
                            </div>
                          </div>
                          <div className='shop-propertyprice'>
                            <span className='star'>★★★★★</span>
                            <div className='Loveseat-sofa'>Black Tray table</div>
                            <div className='priceof'>$199.00<span style={{ color: 'rgba(108, 114, 117, 1)' }}>$400.00</span></div>
              
                          </div>
                        </div></Link>

                        <div className='shop-products-div'>
                        <div className='shop-propertyimg'>
                            <img src={images12} alt="sofa"/>
                           
                          </div>
                          <div className='shop-propertyprice'>
                            <span className='star'>★★★★★</span>
                            <div className='Loveseat-sofa'>Table Lamp</div>
                            <div className='priceof'>$24.99</div>
              
                          </div> 
                          </div>

                          <div className='shop-products-div'>
                        <div className='shop-propertyimg'>
                            <img src={images13} alt="sofa"/>
                           
                          </div>
                          <div className='shop-propertyprice'>
                            <span className='star'>★★★★★</span>
                            <div className='Loveseat-sofa'>Beige Table Lamp</div>
                            <div className='priceof'>$24.99</div>
              
                          </div> 
                          </div>  
                          <div className='shop-products-div'>
                        <div className='shop-propertyimg'>
                            <img src={images14} alt="sofa"/>
                           
                          </div>
                          <div className='shop-propertyprice'>
                            <span className='star'>★★★★★</span>
                            <div className='Loveseat-sofa'>Bamboo basket</div>
                            <div className='priceof'>$24.99</div>
              
                          </div> 
                          </div>
                          <div className='shop-products-div'>
                        <div className='shop-propertyimg'>
                            <img src={images15} alt="sofa"/>
                           
                          </div>
                          <div className='shop-propertyprice'>
                            <span className='star'>★★★★★</span>
                            <div className='Loveseat-sofa'>Toasted</div>
                            <div className='priceof'>$224.99</div>
              
                          </div> 
                          </div>  
            </div>

            <div className='product-line'>
              <div className='product-lines'></div>
            </div>
                <div className='space-div'></div>
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

export default Product
