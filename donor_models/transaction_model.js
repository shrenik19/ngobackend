var db=require('../dbconnection');
var Transaction={
        
    

     AddTransaction:function(item,callback){
        var d=new Date(Date.now());
        return db.query("insert into transaction_tbl(pay_to_ngo_email,donate_from_donor_email,transaction_amt,transaction_date,fk_nop_name) values(?,?,?,?,?)",[item.pay_to_ngo_email,item.donate_from_donor_email,item.transaction_amt,d,item.fk_nop_name],callback);
    },
    


    
}
module.exports=Transaction;
