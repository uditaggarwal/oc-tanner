import React from 'react'
import { NavLink } from 'react-router-dom'
import Navigation from '../Navigation'
import headphone from '../../images/mobile/head.jpg';
import giga from '../../images/mobile/giga.jpg';
import realmex2 from '../../images/mobile/realmex2.jpg';
import img1 from '../../images/manya.jpg';
import img2 from '../../images/suitr.jpg';
import img3 from '../../images/suit.png';
import img6 from '../../images/manyawar.jpg';
import teamimg from '../../images/team.jpg';
import addressimg from '../../images/addcon.png';
import '../css/Navigation.css';

export default function Home() {
    return (
        <div>
            < Navigation />
            <div className="row gx-0 banner m-0 mt-4"  >
                <div className="col-md d-flex justify-content-center align-items-center p-4" >
                    <div className="box m-4">
                        <div className="row p-2"><h1>Grow Your Buisness With US</h1></div>
                        <div className="row p-2"><h2>World Ready shop for You</h2></div>
                        <div className="row p-2"><h3>Share your Thoughts ? To Grow your Shop</h3></div>
                         <NavLink to="/Search/"  className="text-decoration-none"><button className="p-2 m-2 btn-start text-white ">Go To Products</button></NavLink>
                    </div>
                </div>
                <div className="col-md d-flex justify-content-center align-items-center p-4"> </div>
            </div>
            <section id="heading" className="pt-4">
                <h1 className="text-center mt-4 mb-4">For Distributor</h1>
                <h2 className="text-center mt-4 mb-4 text-primary">Not a Distributer? Get Your Business Idea With Myshop</h2>
            </section>

      
            <div className="row gx-0 m-0" >
                <div className="col-md-12 col-sm-12 col-lg-10 mx-auto" >
                    <div className="row" >
   
                <div className="col-md-6 col-sm-6 col-10 col-lg-4 mx-auto "> 
                <div className="card m-4" >
                <div className="gal-img-con position-relative ">
                <img src={giga} className="card-img-top img-fluid" alt="..." />
                <div className="overlay">
                    <h4>Giga</h4>
                </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">Giga</h5>
                    <NavLink to='/Search/' className="text-decoration-none">
                <button className="btn btn-secondary m-2">Shop now</button>
                </NavLink>
                </div>
            </div>
            </div>
                <div className="col-md-6 col-sm-6 col-10 col-lg-4 mx-auto  ">
                <div className="card m-4" >
                <div className="gal-img-con position-relative ">
                <img src={realmex2} className="card-img-top" class="img-fluid" alt="..." />
                <div className="overlay">
                    <h4>Realme x2</h4>
                </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">Realme x2</h5>
                    <NavLink to='/Search/' className="text-decoration-none">
                <button className="btn btn-secondary m-2">Shop now</button>
                </NavLink>
                </div>
            </div>
            </div>
                <div className="col-md-6 col-sm-6 col-10 col-lg-4 mx-auto  ">
                <div className="card m-4" style={{width: "18rem;"}} >
                <div className="gal-img-con position-relative ">
                <img src={headphone} className="card-img-top" alt="..." />
                <div className="overlay">
                    <h4>Headphones</h4>
                </div>
                </div>
                <div className="card-body" >
                    <h5 className="card-title text-center">Boat Headphone</h5>
                    <NavLink to='/Search/' className="text-decoration-none">
                <button className="btn btn-secondary m-2">Shop now</button>
                </NavLink>
                </div>
            </div> 
            </div>
            </div>
            </div>
                </div>


            
    <section id="description" className="description" >
        <h1 className="text-primary text-center my-4">Know About us ? </h1>
        <div className="row  gx-0 m-0" >
            <div className="col-md p-4" >
                <img src={teamimg} alt="" className="img-fluid"  style={{borderRadius:'30px 0 0px 0', boxShadow: '0 0 5px rgb(98, 238, 243);'}}/>
            </div>
            <div className="col-md py-2 px-4">
                <h1 className="text-warning">About Team</h1>
                <p style={{color:'grey'}}>
                    I am B.tech 3rd year student of GlA University. Currently I work on this project and it becomes Complete 
                    Now.
                    
                 </p>
                 <div>
                     <span  style={{color:'red'}}>Collab</span>
                 <p style={{color:'grey'}}>Madan Mohan(MERN DEV)</p>
                  <p style={{color:'grey'}}>Udit Aggarwal(MERN DEV)</p>
                 
                  </div>
            </div>
        </div>
        <hr/>
        <div class="row gx-0 m-0" >
            
            <div class="col-md p-4">
                <h1 className="text-warning">Address</h1>
                <p style={{color:'grey'}}>Know are Office Located In Mathura , Uttar Pradesh
                </p>
                <p style={{color:'grey'}}>
                   <span style={{color:'black'}}> Email: </span> Madan.mohan_cs18@gla.ac.in
                    
                </p>
                <p style={{color:'grey'}}><span style={{color:'black'}}> Address: </span> Sant Nagar , Pushpanjali Road</p>
            </div>
            <div class="col-md p-4">
                <img src={addressimg} alt="" className="img-fluid" style={{borderRadius:'0px 0 30px 0',boxShadow: '0 0 5px rgb(98, 238, 243);',width:'500px'}} />
            </div>
        </div>
    </section>


    <section >
    <h1 className="text-center text-primary my-4">Gallery</h1>
        <div className="gallery row  my-4 mx-0 gx-0 d-grid" style={{backgroundColor:'rgb(38, 61, 87)'}} >
         
            
            <div className="col-md-3 col-sm-4 col-6 py-2" >
            <div className="gal-img-con position-relative w-100" >
                <img src={img1}  alt="img" width="100%" style={{height:'400px'}}/>
                <div className="overlay">
                    <h4>Manyawar</h4>
                </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-4 col-6 py-2" >
            <div className="gal-img-con position-relative " >
                <img src={img2} alt="img" width="100%" style={{height:'400px'}} />
                <div className="overlay">
                    <h4>Designing suit</h4>
                </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-4 col-6 py-2" >
            <div className="gal-img-con position-relative " >
                <img src={img3} alt="img" width="100%" style={{height:'400px'}}  />
                <div className="overlay">
                    <h4>Black suit</h4>
                </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-4 col-6 py-2" >
            <div className="gal-img-con position-relative " >
                <img src={img6} alt="img" width="100%" style={{height:'400px'}} height="100%"  />
                <div className="overlay">
                    <h4>Manyawar</h4>
                </div>
                </div>
            </div>
        </div>
        
    </section>

    <footer className="m-0 py-4" >
        <h2 className="text-center text-white">Company</h2>
        <div className="row gx-0 my-4 p-4 px-0 mx-0" >
        <div className="col-md-7 col-sm-8 col-11 col-lg-5 m-0">
            <img src={teamimg} width="100%" alt="img" style={{borderRadius:'10px'}}/>
     </div>
            
            <div className="col-md-8 col-sm-12 col-lg-6 m-2 text-white" style={{opacity:'0.8',textAlign:'justify'}}>
                This Website is developed under MERN fullstack Project. It includes The Express As backend and MongoDb 
                is used for database . This is single page Website using the React Js.
                <p>Education</p>
                <p> B.tech (Madan Mohan)</p> 
   
 </div>
            
        </div>
        <hr/>
        <div className="row g-0 mx-0 d-flex justify-content-center">
            <div className="col-md mx-auto m-2">
                <NavLink to='/Register' className="text-decoration-none">
                <button className="btn btn-warning m-2">Shop Account</button>
                </NavLink>
                <NavLink to='/Search/' className="text-decoration-none">
                <button className="btn btn-secondary m-2">Go To Products</button>
                </NavLink>
                <NavLink to='/buyerdash' className="text-decoration-none">
                <button className="btn btn-danger m-2">User Account</button>
                </NavLink>
            </div>
            <div className="col-md mx-auto m-2">
                <h3 className="text-white">Connect with us on</h3>
                <span><i class="fa fa-linkedin-square" aria-hidden="true"></i></span>
                <span><i class="fa fa-github" aria-hidden="true"></i></span>
            </div>
            <div className="col-md mx-auto m-2">
            </div>
           
        </div>
        <hr/>
        <address className="m-4" style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}} >
            <h2 style={{color:'white'}}>Contact us @</h2>
            <span className="d-block text-white">
             <b style={{color:'grey'}}>Email: </b>madan.mohan_cs18@gla.ac.in
            </span>
            <span className="d-block text-white"> <b style={{color:'grey'}}>Ph No:</b>8881574438</span>
            <span className="d-block"><NavLink to='/Contact' className='text-white ' style={{textDecoration:'underline'}}>Contact us</NavLink></span>
        </address>
    </footer>
      
            </div>
    )
}
