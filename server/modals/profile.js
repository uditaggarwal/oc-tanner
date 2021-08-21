const mongoose= require('mongoose')
const profile=mongoose.Schema({
    "FirstName":{type:String},
    "LastName":{type:String},
    "Email":{type:String,require:true},
    "Address":{type:String},
    "Shopname":{type:String,require:true},
    "ShopCategory":{type:String,require:true},
    "Pic":{type:String}
   
})

module.exports=mongoose.model('Profiles',profile)