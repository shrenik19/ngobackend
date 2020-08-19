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
    }

}

module.exports=registration;