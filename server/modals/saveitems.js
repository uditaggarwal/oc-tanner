const mongoose= require('mongoose')
const shopitemsSchema=mongoose.Schema({
    "Name":{type:String,require:true},
    "Description":{type:String,require:true},
    "Cost":{type:String,require:true},
    "Ratings":{type:String,default:"3"},
    "Pic":{type:String},
    "Shopname":{type:String,require:true},
    "Category":{type:String,require:true},
    "Brand":{type:String,require:true},
    "Discount":{type:String,require:true},
    "email":{type:String,require:true},
})

module.exports=mongoose.model('Shopitems',shopitemsSchema)