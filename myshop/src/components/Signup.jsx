import { NavLink,Redirect  } from "react-router-dom"
import axios from 'axios'
import React,{useState} from 'react'
import {Spinner} from 'react-bootstrap';
  
const Signup = () =>{
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [repassword, setrepassword] = useState('');
    const [signup, setsignup] = useState(false);
    const [pageload, setPageload] = useState(true)
    const onsubmit=(e)=>{
        e.preventDefault();
        
const mydata={
    username:username,
    email:email,
    password:password
}

        if(email!=="" && username!=="" && password!==""){
        if(password===repassword){
            setPageload(false)
        axios.post(
            'https://myshop-12.herokuapp.com/save_auth',
            mydata
        )
        .then(res=>{
            if(res.data===false){
                alert("Account Exist, Try another Account");
                setPageload(true) 
            }
            else if(res.data===true){
                alert("Account successfully created ? ")
                setsignup(true) 
                setPageload(true)  
            }
           
        })
        .catch(err=>{
            alert("OOPs! Something Wrong")
            setPageload(true) 
        })
    }

    else{
        alert("Password Mismatch")

    }
}
else{
    alert("Field cannot be empty")
}

    }
    if(pageload){
    return(
      <>
      
      {signup ? <Redirect to={{pathname:"/Register/CreateShop",state:{"email":email}}} /> : 
                  <div  id="signupformbox" >
                        <form  id="signupform" >
                            <div className="row m-2">
                                <h3 className="text-center text-white p-2" style={{backgroundColor:'rgb(38, 40, 87)',borderRadius:'15px'}}>Signup for Free</h3>
                            </div>
                            <div className="row">
                                <div className="col-md m-2 ">
                                    <input type="text" placeholder="Username" name="email" onChange={(e)=>{setusername(e.target.value)}} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md m-2 ">
                                    <input type="text" placeholder="Email Address" name="email" onChange={(e)=>{setemail(e.target.value)}} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md m-2">
                                    <input type="password" placeholder="PassWord" name="password" onChange={(e)=>{setpassword(e.target.value)}} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md m-2">
                                    <input type="password" placeholder="RePassword" name="repassword" onChange={(e)=>{setrepassword(e.target.value)}}  />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md m-2">
                                <p>I agree to <span><NavLink to="#">privacy Policy</NavLink></span> and <span><NavLink to="#">Terms of Services</NavLink></span></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md m-2">
                                <button className="btn-primary p-2" style={{width: '100%',borderRadius:'10px'}} onClick={onsubmit}>Sign up with email</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <p className="text-center"><NavLink to="/Register/Signin" id="loginformlink">Already have an account?</NavLink></p>
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

export default Signup; 