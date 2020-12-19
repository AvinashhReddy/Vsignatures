const e= require('express');
const mongoose =require('mongoose');
const cors=require('cors')
const app= e();
const path=require('path')
const port=process.env.PORT || 8080;

const url='mongodb+srv://cluster0:cluster0@cluster0.hrvvo.mongodb.net/cluster0?retryWrites=true&w=majority'
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true})
const con=mongoose.connection

con.on('open',function(){
    console.log('connected!');
})
app.use(cors())
app.use(e.json())
app.use(e.static(path.join(__dirname,'public')));
const r=require('./routes/routes')
app.use('/avi',r)
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'))
})
app.get('/',(req,res)=>{
    res.send("heyys")
})
app.listen(port);