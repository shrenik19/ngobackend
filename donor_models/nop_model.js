var db=require('../dbconnection');
var Nop={
        
    getAllNop:function(callback){

        return db.query("Select * from nop_tbl ",callback)
     },

     

    
}
module.exports=Nop;
