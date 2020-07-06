var express = require('express');
 var router = express.Router();
 var Donor=require('../donor_models/donordetail_model');
 var nodemailer = require('nodemailer');

 router.get('/',function(req,res,next){
    Donor.getAllDonor(function(err,rows){
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
    
router.get('/:email_id',function(req,res,next){
    Donor.getDonorById(req.params.email_id,function(err,rows){
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
router.post('/',function(req,res,next){
    Donor.AddDonor(req.body,function(err,rows){
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
   Donor.getLogin(req.params.email_id,req.body,function(err,rows){
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
router.put('/:id?',function(req,res,next){
Donor.UpdateDonor(req.params.id,req.body,function(err,rows){
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
