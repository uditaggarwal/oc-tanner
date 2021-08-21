import React from 'react'
import {NavLink } from 'react-router-dom';
import PageNotFoundimg from '../../images/404.jpg'

export default function PageNotFound() {
    return (
        <>
       <div className="justify-content-center align-items-center d-flex" style={{minHeight:'80vh'}}>
   
       <div className='justify-content-center d-flex-column'>
       <div className="row gx-0 m-0 p-0 mx-4">
                 <div className="col-10 mx-auto">
               <h4 className="text-center">Myshop.com</h4>
           </div>
           </div>
             <div className="row gx-0 m-0 p-0 ">
                 <div className="col-10 mx-auto">
                 <img src={PageNotFoundimg} alt="" style={{borderRadius:'10px',width:'100%'}}/>
                 </div>

             </div>
            
             <div className="row gx-0 m-0 my-4">
                   
            <div className="col-10 mx-auto">
                <NavLink to='/' className="text-decoration-none"><button className="btn btn-warning">Go To Home Page</button></NavLink>
            </div>
             </div>
        </div>
       </div>
       
        </>
    )
}
