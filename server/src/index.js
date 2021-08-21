//modules==============================================
const express=require('express')
const  mongoose=require('mongoose')
const cors=require('cors')
const app=express()
const bodyparser=require('body-parser')
const fileUpload = require('express-fileupload')
const fs=require('fs')
const saveitems = require('../modals/saveitems')
const buyItems = require('../modals/buyItems')
const { BSONType } = require('mongodb')
const BSON=require('bson')
// var admin = require("firebase-admin");

// firebase =================================
// var serviceAccount = require("../serviceAccount.json");

// admin.initializeApp({
// credential: admin.credential.cert(serviceAccount),
// storageBucket: "node-js-980ba.appspot.com"
// });

//bucket of firebase
// var bucket=admin.storage().bucket()
// =============================== 

//Modals================================================
const auth = require('../modals/auth')
const shopitem = require('../modals/saveitems')
const profile=require('../modals/profile')
const buyitem=require('../modals/buyItems')
const purchase=require('../modals/purchases')
require('dotenv').config()

//Mongo Connection=======================================

// Atlas ==================
mongoose.Promise =global.Promise;
    mongoose.connect('mongodb+srv://xscience:xscience@4438@myshopcluster.rwosa.mongodb.net/Myshop?retryWrites=true&w=majority',
    {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
});
mongoose.connection.on('connected',()=>{
    console.log("Mongo Connected");
})
mongoose.connection.on('error',()=>{
    console.log('Error Ov')
})


//middle wares=========================================
app.use(bodyparser.urlencoded({extended:true}))     //Url encoded
app.use(cors())
app.use(express.json())
app.use(fileUpload())


//Express Port====================================================
const PORT=process.env.PORT || 5000

//Auth=====================================================

app.get('/',(req,res)=>{
    res.send("hello")
})

app.post('/save_auth',(req,res)=>{
    auth.findOne({Email:req.body.email}).then((result)=>{
        if(result!=null){
            return res.send(false);
        }
        else{
            const  mydata=new auth({
                Username:req.body.username,
                Email:req.body.email,
                Password:req.body.password
            });
            mydata.save().then((data)=>{
              return res.send(true);
                })
                .catch(()=>{
                    res.send("Something Wrong");
                })  
        }
    }).catch((result)=>{
        res.send("Something Went Wrong");
    })

})


app.post('/get_auth',(req,res)=>{

    auth.findOne({Email:req.body.email,Password:req.body.password}).then((da)=>{
    if(da==null){
        return res.send("Not Successfully login"); 
    }
    else{
        if(req.body.check=='buyer'){
            profile.findOne({"Email":req.body.email}).then((result)=>{
            
                data={
                    "Email":req.body.email,
                    "Auth":true
                }
                return res.send(data);
                    });
        }
    else{
        profile.findOne({"Email":req.body.email}).then((result)=>{
            const shopName=result.Shopname;
            
            data={
                "ShopName":shopName,
                "Email":req.body.email,
                "Auth":true
            }
            return res.send(data);
            
                });
    }

  
}
    })
    .catch(()=>{
        console.log("Not found details")
    })
   
})


//Profile=====================================
app.post('/get_profile',(req,res)=>{   
     
profile.findOne({"Email":req.body.email},function (err, doc) {
    if (err) throw err;
    if (doc != null) {
      
        return res.send(doc);
    }
   
});
})

app.post('/update_profile',(req,res)=>{      

    const updatedata={
            "FirstName":req.body.FirstName,
            "LastName":req.body.LastName,
            "Address":req.body.Address,
       
    } 
    
    profile.updateOne({"Email":req.body.email},{$set:updatedata}).then((response)=>{
        return res.send(response)
    })
    })

app.post('/saveProfile',(req,res)=>{
   
    profile.findOne({"Shopname":req.body.shopName}).then((result)=>{
        
        if (result != null) {
           
            return res.send("Exist");
        }
        else{
            const  profiles=new profile({
               
                "Email":req.body.email,
                "Shopname":req.body.shopName,
                "ShopCategory":req.body.category,
               
             });

             profiles.save().then((response)=>{
               
                return res.send("OK")
                    })
                    .catch((response)=>{
                        console.log(" submit error")
                    })
        }
       
    }).catch((e)=>{
console.log(e)
    });
    
    })

//Delete Items ================================================
app.post('/delete_items',(req,res)=>{
        const id=req.body.id
        shopitem.deleteOne({'_id':id}).then((response)=>{
        return res.status(200).send()
        }).catch((er)=>{
            return res.status(400).send()
        })
    })

//Add Items=============================================
app.post('/save_items',(req,res)=>{
    
    const shopItems=new shopitem({
        Name:req.body.name,
        Description:req.body.desc,
        Cost:req.body.cost,
        Ratings:req.body.ratings,
        Pic:req.body.pic,
        Shopname:req.body.shopname,
        Brand:req.body.pbrand,
        Category:req.body.category,
        Discount:req.body.discount,
        email:req.body.email,
     });

shopItems.save().then((response)=>{
res.send("ok")
    })
    .catch((response)=>{
        console.log(response)
    })


})

//Image Update==========================================
app.post('/update_ImageForProfile',(req,res)=>{
// const myFile=req.files.pic;
// const imagename=Date.now()+myFile.name;
const imagename=req.body.pic;
// await myFile.mv(`${__dirname}/public/uploads/${imagename}`, function (err) {
//     if (err) {
//         console.log(err)
//         return res.status(500).send({ msg: "Error occured" });
//     }
// });

profile.updateOne({'Email':req.body.email},{$set:{'Pic':imagename}})
.then((resp)=>{
    return res.status(200).send()
}).catch((err)=>{
    res.send("Error")
})
})


//Get Items=====================================================
app.post('/get_items',(req,res)=>{ 
shopitem.find({"email":req.body.email}, function (err, doc) { 
    if (doc != null) {
        return res.send(doc);
        }  
});


});


//Fetch Image==================================================
app.post('/getImage', (req,res)=>{

        const name=req.body.imagename;
        fs.readFile(`${__dirname}/public/uploads/${name}`,'base64',(err,base64Image)=>{        
        const dataurl = `data:image/jpeg;base64,${base64Image}`
        return res.send(dataurl);
        });       
    });
    

//Buy Single Product=============================================
app.post('/single_buy',(req,res)=>{

            const  mydata=new purchase({
                "Email":req.body.email,
                "Id":req.body.id,
                "Address":req.body.address
            }
            )
            mydata.save().then((r)=>{
                buyitem.findOne({$and:[{"Id":req.body.id,"Email":req.body.email}]}).then((r)=>{
                    buyitem.deleteOne({$and:[{"Id":req.body.id,"Email":req.body.email}]}).then((yu)=>{  
                    })
                })
                  return res.send(true)
            }).catch((er)=>{
                return res.send(false)
            })  
})

//Buy Items from cart================================================
app.post('/Cart_buy_item',(req,res)=>{
    buyitem.find({"Email":req.body.email},{"Id":1,"_id":0}, (err,result)=>{
        if(result.length!=0){
      for( var i=0;i<result.length;i++){
        const id=result[i]["Id"]
            const  mydata=new purchase({
                "Email":req.body.email,
                "Id":id,
                
            }
            )
            mydata.save()
            buyitem.deleteOne({$and:[{"Id":id,"Email":req.body.email}]}).then((yu)=>{  
            })
      }
      res.send(true)  
    }
    else{
        res.send(false)
    }
     
    })
    
  
})


//Remove Item from cart==============================================
app.post('/remove_from_cart',(req,res)=>{
    buyitem.remove({$and:[{"Email":req.body.email,"Id":req.body.id}]},(err,data)=>{ 
      return res.send(true)  
    })
    })

//Return Product from purchased=======================================
app.post('/return_product',(req,res)=>{
    purchase.deleteOne({$and:[{"Email":req.body.email,"Id":req.body.id}]},(err,data)=>{ 
        return res.send(true)  
    })
    })

//Fetch Purchased item==========================================    
app.post('/purchase_item',(req,res)=>{
    purchase.find({"Email":req.body.email},(err,data)=>{ 
      return res.send(data)  
    })
    })

//Fetch Items in the Cart===========================================
app.post('/cart_item',(req,res)=>{
    buyitem.find({"Email":req.body.email},(err,data)=>{
        return res.send(data)  
    })
})

//Save Address for buyer=============================================
app.post('/save_buy_address',(req,res)=>{
    purchase.updateMany({"Email":req.body.email},{$set:{
        "Address":req.body.address
    }},(err,data)=>{ 
        return res.send(true)  
    })
})

//Fetch Buyer customer Address===========================================
app.post('/get_buy_address',(req,res)=>{
    purchase.findOne({"Email":req.body.email},(err,data)=>{ 
         
        return res.send(data)  
    })
})


//Fetch item by Item id===============================================
app.post('/get_item_by_id',(req,res)=>{
const id=BSON.ObjectId(req.body.id)
   saveitems.findOne({"_id":BSON.ObjectId(req.body.id)}).then((data)=>{
      
       return res.send(data)
   })
})

//Add item into cart=================================================
app.post('/add_to_cart',(req,res)=>{
    buyitem.find({$and:[{"Email":req.body.email,"Id":req.body.id}]}, (err,result)=>{
        if(result.length >= 1){
        return res.send("Sorry ! This Product is Already in your bag")
        }
        else{
            const buyitem=new buyItems({
                "Email":req.body.email,
                "Id":req.body.id,
                }
            )
            buyitem.save().then((result)=>{
            }).catch((error)=>{
                return res.send(false)
            })
           return res.send("Product Added into Your bag")
        }
    }) 
 })




//Search==============================================================

app.post('/getItemsforSearchPage',(req,res)=>{

    if(req.body.shopname == "Menwear"){
        const lm=req.body.limit;
        
shopitem.find({"Category":req.body.shopname},function (err, doc) {
    
        if (doc != null) {
          
            return res.send(doc);
        }
        
    }).limit(lm);
}
else if(req.body.shopname == "Womenwear"){
    const lm=req.body.limit;
    shopitem.find({"Category":req.body.shopname},function (err, doc) {
        if (doc != null) {
            return res.send(doc);
        }
        
    }).limit(lm);

}
else if(req.body.shopname == "Electronics"){
    const lm=req.body.limit;
    shopitem.find({"Category":req.body.shopname},function (err, doc) {
    
        if (doc != null) {
            return res.send(doc);
        }
        
    }).limit(lm);
    
}
else if(req.body.shopname=="Mobiles"){
    const lm=req.body.limit;
    shopitem.find({"Category":req.body.shopname},function (err, doc) {
    
        if (doc != null) {
            return res.send(doc);
        }
        
    }).limit(lm);
    
}
    
});

//Fetch result According to Search=====================================
app.post('/getSearchResult',(req,res)=>{

    try{ 
        
         var pname;
  if(req.body.productName.length < 3){
    pname=req.body.productName;
  }
  else{
    pname=req.body.productName.substring(0,4);
  }

if((req.body.category === "all" || req.body.category === "") && req.body.cost == 0){
    
        shopitem.find({$or:[{"Name":new RegExp(pname,'i')},{"Category":new RegExp(pname,'i')}]},function (err, doc) {
    
            if (doc != null) {
              
                return res.send(doc);
            }
            
        });  
    }
   else if(req.body.category === "all" || req.body.category === "" && req.body.cost != 0){

        shopitem.find({$and:[{$or:[{"Name":new RegExp(pname,'i')},{"Category":new RegExp(pname,'i')}]},{"Cost":{$lte:req.body.cost}}]},function (err, doc) {
    
            if (doc != null) {
              
                return res.send(doc);
            }
            
        });  
    }

    else if(req.body.category != "all" && req.body.cost == 0){
    shopitem.find({$and:[{"Name":new RegExp(pname,'i')},{"Category":new RegExp(pname,'i')}]},function (err, doc) {
    
        if (doc != null) {
          
            return res.send(doc);
        }
        
    });
}
else{ 
    shopitem.find({$and:[{"Category":req.body.category},{"Name":new RegExp(pname,'i')},{"Cost":{$lte:req.body.cost}}]},function (err, doc) {
    
        if (doc != null) {
          
            return res.send(doc);
        }
        
    });
}
    }
    catch(e){
        console.log(e)

    }
})


app.listen(PORT || 3000,()=>{
    console.log("Server connected on : " +  Number(PORT))
})

