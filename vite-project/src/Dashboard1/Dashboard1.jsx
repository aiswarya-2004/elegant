import React from 'react'
import './Dashboard1.css'
import images2 from '../images/search.png'
import images1 from '../images/admin.png'
import images3 from '../images/More.png'
import images4 from '../images/Totalusers.png'
import images5 from '../images/Totalorder.png'
import images6 from '../images/Totalsales.png'
import images7 from '../images/Orderpending.png'
import images8 from '../images/sdetail1.png'
import images9 from '../images/sdetail2.png'
function Dashboard1() {
  return (
    <div className='Dashboard1'>
      <div className='sidebarcontainer'>
        <div className='ele'>3legant</div>
        <div className='dash'>Dashboard</div>
        <div className='pro'>Products</div>
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
         <div className='headdash'>Dashboard</div>
         <div className='benefit'>
            <div className='totalbenefit'>
              <img src={images4} alt="" />
            </div>
            <div className='totalbenefit'>
              <img src={images5} alt="" />
            </div>
            <div className='totalbenefit'>
            <img src={images6} alt="" />
            </div>
            <div className='totalbenefit'>
            <img src={images7} alt="" />
            </div>
         </div>
         <div className='graph'>

         <img src={images8} alt="" />
         </div>
          <div className='deals'>

         <img src={images9} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Dashboard1
