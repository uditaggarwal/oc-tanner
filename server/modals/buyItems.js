const mongoose= require('mongoose')
const buyItem=mongoose.Schema({
    "Email":{type:String,require:true},
    "Id":{type:String},
   
})

module.exports=mongoose.model('BuyItems',buyItem)