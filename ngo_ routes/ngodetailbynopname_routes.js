var express = require('express');
 var router = express.Router();
 var NgoDetail=require('../ngo_ models/ngodetail_model');


router.get('/:nop_name',function(req,res,next){
    NgoDetail.getNgoDetailByNopName(req.params.nop_name,function(err,rows){
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
