var express = require('express');
var router = express.Router();
var transaction = require("../donor_models/transaction_model");
router.post('/',function(req,res,next){

    console.log(req.body);
    transaction.AddTransaction(req.body,function(err,message){

        if(err)
        {
            console.log(err);
            res.json(err);
            
        }
        else
        {
            return res.json({success: true, msg: 'sent'});//or return count for 1 or 0
        }
    });
});

module.exports=router; 