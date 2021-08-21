import '../css/Register.css';
import Signin from '../signin';
import Signup from '../Signup';
import Forget from '../Forget';
import { Route} from 'react-router-dom';


const Register = () =>{
    return(
    <>
    <div className="container-fluidx" style={{minWidth:'350px'}}>
        <div className="registerbox m-4 " style={{width:'55%',minWidth:'350px'}}>
            
            <div className="row gx-0 m-0 ">
                <div className="col-sm-12  d-none d-md-block d-lg-block col-12 col-md-12 col-lg-5" style={{backgroundColor:"rgb(48, 48, 99)"}}>
                    <div className="row m-4">
                       <div className="col-md">
                           <h3 className="text-center" style={{color: "white"}}>MyShop.com</h3>
                       </div> 
                    </div>
                    <div className="row m-4">
                        <div className="col-md " style={{color: "rgb(160, 154, 154)"}}>
                            
                           <p className="text-center">Connect With Social media</p>
                        </div> 
                     </div>
                     <div className="row m-4">
                        <div className="col-md">
                            <button  className="facebook"><i className="fa fa-facebook m-2"></i>Facebook</button>
                        </div> 
                     </div>
                     <div className="row m-4">
                        <div className="col-md">
                            
                            <button  className="twitter"><i className="fa fa-twitter m-2"></i>Twitter</button>
                        </div> 
                     </div>
                     <div className="row m-4">
                        <div className="col-md">
                           
                            <button  className="google"><i className="fa fa-google m-2"></i>Google</button>
                        </div> 
                     </div>
                </div>
                <div className="col-md-12 p-4 col-sm-12 col-12 col-lg-7 col-12" id="formbox" >
               
      <Route exact path="/Register" component={Signup}/>
      <Route exact path="/Register/Signin" component={Signin} />
      <Route exact path="/Register/Forget" component={Forget} />

                </div>
                
                </div>
                </div> 
                </div>
            
                   

    </>
    )
}

export default Register;

