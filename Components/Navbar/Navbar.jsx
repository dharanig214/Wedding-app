import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../assets/lok.png';
import wed from '../../assets/wed.png';


const Navbar = () => {
  return (
   <>
    <div className='navbar'>
      <div className='nav-logo'>
      <img src={logo} alt="Logo" className="logo"  />
      
          <span className="brand-name">Prasana Wedding Atelier</span> 
          <span className="tagline">Wedding Expert At your service</span>
        
       </div>
     
        
        <ul>
          <li className='nav-menu'><a href='/home'>Home</a>
          </li>
          
         
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/carrer'>Career</Link></li>
         

          <li className='nav-menu'><Link to='/booking'>Booking</Link></li>
           <li className='nav-menu'><Link to='/service'>Service</Link></li>
           <li className='nav-menu'><Link to='/gallery'>Gallery</Link></li>
           <li><Link to='/contact'>Contact Us</Link></li>
         </ul>

       
       
         <div>
         <ul className='login-out'>
           <li><Link to='/login'>Login</Link></li>
            <li><Link to='/logout'>Logout</Link></li>
            <img src={wed} alt="wed" className="wed" />
         </ul>
       </div>
      
        
       
    </div>

    

    <section>
    <div className="container">
      <div className='content'>
        <h2>- Time to celebrate -</h2>
      </div>
    </div>
   </section> 
</>
  )
}

export default Navbar

