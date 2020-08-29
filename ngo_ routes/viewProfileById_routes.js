var express = require('express');
 var router = express.Router();
 var viewProfile=require('../ngo_ models/registration_model');

 router.get('/:ngo_email',function(req,res,next){
    viewProfile.viewProfileById(req.params.ngo_email,function(err,rows){
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