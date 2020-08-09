const express=require('express')
const auth=require('../../middleware/auth')
const router=express.Router()

//Item Model
const Item=require('../../models/Item')

//@route GET request api/items
//@desc Get All items
//@access Public
router.get('/',auth,(req,res)=>{
    Item.find()
        .sort({date:-1})
        .then(items=>res.json(items))
})

//@route POST request api/items
//@desc Create an Item
//@access Private
router.post('/',(req,res)=>{
    const newItem=new Item({
        name:req.body.name
    })
    newItem.save().then(item=>res.json(item))
})

//@route DELETE request api/items
//@desc Delete an Item
//@access Private
router.delete('/:id',auth,(req,res)=>{
    Item.findById(req.params.id)
        .then(item=>item.remove().then(()=>res.json({success:true})))
        .catch(err=>res.status(404).json({success:false}))
})




module.exports=router;