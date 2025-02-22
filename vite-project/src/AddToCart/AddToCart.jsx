import React from 'react'
import './AddToCart.css'
import images6 from '../images/blacktray.png'
import images7 from '../images/redtray.png'
import images8 from '../images/tablelamp.png'
function AddToCart() {
  return (
    <div className='AddToCart'>
      <div className='summary-container1'>
      <div className="cart-header">
          <h2>Cart</h2>
          <button className="close-button">✕</button>
        </div>
        
        <div className='productscarting'>
                  <div className='traytable'>
                    <img src={images6} alt="" />
                    <div className='colordetails'>
                      <p className='productname'>Tray Table</p>
                      <p className='productcolor'>Color: Black</p>
                      
                      <div className='quantitycheck'>
                        <div className='quantitywant'>-</div>
                        <div className='quantitywant'>2</div>
                        <div className='quantitywant'>+</div>
                      </div>
                    </div>
                  </div>
                    <div className='productqps'>
                      <div className='pmenu'>
                        <p>$19.19</p>
                        <p>✕</p>
                      </div>
                    </div>
                </div>


                <div className='productscarting'>
                  <div className='traytable'>
                    <img src={images7} alt="" />
                    <div className='colordetails'>
                      <p className='productname'>Tray Table</p>
                      <p className='productcolor'>Color: Black</p>
            
                      <div className='quantitycheck'>
                        <div className='quantitywant'>-</div>
                        <div className='quantitywant'>2</div>
                        <div className='quantitywant'>+</div>
                      </div>
                    </div>
                  </div>
                    <div className='productqps'>
                      <div className='pmenu'>
                        <p>$19.19</p>
                        <p>✕</p>
                      </div>
                    </div>
                </div>
                <div className='productscarting'>
                  <div className='traytable'>
                    <img src={images8} alt="" />
                    <div className='colordetails'>
                      <p className='productname'>Table lamp</p>
                      <p className='productcolor'>Color: Gold</p>
                      <div className='quantitycheck'>
                        <div className='quantitywant'>-</div>
                        <div className='quantitywant'>2</div>
                        <div className='quantitywant'>+</div>
                      </div>
                      
                    </div>
                  </div>
                    <div className='productqps'>
                      <div className='pmenu'>
                        <p>$39.00</p>
                        <p>✕</p>
                      </div>
                    </div>
                </div>
      </div>
      <div className='summary-container2'>
        <div className='add-checkout1'>
        <div className='subtotal-total'>
        <p className='subtotal'>Subtotal</p>
        <p className='total-doller'>$99.00</p>
        </div>
        <div className='subtotal-total1'>
          <p className='Totalprice'>Total</p>
          <p className='totaldoller'>$234.00</p>
        </div>
        </div>
        <div className='add-checkout1'>
          <div className='add-checkoutcont'>Checkout</div>
          <div className='add-checkoutcont1'>View Cart</div>
        </div>

      </div>
    </div>
  )
}

export default AddToCart

