const mongoose=require('mongoose')

const schema= new mongoose.Schema({
name :{
    type:String,
    default:""
},
rNum:{
    type:String,
    default:""
},
password:{
    type:String,
    default:""
},
counter:{
    type:Number,
    default:0
},
commentArray:[{
    type:String,

}],
c1:{
    type:String,
    default:" "
},
c2:{
    type:String,
    default:" "
},
c3:{
    type:String,
    default:" "
},
c4:{
    type:String,
    default:" "
},
c5:{
    type:String,
    default:" "
},
c6:{
    type:String,
    default:" "
},
c7:{
    type:String,
    default:" "
},
c8:{
    type:String,
    default:" "
},
c9:{
    type:String,
    default:" "
},
c10:{
    type:String,
    default:""
},
c11:{
    type:String,
    default:" "
},
c12:{
    type:String,
    default:" "
},
c13:{
    type:String,
    default:" "
},
c14:{
    type:String,
    default:" "
},
c15:{
    type:String,
    default:" "
},
c16:{
    type:String,
    default:" "
},







}
)

module.exports=mongoose.model('db',schema)
