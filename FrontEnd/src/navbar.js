import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';



function Navbar() {
  
    return (
      
      <div className='overall_nav'><div className='rrr'>
        <img src='logoo.png' className='my_logo' alt='logo'></img>
        <h4>Fast <br></br>And <br></br>Yummy</h4></div>
        <div className='buttonlink'>
          <div className='nav_link3'>
            <Link to="/"className='home'>Home</Link>
          </div>

          <div className='nav_link1'>
            <Link to='/menu' className='home'>Menu</Link> 
          </div>

          <button id='btns'><Link to="/login">LogIn</Link></button>
          <button id='btn-r'><Link to="/register">Register</Link></button>
          <Link to="/chart">
            <div className="cart" >
              <span>  
                <FontAwesomeIcon icon={faCartPlus } className="fa-solid fa-cart-plus" />
              </span>
            </div>
          </Link>
        </div>
      </div>
      
     
      
            
    );
    
}

export default Navbar;