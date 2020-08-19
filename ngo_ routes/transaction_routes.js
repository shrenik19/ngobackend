var express = require('express');
 var router = express.Router();
 var transaction=require('../ngo_ models/transaction_model');


 router.get('/',function(req,res,next){
    transaction.getAllTransactionTotalByNopName(function(err,rows){
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
router.get('/:nop_name',function(req,res,next){
    transaction.getAllTransactionByNopName(req.params.nop_name,function(err,rows){
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
