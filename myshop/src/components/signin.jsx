import { NavLink, Redirect } from "react-router-dom"
import React,{useState } from 'react'
import axios from 'axios'
import {Spinner} from 'react-bootstrap';
function setToken(userToken){
sessionStorage.setItem('token',userToken)
}


const Signin = (props) => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [login, setlogin] = useState(false);
    const [shopName, setshopName] = useState('')
    const [pageload, setPageload] = useState(true)

    const onsubmit=async (e)=>{
        e.preventDefault();
        setPageload(false)
        const mydata={
            email:email,
            password:password
        } 
       await axios.post(
            'https://myshop-12.herokuapp.com/get_auth',
            mydata
        )
        .then(res=>{
            if(res.data.Auth){
                const token={
                    emailToken:email,
                    shopNameToken:res.data.ShopName
                }
               
                setToken(JSON.stringify(token))
                setlogin(true)
                setPageload(true) 
                setshopName(res.data.ShopName)      
        }

            else{
               
                alert("Wrong Email Id Or Password");
                setPageload(true)      
            }
        })
        .catch(err=>{
           
            alert("OOPs! Something Wrong " + err)
            setPageload(true)
        })
   

    }

    if(pageload){
  
    return(    
<>
{login  ?
 <Redirect to={{pathname:"/Dashboard",state:{"email":email,"shopName":shopName}}} /> : 
<div  id="loginformbox">
                        <form  id="loginform" >
                            <div className="row m-2 d-flex justify-content-center">
                                <h3 className="text-center text-white p-2" style={{backgroundColor:'rgb(38, 61, 87)',borderRadius:'15px'}}>Login to your account</h3>
                            </div>
                            <div className="row m-4 d-flex justify-content-center">
                                <p className="text-center">Don't have an account?<NavLink to={
                                    
                                      { pathname:'/Register/'}
                                      
                                   } id="signupformlink">Sign Up Free!</NavLink></p>
                            </div>
                            <div className="row">
                                <div className="col-md m-2 ">
                                <input type="text" placeholder="Email Address" name="email" onChange={(e)=>{setemail(e.target.value)}} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md m-2">
                                <input type="password" placeholder="PassWord" name="password" onChange={(e)=>{setpassword(e.target.value)}}/>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-md m-2">
                                    <div className="form-group">
                                        <input type="checkbox" name="" id="Remember" style={{width: "initial",marginRight:"5px"}} />
                                        <label for="Remember">Remember me</label>
                                    </div>
                                
                                </div>
                                <div className="col-md m-2">
                                    <span><NavLink to="/Register/Forget" id="forgetlink">Forget password?</NavLink></span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md m-2">
                                <button className="btn-primary p-2" style={{width: "100%",borderRadius:"10px"}} onClick={onsubmit}>Login with email</button>
                                </div>
                            </div>
                        </form>
                    </div>
}

</>
    );
}
      
else{
    return (
        <div className="d-flex justify-content-center align-items-center h-100" >
          <Spinner animation="border" variant="danger" />
          <p>Verifying...</p>
        </div>
         )
}
}

export default Signin;