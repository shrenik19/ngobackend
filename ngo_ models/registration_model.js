var db=require('../dbconnection');

var registration={

    register1:function(item,filename,callback)
    {
        console.log(item);
        return db.query("insert into ngo_details_tbl  values(?,?,?,?,?,?,?,?,?,?,?,?)",[item.ngo_name,filename,item.ngo_email,item.ngo_password,item.ngo_registration_no,item.fk_ngo_nop_name,item.ngo_address,item.ngo_landmark,item.ngo_city,item.ngo_pincode,item.ngo_state,item.ngo_contact],callback);
    },
    getallnop:function(ngo_email,callback)
    {
        return db.query("select * from ngo_details_tbl where ngo_email=?",[ngo_email],callback);
    },
    register2:function(item,filename,callback)
    {
        console.log(item);
        return db.query("insert into ngo_nop_tbl values(?,?,?,?)",[item.fk_ngo_email,item.fk_nop_name,filename,item.nop_description],callback);
    },
    register3:function(item,callback)
    {
        console.log(item);
        return db.query("insert into ngo_contact_tbl values(?,?,?,?,?,?)",[item.fk_ngo_email,item.contact_for_donor,item.ngo_website,item.ngo_facebook,item.ngo_instagram,item.ngo_twitter],callback);
    },
    viewProfileById:function(ngo_email,callback)
    {
        //console.log(item);
        return db.query("select r1.*,r2.*,r3.* from ngo_details_tbl r1, ngo_nop_tbl r2,ngo_contact_tbl r3 where r1.ngo_email=? And r1.ngo_email=r2.fk_ngo_email And r2.fk_ngo_email=r3.fk_ngo_email"
        ,[ngo_email],callback)
    },
    updateprofile1:function(id,item,filename,callback)
    {
        console.log(item);
        return db.query("update ngo_details_tbl set ngo_name=?,ngo_logo=?,ngo_password=?,ngo_registration_no=?,fk_ngo_nop_name=?,ngo_address=?,ngo_landmark=?,ngo_city=?,ngo_pincode=?,ngo_state=?,ngo_contact=? where ngo_email=?",[item.ngo_name,filename,item.ngo_password,item.ngo_registration_no,item.fk_ngo_nop_name,item.ngo_address,item.ngo_landmark,item.ngo_city,item.ngo_pincode,item.ngo_state,item.ngo_contact,id],callback);
    },
    updateprofile2:function(id,item,filename,callback)
    {
        return db.query("update ngo_nop_tbl set fk_nop_name=?,proof_image=?,nop_description=? where fk_ngo_email=?",[item.fk_ngo_nop_name,filename,item.nop_description,id],callback);
    },
    updateprofile3:function(id,item,callback)
    {
        return db.query("update ngo_contact_tbl set new_donor_contact=?,ngo_website=?,ngo_facebook=?,ngo_instagram=?,ngo_twitter=? where fk_ngo_email=?",[item.new_donor_contact,item.ngo_website,item.ngo_facebook,item.ngo_instagram,item.ngo_twitter,id],callback);
    },
}

module.exports=registration;