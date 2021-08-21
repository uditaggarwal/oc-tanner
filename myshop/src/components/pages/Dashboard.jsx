import Profile from '../Profile';
import Additem from '../Additem';
import Myitem from '../MyItem';
import Mystatic from '../Mystatic';
import { NavLink,Redirect } from 'react-router-dom'
import logo1 from '../../images/images.png';
import { Route,Link} from 'react-router-dom';
import React,{ useState} from 'react'
import '../css/dashboard.css';
import {Dropdown} from 'react-bootstrap';
import {Navbar,Nav} from 'react-bootstrap'


function getTokenShop(){
    const tokenString = sessionStorage.getItem('token');
    const tokenData=JSON.parse(tokenString).shopNameToken
    return(tokenData)
  
}
function Auth(){
    const tokenString = sessionStorage.getItem('token');
   
    if(tokenString != null){
        const tokenData=JSON.parse(tokenString).emailToken
        return(tokenData)
    }
    else{
        return('')
    }
  
  
}
export default function Dashboard(props) {
    function logOut(){
        sessionStorage.removeItem('token')
    }
  
   const [nameondashboard, setNameondashboard] = useState('Dashboard') 
    return (
       <>
       { Auth()!== '' ? 
<div class="container-fluid m-0 p-0">
    <div class="row gx-0 m-0 p-0 dashboard" >
            <div class="col-md-3 col-lg-2 gx-0 m-0 p-0 d-lg-block d-none" >
               <div class="left-side" >
                   <div class="d-flex justify-content-center p-4" style={{borderBottom: '2px solid grey'}}>
                       <img src={logo1} alt="" width="30%" height="30%" className="rounded" />
                            <h5  class="p-2 text-white">Myshop.com</h5>
                   </div>
                    <ul>
                    <li><NavLink to="/Dashboard/Profile/" id="profile" onClick={()=>{setNameondashboard("MyProfile")}}>Profile</NavLink> </li>
                    <li><NavLink to="/Dashboard/MyStatic/" onClick={()=>{setNameondashboard("Statics")}}>Statics</NavLink></li>
                    <li><NavLink to="/Dashboard/Myitem/" onClick={()=>{setNameondashboard("MyProducts")}}>MyProducts</NavLink></li>
                    <li><NavLink to="/Dashboard/Additem" id="additems" onClick={()=>{setNameondashboard("Additem")}}>Add Items</NavLink></li>
                    </ul>
               </div>
            </div>

            <div class="col-md-12 col-lg-10 gx-0  p-0" >
                <div class="right-body " >



                <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
<Navbar.Brand >
{nameondashboard}
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="d-lg-none">
        <p style={{'backgroundColor':'grey','color':'black',fontSize:'20px',padding:'3px'}}><b>{getTokenShop()}</b></p>
    <Nav.Link ><Link  to="/Dashboard/Profile/" id="profile" className="text-decoration-none " style={{color:'inherit'}} onClick={()=>{setNameondashboard("MyProfile")}}>Profile</Link></ Nav.Link>
    <Nav.Link ><Link  to="/Dashboard/MyStatic/"  className="text-decoration-none " style={{color:'inherit'}} onClick={()=>{setNameondashboard("Statics")}}>Statics</Link></ Nav.Link>
    <Nav.Link ><Link  to="/Dashboard/Myitem/"  className="text-decoration-none " style={{color:'inherit'}} onClick={()=>{setNameondashboard("MyProducts")}}>MyProducts</Link></ Nav.Link>
    <Nav.Link ><Link  to="/Dashboard/Additem"  className="text-decoration-none " style={{color:'inherit'}} id="additems" onClick={()=>{setNameondashboard("Additem")}}>Additems</Link></ Nav.Link>
    <Nav.Link ><Link  to="/"  className="text-decoration-none btn btn-success text-white" style={{color:'inherit'}} id="additems" onClick={logOut}>Logout</Link></ Nav.Link>
    
     </Nav>
    <Nav className="ml-auto">
    
    <Dropdown className="d-lg-block d-none">
                <Dropdown.Toggle variant="mute " style={{'backgroundColor':'white','color':'green'}}>
                    {getTokenShop()}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item> 
                         <NavLink to={{pathname:"/Dashboard/Profile"}} className="text-decoration-none text-dark" >Profile</NavLink> 
                         </Dropdown.Item>
                   
                    <Dropdown.Item> 
                         <NavLink to={{pathname:"/"}} className="text-decoration-none text-dark" onClick={logOut}>Logout</NavLink> 
                         </Dropdown.Item>
                    
                </Dropdown.Menu>
                </Dropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
                   <div className="right-main-body">
                
    <Route exact path="/Dashboard/Profile" component={Profile} />
    <Route exact path="/Dashboard/Additem" component={Additem}/>
    <Route exact path="/Dashboard/Myitem" component={Myitem} />
    {/* <Route exact path="/Dashboard/Myitem"  component={() => (<Myitem data={email}  />)}/> */}
    <Route exact path="/Dashboard/"  component={Myitem} />                
    <Route exact path="/Dashboard/Mystatic" component={Mystatic}  />
                    
                     

                     </div>
                    
                </div>
            </div>


    </div>
</div>
:
<Redirect to={{pathname:"/Register"}} />
    }
       </>
    )
}


