import { NavLink } from "react-router-dom"

const Forget= () =>{
    return(
        <>

<div  id="forgetbox" >
                        <form action="" method="post" id="forgetform">
                            <div className="row m-2  d-flex justify-content-center" >
                                <h3 className="text-center text-white p-2" style={{backgroundColor:'rgb(38, 40, 87)',borderRadius:'15px'}}>Recover Your password</h3>
                            </div>
                            <div className="row">
                                <div className="col-md m-2">
                                    <p className="text-center" style={{color: "grey"}}> we will send you an email with further instructions.</p>
                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="col-md m-2">
                                    <input type="text" placeholder="Email address" />
                                </div>
                            </div>
            
                            <div className="row m-2">
                                <div className="col-md m-2">
                                <button className="btn-primary p-2" style={{width: '100%',borderRadius:"10px"}}>Recover your password</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <p className="text-center"><NavLink to="/Register/Signin" id="uloginformlink">Already have an account?</NavLink></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <p className="text-center"><NavLink to="/Register" id="usignupformlink">Don't have an account?</NavLink></p>
                                </div>
                            </div>
                        </form>
                     </div> 
        </>



    )
}

export default Forget;