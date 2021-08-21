import React, { Component } from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import { NavLink,Route,Link} from 'react-router-dom'
import {Modal,Button, Container, Form,Row,Col,OverlayTrigger,Popover} from 'react-bootstrap'
import axios from 'axios'
import {Dropdown,Spinner} from 'react-bootstrap';
import cartimg from '../../images/cart.jpg'
import purimg from '../../images/purchase.jpg'
import addressimg from '../../images/address.jpg'
import logo1 from '../../images/images.png';

function setTokenforbuyer(userToken){
    sessionStorage.setItem('emailtokenforbuyer',userToken)
    }

function getTokenforCredentials(){
    try{
        const emailtoken = sessionStorage.getItem('emailtokenforbuyer');
        return(emailtoken)  
    }
    catch{
        return(null) 
    } 
}
export default class buyDash extends Component {

    logOut(){
       
        sessionStorage.removeItem('emailtokenforbuyer')
       
     }

    constructor(props){
        super(props)
        this.state={
           productDetails:{},
           auth:false,
           showsignup:false,
           showsignin:true,
           address:false,
           username:'',
           email:"",
           password:"",
           repassword:"",
           country:'',
           mystate:'',
           phoneno:'',
           myaddress:'',
           completebuy:false,
           review:false,
           reviewmessage:'',
           signinload:true,
           signupload:true
          
        }
        
    }  
    Signup=async ()=>{
        this.setState({signinload:true}) 
        const signupdata={
            "username":this.state.username,
            "email":this.state.email,
            "password":this.state.password
        };
       
        if(this.state.username!=="" && this.state.email !==""&& this.state.password!== ""){
            if(this.state.password === this.state.repassword){
                this.setState({signupload:false})
            await axios.post('https://myshop-12.herokuapp.com/save_auth',signupdata).then((res)=>{ 
                 if(res.data === false){
                     alert("Account Exist, Try another Account");
                     this.setState({signupload:true})
                 }
                 else if(res.data === true){
                     alert("Account successfully created ? ")
                     this.setState({showsignup:false})
                     this.setState({signupload:false})
                 }
                                 
                 }).catch((error)=>{
                     alert("OOPs! Something Wrong")  
                     this.setState({signupload:true}) 
                 }); 
            }
            else{
             alert("Password Mismatch")  
             
            }
        }
        else{
            alert("Field cannot be empty")
            
        }
       
      }
    
 Signin=async ()=>{
    this.setState({signupload:true}) 
    this.setState({signinload:false}) 
    const signindata={
        "username":this.state.username,
        "email":this.state.email,
        "password":this.state.password,
        'check':'buyer'
    };
  
    if(this.state.email !==""&& this.state.password!== ""){     
       await  axios.post('https://myshop-12.herokuapp.com/get_auth',signindata).then((res)=>{ 
            if(res.data.Auth){
               
                const emailTokenforbuyer=
                    this.state.email;    
                setTokenforbuyer(emailTokenforbuyer)
                this.setState({showsignin:false}) 
                this.setState({signinload:false})   
        }

            else{
                alert("Wrong Email Id Or Password");
                this.setState({signinload:true})      
            }           
             }).catch((error)=>{
                 alert("OOPs! Something Wrong")
                 this.setState({signinload:true})    
             }); 
        }
    
    else{
        alert("Field cannot be empty")
    }
   
  }

  completebuy=async ()=>{
   await axios.post('https://myshop-12.herokuapp.com/Cart_buy_item',{"email" : getTokenforCredentials()}).then((res)=>{ 
        if(res.data===true){
            alert("Thanks for Buying")
        }
        else{
            alert("No Item in your Bag ? ") 
        }  
    }).catch((gh)=>{   
});

}



    render() {

        return (
            <>
{

getTokenforCredentials()!=null ? 
            <div className="buydash" style={{'backgroundColor':'darkgrey'}}>
   <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
<Navbar.Brand >Dashboard </Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />

  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className="ml-auto">
       <div className="d-lg-none m-2">

       <Nav.Link >
           <Link to="/buyerdash/cart" className="text-decoration-none " style={{color:'inherit'}}>
           <span style={{'fontSize':'18px'}}>Carts</span>
           </Link>
        </Nav.Link>  
    <Nav.Link   >
    <Link to="/buyerdash/address" className="text-decoration-none " style={{color:'inherit'}}>
           <span style={{'fontSize':'18px'}}>Address</span>
           </Link>
        </Nav.Link>
    <Nav.Link >
    <Link to="/buyerdash/" className="text-decoration-none " style={{color:'inherit'}}>
           <span style={{'fontSize':'18px'}}>Mypurchased</span>
           </Link>
        </Nav.Link>
    
       </div>
       <Button variant="primary m-2 " onClick={ this.completebuy}>Buy At Once</Button>
    <Dropdown >
<Dropdown.Toggle variant="mute m-2 "  style={{'backgroundColor':'white','color':'orange'}}>
{getTokenforCredentials()}
</Dropdown.Toggle>
<Dropdown.Menu>
<Dropdown.Item> 
 <NavLink to={{pathname:"/"}} className="text-decoration-none text-dark m-0 p-0" onClick={()=>{
     this.logOut()
 }} >Logout</NavLink> 
 </Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>


           <div className="row g-0 m-0 p-0 bottom-body" >
               <div className="col-lg-2 d-lg-block d-none p-0">
               <div class="left-side " style={{'backgroundColor':'rgb(58, 56, 56)',height:'91vh'}}>
                   
                    <ul>
                    <li><NavLink  to="/buyerdash/cart"><span style={{'fontSize':'18px'}}>Carts</span></NavLink> </li>
                    <li><NavLink to="/buyerdash/address" id="profile" ><span style={{'fontSize':'18px'}}>Address</span></NavLink> </li>  
                    <li><NavLink to="/buyerdash/" ><span style={{'fontSize':'18px'}}>Purchased</span></NavLink></li>
                    </ul>
               </div>
               </div>
               <div className="col-lg-10 col-12 g-0 p-0 ">
<div className="right-body-buyer mx-0" style={{height:'91vh',overflow:'auto'}}>

    <Route exact path="/buyerdash/cart" component={Buycart} />
    <Route exact path="/buyerdash/" component={BuyHistory} />
    <Route exact path="/buyerdash/address" component={BuyAddress} />
                       
</div>
               </div>
           </div>
           </div> 
           
           :
           <div>

            {/* Signin ============== */}
           <Modal show={this.state.showsignin} onHide={()=>{
                   this.props.history.push({
                                       pathname:'/',
                                      
                                   })
           }}
     size="md"
     aria-labelledby="contained-modal-title-vcenter"
     centered
    >
        <Modal.Header closeButton 
        style={{'color':'white'}}
        >
            
          <Modal.Title><img src={logo1} style={{ height:"40px",borderRadius:'8px',margin:'10px'}} alt="logo"/>
              <span style={{color:'orange'}}><b>SignIn</b></span></Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <Container>
            {this.state.signinload ?
        <Form >
    

  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email"
    
    onChange={(e)=>{
        this.setState({email:e.target.value}
        )
    }}

    />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
    onChange={(e)=>{
        this.setState({password:e.target.value}
        )
    }}
    />
    
  </Form.Group>
</Form>
:  
  <div className="d-flex justify-content-center align-items-center h-100" >
<Spinner animation="border" variant="danger" />
<p>Verifying...</p>
</div>
}
          </Container>
        </Modal.Body>
        <Modal.Footer>
        <p className="secondary" style={{cursor:'pointer',textDecoration:'underline'}} onClick={()=>{
             this.setState({showsignup:true,showsignin:false})
          
        }
            }>
            Don't have an Account
          </p>
          <Button variant="primary" onClick={this.Signin}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>

{/* Signup================= */}
      <Modal show={this.state.showsignup} onHide={
          ()=>{
            this.props.history.push({
                pathname:'/',
               
            })
          }
      }
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
    >
        <Modal.Header closeButton style={{'color':'white'}}>
          <Modal.Title>
              <img src={logo1} style={{ height:"40px",borderRadius:'8px',margin:'10px'}} alt="logo"/>
              <span style={{color:'orange'}}><b>SignUp</b></span></Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <Container>
        {this.state.signupload ?
        <Form >
    <Form.Group controlId="formGroupPassword">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Username" onChange={(e)=>{
        this.setState({username:e.target.value})
        
    }} />
  </Form.Group>

  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email"
    
    onChange={(e)=>{
        this.setState({email:e.target.value}
        )
    }}

    />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
    onChange={(e)=>{
        this.setState({password:e.target.value}
        )
    }}
    />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Label>Re-Password</Form.Label>
    <Form.Control type="password" placeholder="Re-Password" 
    onChange={(e)=>{
        this.setState({repassword:e.target.value}
        )
    }}
    
    />
  </Form.Group>

</Form>
:
<div className="d-flex justify-content-center align-items-center h-100" >
<Spinner animation="border" variant="danger" />
<p>upload and verify...</p>
</div> 
}
          </Container>
        </Modal.Body>
        <Modal.Footer>
        <p className="secondary" style={{cursor:'pointer',textDecoration:'underline'}} onClick={

            ()=>{
                this.setState({showsignup:false,showsignin:true})
            }
        }>
            Have an Account
          </p>
          <Button variant="primary" onClick={this.Signup}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>

      </div>
           }
            </>
        )
    }
}


class BuyAddress extends Component {
    constructor(){
        super()
        this.state={
            email:getTokenforCredentials(),
            address:{},
            country:'',
            mystate:'',
            myaddress:'',
            phoneno:'',
            pageload:true
        }

    }

    updateAddress=async()=>{
        const data={
            country:this.state.country,
            mystate:this.state.mystate,
            myaddress:this.state.myaddress,
            phoneno:this.state.phoneno 
        }
        
       await axios.post('https://myshop-12.herokuapp.com/save_buy_address',{"email":this.state.email,"address":data}).then((res)=>{ 
          alert("Address Updated")
    }
)
    }

    async componentDidMount(){
      await  axios.post('https://myshop-12.herokuapp.com/get_buy_address',{"email":this.state.email}).then((res)=>{ 
      this.setState({address:res.data})
           this.setState({pageload:false})

    }
)
    }
    render() {
        if(!this.state.pageload){
        return (
            <>
              
<div className="address row g-0 m-0 p-0 ">
    <div className="col-md-8">
    

<div className="address-box bg-white p-4 m-4 " style={{borderRadius:'10px',backgroundImage: 'linear-gradient(45deg,black,white)'}}>

    <h4 style={{color:'blue'}}>Current Address</h4>
    <hr/>
<Form >
    <Row>
        <Col>
        <Form.Group controlId="formGroupEmail">
      <Form.Label style={{color:'skyblue'}}>Country</Form.Label>
      <Form.Control type="text"
     
  value={this.state.address["Address"] != null ? this.state.address["Address"].country: ''}
      />
    </Form.Group>
        </Col>
        <Col>
        <Form.Group controlId="formGroupPassword">
      <Form.Label style={{color:'skyblue'}}>State</Form.Label>
      <Form.Control type="text"  
      value={this.state.address["Address"]!=null ? this.state.address["Address"].mystate:''}
      />
    </Form.Group>
        </Col>
    </Row>
    

    
  
  
    
    <Form.Group controlId="formGroupPassword">
      <Form.Label style={{color:'skyblue'}}>Address</Form.Label>
      <Form.Control type="text" 
    value={this.state.address["Address"]!=null ? this.state.address["Address"].myaddress:''}
      />
    </Form.Group>
    <Form.Group controlId="formGroupPassword">
      <Form.Label style={{color:'skyblue'}}>Phono No</Form.Label>
      <Form.Control type="text"  style={{color:'green'}}
   value={this.state.address["Address"]!=null ? this.state.address["Address"].phoneno:''}
      />
    </Form.Group>
    </Form>
    </div>

    <div className="address-box  p-4 m-4 " style={{borderRadius:'10px',backgroundImage: 'linear-gradient(45deg,blue,white)'}}>
    <h4 style={{color:'white'}}>Update Address</h4>
    <hr/>
    
<Form >
    
    <Form.Group controlId="formGroupEmail">
      <Form.Label style={{color:'white'}}>Country</Form.Label>
      <Form.Control type="text" 
      onChange={(e)=>{
          this.setState({country:e.target.value}
          )
      }}
  
      />
    </Form.Group>
  
  
    <Form.Group controlId="formGroupPassword">
      <Form.Label style={{color:'white'}}>State</Form.Label>
      <Form.Control type="text" 
      onChange={(e)=>{
          this.setState({mystate:e.target.value}
          )
      }}
      />
    </Form.Group>
    <Form.Group controlId="formGroupPassword">
      <Form.Label style={{color:'white'}}>Address</Form.Label>
      <Form.Control type="text" 
      onChange={(e)=>{
          this.setState({myaddress:e.target.value}
          )
      }}
      />
    </Form.Group>
    <Form.Group controlId="formGroupPassword">
      <Form.Label style={{color:'white'}}>Phono No</Form.Label>
      <Form.Control type="text"  
      onChange={(e)=>{
          this.setState({phoneno:e.target.value}
          )
      }}
      />
    </Form.Group>

    <Button variant="primary" onClick={this.updateAddress}>Submit</Button>
  </Form>
  </div>
      
  </div>
  <div className="col-md-4 m-0 p-0 buyadddressimg">
<img src={addressimg} alt="" width="90%" className="my-4 mx-2" style={{borderRadius:'10px'}} />
  </div>
</div>
       
            </>
        )
    }
    else{
        return (
            <div className="profile" >
            <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}} >
              <Spinner animation="border" variant="danger" />
              <p>Loading...</p>
            </div>
            </div>
             )
    }
    }
}
class Buycart extends Component {

    constructor(props){
        super(props)
        this.state={
            email:getTokenforCredentials(),
            purchasedinfo:[],
            pageload:true
        }
    }

   async componentDidMount(){
await axios.post('https://myshop-12.herokuapp.com/cart_item',{"email":this.state.email}).then((res)=>{ 
    this.setState({purchasedinfo:res.data})  
    this.setState({pageload:false})   
    }
)
    }

    render() {
        if(!this.state.pageload){
        return (
            <>       
            <div className="row g-0 m-0 p-0" >
                {this.state.purchasedinfo.length===0 ? 
                <div className="col-md-12 mx-auto">
                <h1 className="text-center  ">No Item In Your Cart</h1>
<img src={cartimg} alt="" width="100%"  height="60%" style={{borderRadius:'10px'}}/>
                </div>
                :
                
            this.state.purchasedinfo.map((key,index)=>{
                                             return(
                                                
                <Showitems id={key.Id} cart="true" />
                                               )   
            }
                                            )
                                             }   
            </div>      
                    </>
        )}
        else{
            return (
                <div className="history" >
               <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}} >
                 <Spinner animation="border" variant="danger" />
                 <p>Loading...</p>
               </div>
               </div>
                ) 
        }
    }
}


class BuyHistory extends Component {

    constructor(props){
        super(props)
        this.state={
            email:getTokenforCredentials(),
          
            purchasedinfo:[],
            pageload:true
        }
    }

   async componentDidMount(){
await axios.post('https://myshop-12.herokuapp.com/purchase_item',{"email":this.state.email}).then((res)=>{ 
    this.setState({purchasedinfo:res.data}) 
    this.setState({pageload:false})   
    }
).catch((err)=>{
    this.setState({pageload:false})  
})
}
    render() {
        if(!this.state.pageload){
        return (
            <>       
    <div className="row g-0 m-0 p-0" >


    {this.state.purchasedinfo.length===0 ? 
               <div className="col-md-12 mx-auto">
               <h1 className="text-center  ">You have No Item purchased</h1>
<img src={purimg} alt="" width="100%" height="60%" style={{borderRadius:'10px'}}/>
               </div>
               :
    this.state.purchasedinfo.map((key,index)=>{
       
                                     return(
        <Showitems id={key.Id} cart="false" />
                                       )   
                                   
                                    })}    
    </div>
                
            </>
        )}
        else{
            return (
                <div className="history" >
               <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}} >
                 <Spinner animation="border" variant="danger" />
                 <p>Loading...</p>
               </div>
               </div>
                ) 
        }
    }
}


class Showitems extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.id,
            productDetails:{},
            myaddress:'',
            phoneno:'',
            mystate:'',
            country:'',
            showaddress:false,
            pageload:true

        }
    }
    buy=async ()=>{
        await axios.post('https://myshop-12.herokuapp.com/get_buy_address',{"email":getTokenforCredentials()}).then(async (res)=>{ 
            if(res.data["Address"] !== null){
                await axios.post('https://myshop-12.herokuapp.com/single_buy',{"email" : getTokenforCredentials(),"id":this.state.id}).then((res)=>{ 
                    if(res.data===true){
                        alert("Thanks for Buying and You can update Address Later")
                    }
                    else{
                        alert("Please try Again ") 
                    }  
                }).catch((gh)=>{   
            });
            }
            else{
                this.setState({showaddress:true})
            }
 
     }
 )

    }


    buywhenaddressnotcomplete=async ()=>{
      this.setState({showaddress:false})
        const data={
            "country":this.state.country,
            "phoneno":this.state.phoneno,
            "state":this.state.mystate,
            "address":this.state.address
        }
  
                await axios.post('https://myshop-12.herokuapp.com/single_buy',{"email" : getTokenforCredentials(),"id":this.state.id,"address":data}).then((res)=>{ 
                    if(res.data===true){
                        alert("Thanks for Buying $ You can update Address Later")
                    }
                    else{
                        alert("Please Try Again") 
                    }  
                }).catch((gh)=>{   
            });
            }

            remove=async ()=>{
               await axios.post('https://myshop-12.herokuapp.com/remove_from_cart',{"id":this.state.id,'email':getTokenforCredentials()}).then((res)=>{ 
                    if(res.data===true){
                        alert("Cart is Removed")
                    }
                    else{
                        alert("Please Try Again") 
                    }  
                }).catch((gh)=>{   
            });
            }

            returnproduct= async ()=>{
                await axios.post('https://myshop-12.herokuapp.com/return_product',{"id":this.state.id,'email':getTokenforCredentials()}).then((res)=>{ 
                    if(res.data===true){
                        alert("Product is returned")
                    }
                    else{
                        alert("Please Try Again") 
                    }  
                }).catch((gh)=>{   
            });  
            }
    

    
   async componentDidMount(){
       await axios.post('https://myshop-12.herokuapp.com/get_item_by_id',{"id":this.state.id}).then((res)=>{ 
                this.setState({productDetails:res.data})
                    this.setState({pageload:false})  
                }
            ) 
}
    render() {
if(!this.state.pageload){
        return (
            <>
               <div className="col-md-4 col-sm-6 col-lg-3 p-2 ">

                   {this.props.cart==="true" ? 
                   <div class="card mx-2 my-2 mx-auto" style={{'width': '16.5rem'}}>
                   {this.state.productDetails['Pic']!=null ?
                   <img src={this.state.productDetails["Pic"]} alt="img" className="w-100" />
                       :''
                   }
         
                     <div class="card-body m-0"> 
                     <p className=" text-center m-0 mb-2 p-0" style={{'fontSize':'18px'}}><b>{this.state.productDetails['Name']}</b></p>
                     <p className=" m-0 p-0 text-center">{this.state.productDetails['Brand']}</p>
                     <p className="m-0 p-0 text-center">Rs {this.state.productDetails['Cost']}</p>

                        </div>
             <div >

                   <Button className="btn btn-primary mx-3 mb-2" style={{width:'40%'}} onClick={
                      this.buy
                   }>
                   Buy
                 </Button>
                 <Button className="btn btn-warning mx-2 mb-2" style={{width:'41%'}} onClick={
                      this.remove
                   }>
                   Remove
                 </Button>
                 </div>
               
                </div> 
                   :
        <div class="card mx-2 my-2 mx-auto" style={{'width': '16.5rem'}}>
                          {this.state.productDetails['Pic']!=null ?
                              <img src={this.state.productDetails["Pic"]} alt="img" className="w-100" />:''
                          }
                
                            <div class="card-body m-0"> 
                            <p className=" text-center m-0 mb-2 p-0" style={{'fontSize':'18px'}}><b>{this.state.productDetails['Name']}</b></p>
                            <OverlayTrigger trigger="hover" placement="top" overlay={
                                <Popover id="popover-basic">
                                <Popover.Title as="h3">Details</Popover.Title>
                                <Popover.Content>
                                <div>
                            <p className=" m-0 p-0 text-center">{this.state.productDetails['Brand']}</p>
                            <p className="m-0 p-0 text-center">Rs {this.state.productDetails['Cost']}</p>
                            <p className="m-0 p-0 text-center" ><span style={{'color':'grey'}}>{this.state.productDetails['Description']}</span> </p>
<p className="m-0 p-0 text-center" ><span style={{'color':'red'}}>Not Deleverd</span> </p>
                            </div>
                                </Popover.Content>
                            </Popover>


                            }>
                            <Button variant="success">More Information</Button>
                        </OverlayTrigger>
                           
                           
                            
                               </div>
                    <div >

                          <Button className="btn btn-primary mx-3 mb-2" style={{width:'40%'}} onClick={
                             this.returnproduct
                          }>
                          Return
                        </Button>
                        
                        </div>
                      
                       </div> 
    }              
        </div>  


        {/* Address ============= */}

        
<Modal show={this.state.showaddress} onHide={()=>{this.setState({showaddress:false})}}
     size="md"
     aria-labelledby="contained-modal-title-vcenter"
     centered
    
    >
        <Modal.Header closeButton>
          <Modal.Title>Add Address For Purchasing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
        <Form >
    

  <Form.Group controlId="formGroupEmail">
    <Form.Label>Country</Form.Label>
    <Form.Control type="text" 
    
    onChange={(e)=>{
        this.setState({country:e.target.value}
        )
    }}

    />
  </Form.Group>


  <Form.Group controlId="formGroupPassword">
    <Form.Label>State</Form.Label>
    <Form.Control type="text"  
    onChange={(e)=>{
        this.setState({mystate:e.target.value}
        )
    }}
    />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" 
    onChange={(e)=>{
        this.setState({myaddress:e.target.value}
        )
    }}
    />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Phono No</Form.Label>
    <Form.Control type="text"  
    onChange={(e)=>{
        this.setState({phoneno:e.target.value}
        )
    }}
    />
  </Form.Group>
</Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={this.buywhenaddressnotcomplete}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
            </>
        )}
        else{
            return (
                 <div className="col-md-3 my-2 ">
                <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}} >
                  <Spinner animation="border" variant="danger" />
                  <p>Loading...</p>
                </div>
                </div>
                 )
        }
    }
}


// class MyImageItem extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             pic:this.props.pic
//         }
//     }

//     componentDidMount(){
//          axios.post('https://myshop-12.herokuapp.com/getImage',{"imagename":this.state.pic}).then((res)=>{  
           
//                            this.setState({pic:res.data})
//                       })
        
//     }
    
//    render() {
//        return (
//            <>
// <img src={this.state.pic} alt="img" width="90%"  />

//            </>
//        )
//    }
// }





