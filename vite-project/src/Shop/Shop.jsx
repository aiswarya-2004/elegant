import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import images1 from '../images/ticket-percent.png'
import images2 from '../images/search.png'
import images3 from '../images/shopping-bag.png'
import images4 from '../images/user-circle.png'
import images5 from '../images/shoppageimg.png'
import images6 from '../images/nine.png'
import images7 from '../images/four.png'
import images8 from '../images/ii.png'
import images9 from '../images/horitwo.png'
import images10 from '../images/homesofa.png'
import images11 from '../images/homechair.png'
import images12 from '../images/homelamps.png'
import images13 from '../images/shopsofa.png'
import images14 from '../images/shelf.png'
import images15 from '../images/stool.png'
import images16 from '../images/lamp.png'
import images17 from '../images/stool2.png'
import images18 from '../images/pillow.png'
import images19 from '../images/homelamp.png'
import images20 from '../images/basket.png'
import images21 from '../images/offwhite.png'
import images22 from '../images/newsletter.png'
import images23 from '../images/union.png'
import images24 from '../images/instagram.png'
import images25 from '../images/facebook.png'
import images26 from '../images/youtube.png'
import '../Product/Product'
import './Shop.css'
import Product from '../Product/Product'
function Shop() {
   const [showPromo, setShowPromo]=useState(true);
   

  return (
    <div className='Shop'>
        {showPromo &&(
        <div className='slidebar-shop'>
          <div className='promoline-shop'>
            <div className='promoimg'><img src={images1} alt="ticket" /></div>
            <div className='notificationbar-shop'>30% off storewide — Limited time! <Link to='/shop' className='shopnow'> Shop Now → </Link></div>
          </div>
          <button
           className='close-button-shop'
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

        <div className='shop-page'>
                  <img src={images5} alt="shoppage" />
                  <div className='shopimg-inside-div'>
                    <div className='home-shop'>
                      <span style={{ color: 'gray' }}>Home</span>
                      <span style={{ color: 'gray' }}>&gt;</span>
                      <span>Shop</span>
                    </div>
                    <div className='shoppage'>Shop page</div>
                    <div className='shoppage-line'>Let's design the place you always imagined.</div>
                  </div>
        </div>

        <div className='shop-cato-price'>
          <div className='categories-price-shop'>
            <div className='categories-shop'>
              <label>CATEGORIES</label>
              <select className='select-categories'>
                <option>Living Room</option>
                <option>Bedroom</option>
                <option>Kitchen</option>
              </select>
            </div>

            <div className='price-shop'>
            <label>PRICE</label>
              <select className='select-price'>
              <option>All Price</option>
              <option>Under $100</option>
              <option>$100 - $500</option>
              <option>Over $500</option>
              </select>
            </div>
          </div>
          <div className='sort-img-shop'>
            <div className='sortby-shop'>
              <select className='select-sortby'>
                <option>Sort by</option>
              </select>
            </div>
            <div className='preview-shop'>
              <button
    
              className='shop-properties'>
                <img src={images6} alt="nine" />
              </button>
              <button className='shop-properties-grid'>
                <img src={images7} alt="four" />
              </button>
              <button className='shop-properties'>
                <img src={images8} alt="ii" />
              </button>
              <button className='shop-properties'>
                <img src={images9} alt="two" />
              </button>
            </div>
          </div>
        </div>
        <div className='shop-totaldiv'>
        <div className='shop-div1'>
          <div className='shop-products-div'>
            <div className='shop-propertyimg'>
              <img src={images10} alt="sofa"/>
              <div className='label-shop'>
                <span className='label-shopnew'>NEW</span>
                <span className='label-shopprice'>-50%</span>
              </div>
            </div>
            <div className='shop-propertyprice'>
              <span className='star'>★★★★★</span>
              <div className='Loveseat-sofa'>Loveseat Sofa</div>
              <div className='priceof'>$199.00<span style={{ color : 'rgba(108, 114, 117, 1)'}}>$400.00</span></div>
            </div>
          </div>
          <div className='shop-products-div'>
          <div className='shop-propertyimg'>
              <img src={images11} alt="sofa"/>
              <div className='label-shop'>
                <span className='label-shopnew'>NEW</span>
                <span className='label-shopprice'>-50%</span>
              </div>
            </div>
            <div className='shop-propertyprice'>
              <span className='star'>★★★★★</span>
              <div className='Loveseat-sofa'>Luxury Sofa</div>
              <div className='priceof'>$299.00<span style={{ color : 'rgba(108, 114, 117, 1)'}}>$500.00</span></div>
            </div>
          </div>
          <div className='shop-products-div'>
          <div className='shop-propertyimg'>
              <img src={images12} alt="sofa"/>
              <div className='label-shop'>
                <span className='label-shopnew'>NEW</span>
                <span className='label-shopprice'>-50%</span>
              </div>
            </div>
            <div className='shop-propertyprice'>
              <span className='star'>★★★★★</span>
              <div className='Loveseat-sofa'>Table Lamp</div>
              <div className='priceof'>$19.00</div>
            </div>
          </div>
          <div className='shop-products-div'>
          <div className='shop-propertyimg'>
              <img src={images13} alt="sofa"/>
              <div className='label-shop'>
                <span className='label-shopnew'>NEW</span>
                <span className='label-shopprice'>-50%</span>
              </div>
            </div>
            <div className='shop-propertyprice'>
              <span className='star'>★★★★★</span>
              <div className='Loveseat-sofa'>Cozy Sofa</div>
              <div className='priceof'>$299.00</div>
            </div>
          </div>
        </div>

      <div className='shop-div1'>
        <div className='shop-products-div'>
          <div className='shop-propertyimg'>
              <img src={images14} alt="sofa"/>
              <div className='label-shop'>
                <span className='label-shopnew'>NEW</span>
                <span className='label-shopprice'>-50%</span>
              </div>
            </div>
            <div className='shop-propertyprice'>
              <span className='star'>★★★★★</span>
              <div className='Loveseat-sofa'>White Drawer unit</div>
              <div className='priceof'>$89.99</div>
            </div>
          </div>
          <Link to='/Product'><div className='shop-products-div'>
          <div className='shop-propertyimg'>
              <img src={images15} alt="sofa"/>
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
              <div className='priceof'>$19.99</div>

            </div>
          </div></Link>
          <div className='shop-products-div'>
          <div className='shop-propertyimg'>
              <img src={images16} alt="sofa"/>
              <div className='label-shop'>
                <span className='label-shopnew'>NEW</span>
                <span className='label-shopprice'>-50%</span>
              </div>
            </div>
            <div className='shop-propertyprice'>
              <span className='star'>★★★★★</span>
              <div className='Loveseat-sofa'>Table Lamp</div>
              <div className='priceof'>$19.00</div>
            </div>
          </div>
          <div className='shop-products-div'>
          <div className='shop-propertyimg'>
              <img src={images17} alt="sofa"/>
              <div className='label-shop'>
                <span className='label-shopnew'>NEW</span>
                <span className='label-shopprice'>-50%</span>
              </div>
            </div>
            <div className='shop-propertyprice'>
              <span className='star'>★★★★★</span>
              <div className='Loveseat-sofa'>Black Brow Side table</div>
              <div className='priceof'>$16.99</div>
            </div>
          </div>
      </div>

      <div className='shop-div1'>
        <div className='shop-products-div'>
          <div className='shop-propertyimg'>
              <img src={images18} alt="sofa"/>
              <div className='label-shop'>
                <span className='label-shopnew'>NEW</span>
                <span className='label-shopprice'>-50%</span>
              </div>
            </div>
            <div className='shop-propertyprice'>
              <span className='star'>★★★★★</span>
              <div className='Loveseat-sofa'>Light Beige Pillow</div>
              <div className='priceof'>$3.99</div>
            </div>
          </div>
          <div className='shop-products-div'>
          <div className='shop-propertyimg'>
              <img src={images19} alt="sofa"/>
              <div className='label-shop'>
                <span className='label-shopnew'>NEW</span>
                <span className='label-shopprice'>-50%</span>
              </div>
            </div>
            <div className='shop-propertyprice'>
              <span className='star'>★★★★★</span>
              <div className='Loveseat-sofa'>Table Lamp</div>
              <div className='priceof'>$39.99</div>
            </div>
          </div>
          <div className='shop-products-div'>
          <div className='shop-propertyimg'>
              <img src={images20} alt="sofa"/>
              <div className='label-shop'>
                <span className='label-shopnew'>NEW</span>
                <span className='label-shopprice'>-50%</span>
              </div>
            </div>
            <div className='shop-propertyprice'>
              <span className='star'>★★★★★</span>
              <div className='Loveseat-sofa'>Bamboo Basket</div>
              <div className='priceof'>$9.99</div>
            </div>
          </div>
          <div className='shop-products-div'>
          <div className='shop-propertyimg'>
              <img src={images21} alt="sofa"/>
              <div className='label-shop'>
                <span className='label-shopnew'>NEW</span>
                <span className='label-shopprice'>-50%</span>
              </div>
            </div>
            <div className='shop-propertyprice'>
              <span className='star'>★★★★★</span>
              <div className='Loveseat-sofa'>Off-white Pillow</div>
              <div className='priceof'>$7.99</div>
            </div>
          </div>
      </div>
    </div>
    <div className='show-morediv'>
    <div className='show-more'>Show more</div>
</div>
      <div className='lastimg-home'>
            <img src={images22} alt="image-newsletter" />
            <div className='newsletter-bold'>Join Our Newsletter</div>
            <div className='signup-deals'>Sign up deals, new products and promotions</div>
            <div className='email-signup-box'>
                  <img src={images23} alt="union"  />
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

export default Shop
