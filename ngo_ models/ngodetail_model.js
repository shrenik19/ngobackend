var db=require('../dbconnection');
var Ngo={
        
     getLogin:function(email_id,item,callback){

        return db.query("Select * from ngo_details_tbl where ngo_email=? And ngo_password=? ",[email_id,item.ngo_password],callback)
     },
     getNgoDetailById:function(email_id,callback){

        return db.query("Select * from ngo_details_tbl where ngo_email=? ",[email_id],callback)
     },
     getNgoDetailByNopName:function(nop_name,callback){

      console.log(nop_name);
      return db.query("SELECT * FROM ngo_details_tbl as a WHERE FIND_IN_SET(?,fk_ngo_nop_name) ",[nop_name],callback)
   },


    
}
module.exports=Ngo;
