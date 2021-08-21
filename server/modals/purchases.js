const mongoose= require('mongoose')
const purchase=mongoose.Schema({
    "Email":{type:String,require:true},
    "Id":{type:String},
    "Address":{type:Object}  
})

module.exports=mongoose.model('Purchases',purchase)