var register=require('../ngo_ models/registration_model')
var express=require('express');
var router=express.Router();

router.post('/',function(req,res,next){
    register.register3(req.body,function(err,rows){
        if(err)
            res.json(err);
        else
            res.json(rows);
    });
});

module.exports=router;