var express=require('express');
var route=express.Router();
var path=require('path');
var fs=require('fs');
var prepareCodeforTS=require('./prepareCode');

route.get('/xyz',(req,res)=>{

res.send('hey!');

});

route.post('/run',(req,res)=>{

    var lang=req.body.lang;
    var code=req.body.code;
    if(lang=="java"){
    prepareCodeforTS(res,code);
    }

});

route.post('/submit',(req,res)=>{

    var lang=req.body.lang;
    var code=req.body.code;
    if(lang=="java"){
    prepareCodeforTS(res,code);
    }

});

module.exports=route;