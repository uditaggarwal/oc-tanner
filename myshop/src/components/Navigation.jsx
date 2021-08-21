import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../images/images.png';
import { Link } from 'react-router-dom';
import './css/Navigation.css';
import {Navbar,Nav} from 'react-bootstrap';

export default function Navigation() {
    return (
       <div>
<div className="container-fluid m-0 p-0" >

<Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
<Navbar.Brand >
  <Link to="/Contact"> 
  <div className="text-white mybrand">
<img src={logo1} className="px-2" alt="img" style={{ height:"40px",borderRadius:'8px'}}/>
<p>MyShop.<span className="brand">com</span></p> 
</div>
  </Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
    </Nav>
    <Nav>
    <Nav.Link ><Link  to='/' className="text-decoration-none " style={{color:'inherit'}}>Home</Link></ Nav.Link>
    <Nav.Link ><Link  to='/Register' className="text-decoration-none " style={{color:'inherit'}}>Shop Account</Link></Nav.Link>
    <Nav.Link  ><Link  to='/buyerdash' className="text-decoration-none " style={{color:'inherit'}}>User Account</Link></ Nav.Link>
    <Nav.Link  ><Link  to='/Contact' className="text-decoration-none " style={{color:'inherit'}}>Contact us</Link></ Nav.Link>
    
     
    </Nav>
  </Navbar.Collapse>
</Navbar>
   
</div>

            
       </div>
    )
}
