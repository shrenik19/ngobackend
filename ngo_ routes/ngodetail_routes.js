var express = require('express');
 var router = express.Router();
 var Ngo=require('../ngo_ models/ngodetail_model');


router.get('/:email_id',function(req,res,next){
    Ngo.getNgoDetailById(req.params.email_id,function(err,rows){
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

router.post('/:email_id',function(req,res,next){ 
   Ngo.getLogin(req.params.email_id,req.body,function(err,rows){
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
