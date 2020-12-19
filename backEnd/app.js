const e= require('express');
const mongoose =require('mongoose');
const cors=require('cors')
const app= e();
const port=process.env.PORT || 8080;
app.listen(port);
const url='mongodb+srv://cluster0:cluster0@cluster0.hrvvo.mongodb.net/cluster0?retryWrites=true&w=majority'
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true})
const con=mongoose.connection

con.on('open',function(){
    console.log('connected!');
})
app.use(cors())
app.use(e.json())
const r=require('./routes/routes')
app.use('/avi',r)

app.get('/',(req,res)=>{
    res.send("heyys")
})