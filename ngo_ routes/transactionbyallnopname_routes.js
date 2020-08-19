var express = require('express');
 var router = express.Router();
 var transactionByAllNop=require('../ngo_ models/transaction_model');


 router.get('/',function(req,res,next){
    transactionByAllNop.getAllTransactionByAllNopName(function(err,rows){
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
