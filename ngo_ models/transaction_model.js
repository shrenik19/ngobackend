var db=require('../dbconnection');
var Transaction={
        
     
     getAllTransactionByNopName:function(nop_name,callback){
        //console.log(ngo_email+nop_name);
        return db.query("SELECT n.*,pay_to_ngo_email,SUM(transaction_amt) As Total_Amt FROM transaction_tbl t,ngo_details_tbl n WHERE t.fk_nop_name=? And t.pay_to_ngo_email=n.ngo_email group BY t.pay_to_ngo_email  "
        ,[nop_name],callback)
     },
     getAllTransactionByAllNopName:function(callback){
      //console.log(ngo_email+nop_name);
      return db.query("SELECT n.*,pay_to_ngo_email,SUM(transaction_amt) As Total_Amt FROM transaction_tbl t,ngo_details_tbl n where t.pay_to_ngo_email=n.ngo_email group BY t.pay_to_ngo_email  "
      ,callback)
   },
     getAllTransactionTotalByNopName:function(callback){
      //console.log(ngo_email+nop_name);
      return db.query("SELECT fk_nop_name As nop_name,SUM(transaction_amt) As Total_Amt FROM `transaction_tbl` group by fk_nop_name  ",callback)
   },
     

    
}
module.exports=Transaction;
