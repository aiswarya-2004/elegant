import React from 'react'
import './Check.css'
import { Link } from 'react-router-dom'
import images2 from '../images/search.png'
import images3 from '../images/shopping-bag.png'
import images4 from '../images/user-circle.png'
import images5 from '../images/money.png'
import images6 from '../images/blacktray.png'
import images7 from '../images/redtray.png'
import images8 from '../images/tablelamp.png'
import images9 from '../images/vector.png'
import images24 from '../images/instagram.png'
import images25 from '../images/facebook.png'
import images26 from '../images/youtube.png'

function Check() {
  return (
    <div className='Check'>
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
<div className='productcheckout'>
 <div className='checkoutdiv'>
  <div className='checkoutheading'>Check Out</div>
  <div className='productstatus'>
    <div className='productstatus1'>
    <div className="shipcart">✔</div>
    <div className='shipcarting'>Shipping Cart</div>
    </div>
    <div className='productstatus2'>
    <div className="shipcart1">2</div>
    <div className='shipcarting1'>Checkout details</div>
    </div>
    <div className='productstatus3'>
    <div className="shipcart2">3</div>
    <div className='shipcarting2'>Order complete</div>
    </div>

  </div>
 </div>
 <div className='continfo'>
  <div className='continfo1'>
    <div className='form1'>
    <div className='contactinfo'>Contact Information</div>
     <div className='form-name'>
       <div className='firstname'>
          <p>FIRST NAME</p>
          <div className='nameplaceholder'>
            <input type="text" 
            placeholder="First name" 
            required/>
          </div>
        </div>
        <div className='lastname'>
        <p>LAST NAME</p>
          <div className='nameplaceholder'>
            <input type="text" 
            placeholder="Last name" 
            required/>
          </div>
        </div>
      </div>
      <div className='phnum'>
        <p>PHONE NUMBER</p>
        <div className='detailsplaceholder'>
            <input type="text" 
            placeholder="Phone number" 
            required/>
          </div>
      </div>
      <div className='mailaddress'>
      <p>EMAIL ADDRESS</p>
        <div className='detailsplaceholder'>
            <input type="text" 
            placeholder="Email address" 
            required/>
          </div>
      </div>
    </div>
    <div className='form2'>
      <div className='ship-add'>Shipping Address</div>
      <div className='streetadd'>
        <p>STREET ADDRESS *</p>
        <div className='add-placeholder'>
            <input type="text" 
            placeholder="Street address " 
            required/>
          </div>
      </div>
      <div className='streetadd'>
        <p>COUNTRY *</p>
        <div className='add-placeholder'>
           <label className='streetadd'>Country</label>
           <select className='countryselect'>
            <option></option>
            <option>India</option>
            <option>Usa</option>
            <option>Uk</option>
           </select>
          </div>
      </div>
      <div className='streetadd'>
        <p>TOWN / CITY *</p>
        <div className='add-placeholder'>
            <input type="text" 
            placeholder="Town / City" 
            required/>
          </div>
      </div>
      <div className='form-name'>
       <div className='firstname'>
          <p>STATE</p>
          <div className='nameplaceholder'>
            <input type="text" 
            placeholder="State" 
            required/>
          </div>
        </div>
        <div className='lastname'>
        <p>ZIP CODE</p>
          <div className='nameplaceholder'>
            <input type="text" 
            placeholder="Zip Code" 
            required/>
          </div>
        </div>
            </div>
        <div className='billing-address'>
        <input type="checkbox"/>
            <span className="option">
              Use s different billing address (optional)       
            </span>
        </div>
    </div>
    <div className='form3'>
      <div className='payment-container'>Payment method</div>
      <div className='paycardpay'>
      <div className='p-div'>
        <div className='paycartdiv'>
          <div className='paycartcheckbox'>
            <div className='innerpaycart'></div>
          </div>
          <div className='pbcc'>Pay by Card Credit</div>
        </div>
        <div className='paycartimg'>
          <img src={images5} alt="" />
        </div>
      </div>
      <div className='p-div1'>
      <div className='paycartdiv1'>
          <div className='paycartcheckbox1'></div>
          <div className='pbcc1'>Paypal</div>
        </div>
      </div>
      </div>
      <div className='cardnum'>
      <p>CARD NUMBER</p>
        <div className='detailsplaceholder'>
            <input type="text" 
            placeholder="1234 1234 1234" 
            required/>
          </div>
      </div>
      <div className='expirycvc'>
       <div className='expiry'>
          <p>EXPIRATION DATE</p>
          <div className='nameplaceholder'>
            <input type="text" 
            placeholder="MM/YY" 
            required/>
          </div>
        </div>
        <div className='lastname'>
        <p>CVC</p>
          <div className='nameplaceholder'>
            <input type="text" 
            placeholder="CVC code" 
            required/>
          </div>
        </div>
            </div>
      </div>
  </div>
  <div className='continfo2'>
    <div className='ordersummary'>Order summary</div>
    <div className='productinput'>
      <div className='productinput1'>
        <div className='traytables1'>
          <img src={images6} alt="" />
        </div>
        <div className='traytables2'>
        <p className='productname'>Tray Table</p>
        <p className='productcolor'>Color: Black</p>
        <div className='quantitycheck'>
            <div className='quantitywant'>-</div>
            <div className='quantitywant'>2</div>
            <div className='quantitywant'>+</div>
        </div>
        </div>
        <div className='traytables3'>$38.00</div>
      </div>
      <div className='productinput1'>
      <div className='traytables1'>
          <img src={images7} alt="" />
        </div>
        <div className='traytables2'>
        <p className='productname'>Tray Table</p>
        <p className='productcolor'>Color: Red</p>
        <div className='quantitycheck'>
            <div className='quantitywant'>-</div>
            <div className='quantitywant'>2</div>
            <div className='quantitywant'>+</div>
        </div>
        </div>
        <div className='traytables3'>$38.00</div>
      </div>
      <div className='productinput1'>
      <div className='traytables1'>
          <img src={images8} alt="" />
        </div>
        <div className='traytables2'>
        <p className='productname'>Table lamp</p>
        <p className='productcolor'>Color: gold</p>
        <div className='quantitycheck'>
            <div className='quantitywant'>-</div>
            <div className='quantitywant'>2</div>
            <div className='quantitywant'>+</div>
        </div>
        </div>
        <div className='traytables3'>$39.00</div>
      </div>
      <div className='inputapply'>
        <div className='inputapply1'>
        <input type="text" 
        placeholder="input" 
        required/>
        </div>
        <button className='inputapply2'>Apply</button>
      </div>
    </div>
    <div className='amount-container'>
        <div className='amount-container1'>
            <div className='jendiv'>
                <img src={images9} alt="" />
            <div className='jenkatemw'>JenkateMW</div>
            </div>
            <div className='jenamount'>-$25.00 [Remove]</div>
        </div>
        <div className='amount-container1'>
            <p className='shippingfree'>Shipping</p>
            <p className='freeshipping'>Free</p>
        </div>
        <div className='amount-container1'>
        <p className='shippingfree'>Subtotal</p>
        <p className='freeshipping'>$99.00</p>
        </div>
        <div className='amount-container1'>
            <p className='amounttotaldiv'>Total</p> 
            <p className='amounttotaldiv'>$234.00</p>
        </div>

    </div>
  </div>


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

export default Check
