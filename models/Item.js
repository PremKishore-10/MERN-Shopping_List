const mongoose=require('mongoose')
const schema=mongoose.Schema

//Create schema
const ItemSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=Item=mongoose.model('item',ItemSchema)