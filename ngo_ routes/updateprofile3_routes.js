var express = require('express');
var register=require('../ngo_ models/registration_model')
var express=require('express');
var router=express.Router();

router.put('/:id?',function(req,res,next){
register.updateprofile3(req.params.id,req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

    
module.exports=router;
