import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import images2 from '../images/search.png'
import images3 from '../images/shopping-bag.png'
import images4 from '../images/user-circle.png'
import images6 from '../images/blacktray.png'
import images7 from '../images/redtray.png'
import images8 from '../images/tablelamp.png'
import images9 from '../images/ticket-percent.png'
import images24 from '../images/instagram.png'
import images25 from '../images/facebook.png'
import images26 from '../images/youtube.png'

function Cart() {
  return (
    <div className='Cart'>
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

  <div className='productcart'>
    <div className='cartdiv'>
      <div className='headingcart'>Cart</div>
      <div className='status'>
        <div className='shippingstatus'>
        <div className="shipping">1</div>
        <div className='shippingcart1'>Shipping Cart</div>
        </div>
        <div className='shippingstatus1'>
        <div className="shipping1">2</div>
        <div className='shippingcart'>Checkout details</div>
        </div>
        <div className='shippingstatus1'>
        <div className="shipping2">3</div>
        <div className='shippingcart'>Order Complete</div>
        </div>
      </div>
    </div>
    <div className='cartproductdiv'>
      <div className='productdiv'>
        <div className='productheading'>
          <div className='p'>Product</div>
          <div className='qps'>
            <div className='qpsdiv'>Quantity</div>
            <div className='qpsdiv'>Price</div>
            <div className='qpsdiv'>Subtotal</div>
          </div>
        </div>
        <div className='productscarting'>
          <div className='traytable'>
            <img src={images6} alt="" />
            <div className='colordetails'>
              <p className='productname'>Tray Table</p>
              <p className='productcolor'>Color: Black</p>
              <p className='productremove'>✕ Remove</p>
            </div>
          </div>
            <div className='productqps'>
              <div className='quantitycheck'>
                <div className='quantitywant'>-</div>
                <div className='quantitywant'>2</div>
                <div className='quantitywant'>+</div>
              </div>
              <div className='pmenu'>$19.00</div>
              <div className='smenu'>$38.00</div>
            </div>
        </div>
        <div className='productscarting'>
        <div className='traytable'>
            <img src={images7} alt="" />
            <div className='colordetails'>
              <p className='productname'>Tray Table</p>
              <p className='productcolor'>Color: Red</p>
              <p className='productremove'>✕ Remove</p>
            </div>
          </div>
            <div className='productqps'>
              <div className='quantitycheck'>
                <div className='quantitywant'>-</div>
                <div className='quantitywant'>2</div>
                <div className='quantitywant'>+</div>
              </div>
              <div className='pmenu'>$19.00</div>
              <div className='smenu'>$38.00</div>
            </div>
          
        </div>
        <div className='productscarting'>
        <div className='traytable'>
            <img src={images8} alt="" />
            <div className='colordetails'>
              <p className='productname'>Table lamp</p>
              <p className='productcolor'>Color: Gold</p>
              <p className='productremove'>✕ Remove</p>
            </div>
          </div>
            <div className='productqps'>
              <div className='quantitycheck'>
                <div className='quantitywant'>-</div>
                <div className='quantitywant'>1</div>
                <div className='quantitywant'>+</div>
              </div>
              <div className='pmenu'>$39.00</div>
              <div className='smenu'>$39.00</div>
            </div>
        </div>
      </div>
      <div className='cartsummary'>
        <div className='cartsummayhead'>Cart summary</div>
        <div className='shippingprocess'>
          <div className='check-fep'>
          <div className='productcheckbox'>
            <div className='innercheckbox'></div>
          </div>
          <div className='fep'>Free shipping</div>
          </div>
          <div className='amount1'>$0.00</div>
        </div>
        <div className='shippingprocess1'>
          <div className='check-fep'>
        <div className='productcheckbox'>
            {/* <div className='innercheckbox'></div> */}
          </div>
        <div className='fep'>Express shipping</div>
        </div>
        <div className='amount1'>+$15.00</div>
        </div>
        <div className='shippingprocess1'>
          <div className='check-fep'>
        <div className='productcheckbox'>
            {/* <div className='innercheckbox'></div> */}
          </div>
        <div className='fep'>Pick Up</div>
        </div>
        <div className='amount1'>%21.00</div>
        </div>
        <div className='subtotal-total'>
        <p className='subtotal'>Subtotal</p>
        <p className='total-doller'>$1234.00</p>
        </div>
        <div className='subtotal-total1'>
          <p className='Totalprice'>Total</p>
          <p className='totaldoller'>$1345.00</p>
        </div>
        <div className='checkout'>Checkout</div>
      </div>
    
  </div>    

  <div className='productlastdiv'>
  <div className='coupon-div'>
    <div className='coupon'>Have a coupon?</div>
    <p>Add your code for an instant cart discount</p>
    <div className='couponcode'>
      
      <img src={images9} alt="couponcode" />
      <p>Coupon Code</p> 
      <div className='apply'>Apply</div>
    </div>
  </div>
  </div>
  </div>
    <div className='lastblack'>
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

export default Cart
