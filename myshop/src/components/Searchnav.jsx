import React from 'react';
import logoimg from '../images/images.png'

import {NavLink} from 'react-router-dom';
function setSearchKeyWord(data){
    sessionStorage.setItem('searchKeyword',data)   
}
function setQuery(data){
    sessionStorage.setItem('searchQuery',data)    
}
const Searchnav=()=>{
    return(
        <>
            <nav>
            {/* "backgroundImage": "linear-gradient(red,white)" */}
        <div className="row mx-0 px-0 gx-0 " style={{backgroundColor:'rgb(38, 61, 87)'}}>
            <div className="col-md-11 mx-auto  p-2">
                <div className="row">
                    <div className="col-md-3  d-flex flex-row my-2">
                       
                        <NavLink style={{fontFamily:"Zen Dots, cursive",fontSize:'25px'}} className="text-white mx-2 text-decoration-none" to="/Contact">
                        <img src={logoimg} className="img-fluid rounded-circle px-2 d-sm-none d-md-inline-block d-none" alt="" style={{ height:"40px"}}/>
                        MyShop.<span style={{color:'blue'}}>com</span> </NavLink>
                    </div>
                    <div className="col-md-5 col-sm-11 col-lg-5 col-12">
                    <div class="input-group m-2">
                   
            <span className="input-group-text bg-grey m-0 p-0 border-none d-sm-none d-md-none d-lg-block d-none">
            <select name="" onChange={(e)=>{setSearchKeyWord(e.target.value)}
                                    } id="" className='form-control '>
                    <optgroup>
                        <option value="Electronics">Electronic</option>
                        <option value="Mobiles">Mobiles</option>
                        <option value="Menwear">Men wear</option>
                        <option value="Womenwear">Women wear</option>
                        <option value="all" selected>All</option>
                    </optgroup>
             </select>
          
            </span>
       <form onSubmit={
        (event)=>{
          event.preventDefault();
         
        }}>

       <input class="form-control " placeholder="Search here ..." onChange={(e)=>{setQuery(e.target.value)}}/>
       
       </form>
        <NavLink to={{pathname:"/Search/explore/",state:{"category":"Menwear"}}} className='text-white text-decoration-none'>
                    <button className="btn btn-primary text-white mx-2 px-4 "> 
                        Done
        </button></NavLink>
    
    </div>
                        
                        
                    </div>
                    <div className="col-md-4 col-sm-12  ">

              <NavLink to='/buyerdash' className="text-white text-decoration-none">
                <button className="btn  m-2 px-4 bg-warning text-white" ><i class="fa fa-sign-in" aria-hidden="true" style={{'fontSize':'20px','marginRight':'10px'}}></i>
       Login
       </button>
        </NavLink>
        <NavLink to='/buyerdash' className="text-white text-decoration-none">
                      <button className="btn btn-secondary m-2 px-4"><i class="fa fa-cart-arrow-down" aria-hidden="true" style={{'fontSize':'20px','marginRight':'10px'}}></i>Cart</button>
                      </NavLink>
                 
                       </div>
                   
                </div>
            </div>
        </div>
    </nav>

        </>
    )

}

export default Searchnav;