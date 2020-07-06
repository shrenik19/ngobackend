var db=require('../dbconnection');
var Donor={
        
    getAllDonor:function(callback){

        return db.query("Select * from donor_tbl ",callback)
     },

     getDonorById:function(email_id,callback){

        return db.query("Select * from donor_tbl where donor_email=? ",[email_id],callback)
     },
     getLogin:function(email_id,item,callback){

        return db.query("Select * from donor_tbl where donor_email=? And donor_password=? ",[email_id,item.donor_password],callback)
     },

     AddDonor:function(item,callback){
        return db.query("insert into donor_tbl(donor_email,donor_name,donor_password,donor_gender,donor_contact,donor_address,donor_PAN_no) values(?,?,?,?,?,?,?)",[item.donor_email,item.donor_name,item.donor_password,item.donor_gender,item.donor_contact,item.donor_address,item.donor_PAN_no],callback);
    },
    UpdateDonor:function(id,item,callback){
        
         return db.query("update donor_tbl set donor_name=?,donor_gender=?,donor_contact=?,donor_address=?,donor_PAN_no=? where donor_email=?",[item.donor_name,item.donor_gender,item.donor_contact,item.donor_address,item.donor_PAN_no,id],callback)
},
    getForgetPassword:function(email_id,callback){
         
        return db.query("Select * from donor_tbl where donor_email=?",[email_id],callback);
    },
    changepassword:function(item,callback){
        return db.query("update donor_tbl set donor_password=? where donor_email=?",[item.donor_password,item.donor_email],callback);
    },


    
}
module.exports=Donor;
