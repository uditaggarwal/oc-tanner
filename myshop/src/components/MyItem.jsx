
import axios from 'axios'
import React, { Component } from 'react'
import {OverlayTrigger,Popover,Spinner} from 'react-bootstrap'
function getTokenEmail(){
    const tokenString = sessionStorage.getItem('token');
    const tokenemail=JSON.parse(tokenString).emailToken
    return(tokenemail)
  
}


function removeArticle(data){
   
    axios.post('https://myshop-12.herokuapp.com/delete_items',{"id":data}).then((res)=>{  
             alert("Successfully Deleted")
             
        }).catch((er)=>{   
});

}
export default class MyItem extends Component {

    constructor(){
        super()
        this.state={
            dataList:[],
            picdata:'',
            pageload:true
        }
    }
   

    async componentDidMount(){
        
       await axios.post('https://myshop-12.herokuapp.com/get_items',{"email":getTokenEmail()}).then((res)=>{  
            
             this.setState({dataList:res.data})
             this.setState({pageload:false})
        }).catch((er)=>{   
});
        
    }


    render() {
        if(!this.state.pageload){
        return (
            <>
            < div class="myitems" >
               <div class="row gx-0 px-2" >
          
                      {

                      this.state.dataList.map((key,index)=>{
                   
                          return(
                       
                       <div class="col-md-4 col-sm-6 col-lg-3  p-2 d-flex justify-content-center">
                       <div class="card mx-2 my-2" style={{width: '18rem'}}>
                           {/* < MyImageItem pic={key.Pic}/> */}
                           <img src={key.Pic} class="card-img-top" alt="fds" width="90%"   />

                               <div class="card-body">
                              
                               <h5 className="card-title text-center">{key.Name}</h5>
                               <p className="my-0"><span ><b>Brand:</b></span> {key.Brand}</p>
                              <p className="my-0"><span style={{color:"green",fontSize:"20px"}}><b>Rs {key.Cost}</b></span></p>
                                 <span>
                               <OverlayTrigger trigger="hover" placement="top" overlay={
                                <Popover id="popover-basic">
                                <Popover.Title as="h3">Details</Popover.Title>
                                <Popover.Content>
                                <div>
                                <p className="my-0">{key.Shopname}</p>
                               <p className="my-0">{key.Description}</p>
                            </div>
                                </Popover.Content>
                            </Popover>
                            }>
                            <button className="btn btn-secondary py-0 mb-2">Info</button>
                        </OverlayTrigger>
                               </span>
                               <button className="btn btn-warning w-100" id={key._id} onClick={
                                   (e)=>{
                                       removeArticle(e.target.id)
                                         
                                   }
                               }>Remove</button>
                             
                               </div>
                       </div>
                       
                   </div>
                          )
                       })
                      
                       }       
               </div>
               
           </div>


</>
        )
                    }
                    else{
                        return (
                            <div class="myitems">
                            <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}} >
                              <Spinner animation="border" variant="danger" />
                              <p>Loading...</p>
                            </div>
                            </div>
                             )
                    }
    }
}

