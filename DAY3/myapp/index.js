 
const express = require('express');
const app=express();

app.get('/',(request,response)=>{
    response.send('hello world');
    //console.log(response);
})

app.get('/date',(request,response)=>{
    let date=new Date();
    response.send(`today date is ${date}`)
})

app.get('/page',(request,response)=>{
    response.sendFile('./page.html',{root:__dirname});
})
app.listen(4000,()=>{
console.log('serevr is running in port 3000')
})