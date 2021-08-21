import React,{useState} from 'react'
import { Redirect } from 'react-router'
import {Spinner} from 'react-bootstrap';
import axios from 'axios'

function setToken(userToken){
    sessionStorage.setItem('token',userToken)

    }
    function getTokenEmail(){
        const tokenString = sessionStorage.getItem('token');
        const tokenemail=JSON.parse(tokenString).emailToken
        return(tokenemail)
      
    }


const CreateShop=(props) =>{

    const [goToDash, setgoToDash] = useState(false)
    const [shopName, setShopName] = useState('')
    const [category, setcategory] = useState('')
    const [pageload, setPageload] = useState(true)
   const GoToDash=(e)=>{
    e.preventDefault();
   const mydata={
        "email":props.location.state.email,
        "shopName":shopName,
        "category":category
    }

    if(shopName!=="" && category!==""){
        setPageload(false)
        axios.post(
            'https://myshop-12.herokuapp.com/saveProfile',
            mydata
        )
        .then(res=>{
            if(res.data === "Exist"){
                alert("Shop Exist, Try another Account");
                setPageload(true)
            }
            else if(res.data === "OK"){
                alert("Your Shop Created ? ")
                const token={
                    emailToken: props.location.state.email,
                    shopNameToken: shopName
                }
               
                setToken(JSON.stringify(token))
                setgoToDash(true)
            }
           
        })
        .catch(err=>{
            alert("OOPs! Something Wrong")
        })
   
    }
    else{
        alert("Field Cannot Be Empty")
    }
}
if(pageload){ 
    return (
        <>

        {goToDash ? <Redirect to={{pathname:"/Dashboard",state:{"email":getTokenEmail(),"shopName":shopName}}}  /> : ""}
        <div className="container-fluidx">
        <div className="registerbox ">
            
            <div className="row gx-0 m-0">
                <div className="col-md-12 col-sm-12 col-12" style={{backgroundColor:"rgb(48, 48, 99)"}}>
                   
<div class="box p-4" >
       <div class="row m-2 p-2">
           <div class="col-md">
               <h2><span style={{'color': 'skyblue'}}>Myshop</span>.com</h2>
           </div>
       </div>
       <div class="row m-2">
           <div class="col-md m-2 text-white">
                Your Shop Name : 
           </div>
           <div class="col-md">
            <div class="form-control">
               <input type="text" onChange={(e)=>{setShopName(e.target.value)}} />
            </div>
           </div>
       </div>
       <div class="row m-2">
        <div class="col-md m-2 text-white">
             Your Shop Category : 
        </div>
        <div class="col-md">
       
         <select name="" className='w-100 form-control' onChange={(e)=>{setcategory(e.target.value)
                                    }} >
                                        <optgroup>
                                            <option value="Electronics">Electronic</option>
                                            {/* <option value="Garments">Garments</option> */}
                                            <option value="Mobiles">Mobiles</option>
                                            {/* <option value="Toys">Toys</option> */}
                                            {/* <option value="Interior">Interior</option> */}
                                            <option value="Menwear">Men wear</option>
                                            <option value="Womenwear">Women wear</option>
                                            {/* <option value="others">Others</option>
                                            <option value="children">Children</option> */}


                                        </optgroup>
                                    </select>
                                   
 
        </div>
    </div>
    <div class="row m-2 ">
        <div class="col-md m-2 ">
            <div class="btn" style={{'float': 'right'}}>
            <button class="btn btn-warning px-4 " onClick={GoToDash}>Next</button>
            </div>
        </div>
    </div>

   </div>
   </div>
   </div>
   </div>
   </div>
        </>

    )
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

export default CreateShop;