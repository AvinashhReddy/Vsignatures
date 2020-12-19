const express= require('express')
const route = express.Router()
const d=require('../models/db')

route.get('/',async(req,res)=>{
const a=await d.find()
res.json(a)
    
})
route.get('/:p',async(req,res)=>{
    const a=await d.find({'rNum':req.params.p})
  
      res.json(a)
  

        
    })
route.put('/:p',async(req,res)=>{
    const a=await d.find({'rNum':req.params.p})
    if(a.length==0){
        const b= new d({
            name:req.body.name,
            rNum:req.body.rNum,
            password:req.body.password, 
            c1:req.body.c1
        })
        await b.save()
    }
    else{
        const result = await d.findOneAndUpdate({'rNum':req.params.p},req.body)
        res.json(result)
    }
  
        
    })


module.exports=route