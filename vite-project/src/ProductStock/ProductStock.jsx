import React from 'react'
import './ProductStock.css'
import images2 from '../images/search.png'
import images1 from '../images/admin.png'
import images3 from '../images/More.png'
import images4 from '../images/spn.png'
import images5 from '../images/All.png'
function ProductStock() {
  return (
    <div className='ProductStock'>
       <div className='sidebarcontainer'>
                    <div className='ele'>3legant</div>
                    <div className='dash1'>Dashboard</div>
                    <div className='pro1'>Products</div>
                    <div className='fav'>Favorites</div>
                    <div className='inb'>Inbox</div>
                    <div className='ord'>Order Lists</div>
                    <div className='prost'>Product stock</div>
                    <div className='sdline1'></div>
            
                    <div className='sdline2'></div>
                    <div className='set'>Settings</div>
                    <div className='log'>Logout</div>
                  </div>
                   <div className='Dashboardcontent'>
                          <div className='topboard'>
                              <div className='searchboard'>  
                                  <img src={images2} alt="" />
                                  <input type="text" 
                                       placeholder="Search" 
                                       required/>
                              </div>
                              <div className='admin'>
                                  <img src={images1} alt="" />
                                  <div className='adminname'>
                                      <p className='moni'>Moni Roy</p>
                                      <p className='theadmin'>Admin</p>
                                  </div>
                                  <div className='adminlastimg'>
                                      <img src={images3} alt="" />
                                  </div>
                                  
                              </div>
                          </div>
                          <div className='sh'>
                          <div className='headdash2'>Product Stock</div>
                          <div className='spn'>
                            <img src={images4} alt="" />
                          </div>
                          </div>
                          <div className='all'>
                            <img src={images5} alt="" />
                          </div>
                          </div>
    </div>
  )
}

export default ProductStock
