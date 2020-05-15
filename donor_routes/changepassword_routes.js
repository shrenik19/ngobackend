var express = require('express');
 var router = express.Router();
 var Changepass=require('../donor_models/donordetail_model');
    
router.put('/',function(req,res,next){
    Changepass.changepassword(req.body,function(err,rows){
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
