
import axios from 'axios'
import React,{useEffect, useState} from 'react'
import defaultimage from '../images/purchase.jpg';
import { storage } from "../firebase/firebase";
import {Spinner} from 'react-bootstrap';
function getToken(){
    const tokenString = sessionStorage.getItem('token');
    const tokenData=JSON.parse(tokenString)
    return(tokenData)
  
}

const Additem = () => {

const [name, setName] = useState('')
const [cost, setCost] = useState('')
const [category, setCategory] = useState('')
const [pbrand, setPbrand] = useState('')
const [shopname,setShopname] = useState('')
const [desc, setDesc] = useState('')
const [pic, setPic] = useState('')
const [discount, setDiscount] = useState('')
const [email, setemail] = useState('')
const [pageload, setPageload] = useState(true)
const [itemupload, setItemupload] = useState(true)
useEffect(()=>{   
    setemail(getToken().emailToken)
    setShopname(getToken().shopNameToken) 
     setPageload(false)
    
}, [])

const uploadData=async (e)=>{
    e.preventDefault();
   
    const formdata=new FormData();
    formdata.append('picloc',pic);
    formdata.append('name',name);
    formdata.append('cost',cost);
    formdata.append('category',category);
    formdata.append('shopname',shopname);
    formdata.append('desc',desc);
    formdata.append('pbrand',pbrand);
    formdata.append('discount',discount);
    formdata.append('email',email)
    if(name!=='' && cost!=='' && desc!=='' && category!=='' && pbrand!=='' && discount!==''&& pic!==''){
        setItemupload(false)
        setPageload(false)

                 var picName= Date.now() + formdata.get('picloc').name;
                
                 await storage.ref(`/items/${picName}`).put(formdata.get('picloc'));
                 await storage.ref("items").child(picName).getDownloadURL().then(async (url) => {
                    formdata.append('pic',url);
                    await axios.post('https://myshop-12.herokuapp.com/save_items',formdata).then((res)=>{
                    alert("Uploaded Successfully")
                    setItemupload(true)
                   
                          
                }).catch((er)=>{
                    alert("Please Try Again")
                    setItemupload(true)
                   
                })
                })
            }
            else{
                alert("All field are required ? ")
            }
   
    
   
   
}
if(!pageload && itemupload){

    return(
       <>
     <div className="additembox" >
          <form onSubmit={onsubmit} encType="multitype">
                            <div className="row gx-0 my-4 mx-2">
                                <div className="col-md-4 col-sm-6 mx-2 col-lg-3 col-6" >
                                    <img src={pic ==='' ? defaultimage : URL.createObjectURL(pic)} alt="nn" className='img-fluid border-primary border border-primary w-100' style={{'borderRadius':'10px'}} />
                                   
                                </div>
                                <div className="col-md-6 col-sm-8 col-8 col-lg-8 mx-2 my-2"  >
                                  
                                   <input type="file" className="btn btn-primary border-0 w-100" onChange={(e)=>{setPic(e.target.files[0])}}/>
                                </div>
                                
                            </div>
                            <hr />
                            <div className="row gx-0 my-4 mx-2">
                                <div className="col-md-3 col-sm-4 col-lg-3 col-12">
                                    <label for=""><b>Product Name</b></label>
                                </div>
                                
                                <div className="col-md-8  col-lg-8 col-sm-8 col-12" >
                                    <input type="text" className='form-control' onChange={(e)=>{setName(e.target.value)}} placeholder="Product Name" value={name} />
                                </div>    
                            </div>
                            <div className="row gx-0 my-4 mx-2">
                                <div className="col-md-3 col-sm-4 col-lg-3 col-12">
                                    <label for=""><b>Cost</b></label>
                                </div>
                                <div className="col-md-8  col-lg-8 col-sm-8 col-12">
                                    <input type="text" className='form-control' placeholder="Cost" value={cost} onChange={(e)=>{setCost(e.target.value)}} />
                                </div>
                            </div>
                            <div className="row gx-0 my-4 mx-2 ">
                                <div className="col-md-3 col-sm-4 col-lg-3 col-12">
                                    <label for=""><b>Category</b></label>
                                </div>
                                <div className="col-md-8  col-lg-8 col-sm-8 col-12">
                                    <select name="" onChange={(e)=>{setCategory(e.target.value)
                                    }} id="" className='form-control '>
                                        <optgroup>
                                            <option value="Electronics">Electronic</option>
                                           
                                            <option value="Mobiles">Mobiles</option>
                                           
                                            <option value="Menwear">Men wear</option>
                                            <option value="Womenwear">Women wear</option>
                                            


                                        </optgroup>
                                    </select>

                                </div>
                                
                            </div>
                            <div className="row gx-0 my-4 mx-2">
                                <div className="col-md-3 col-sm-4 col-lg-3 col-12">
                                    <label for=""><b>Brand</b></label>
                                </div>
                                <div className="col-md-8  col-lg-8 col-sm-8 col-12">
                                    <input type="text" className='form-control'  value={pbrand} onChange={(e)=>{setPbrand(e.target.value)}} />
                                </div>
                            </div>
                            <div className="row gx-0 my-4 mx-2">
                                <div className="col-md-3 col-sm-4 col-lg-3 col-12">
                                    <label for=""><b>Discount</b></label>
                                </div>
                                <div className="col-md-8  col-lg-8 col-sm-8 col-12">
                                    <input type="text" className='form-control'  value={discount} onChange={(e)=>{setDiscount(e.target.value)}} />
                                </div>
                            </div>
                            <div className="row gx-0 my-4 mx-2 ">
                                <div className="col-md-3 col-sm-4 col-lg-3 col-12">
                                    <label for=""><b>Description</b></label>
                                </div>
                                <div className="col-md-8  col-lg-8 col-sm-8 col-12">
                                    <textarea name="" id="" cols="50" rows="5" className='form-control' value={desc} onChange={(e)=>{setDesc(e.target.value)}}></textarea>
                                </div>
                            </div>
                
                            <div className="row gx-0 my-4 mx-2 ">
                                <div className="col-md col-sm-6 col-6 d-flex justify-content-end align-items-center p-2">
                                    <input type="reset" value="Reset" className="btn btn-danger"/>
                                </div>
                                <div className="col-md col-sm-6 col-6 d-flex justify-content-center align-items-center p-2">
                                    <input type="submit" className="btn btn-warning" onClick={uploadData}/>
                                </div>
                            </div>
                            </form>
                        </div> 

</>
    )
                                }
                                else{
                                    return (
                                        <div className="additembox" >
                                        <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}} >
                                          <Spinner animation="border" variant="danger" />
                                          <p>Loading...</p>
                                        </div>
                                        </div>
                                         )
                                }
}

export default Additem;