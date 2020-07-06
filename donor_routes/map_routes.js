var express = require('express');
 var router = express.Router();
 var Map=require('../donor_models/map_mdoel');


 router.get('/',function(req,res,next){
    Map.getAllMap(function(err,rows){
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
