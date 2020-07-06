var db=require('../dbconnection');
var Map={
        
    getAllMap:function(callback){

        return db.query("Select * from map_tbl ",callback)
     },

     

    
}
module.exports=Map;
