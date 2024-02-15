const db = require("../../config/db");

  // post
exports.selectName = async(status) => {
    return await db.query("select id,user_id,status,message from book_appointment where status='"+status+"'");
}

exports.insertAppointment = async(request) => {
   
    let keys = Object.keys(request);
    let ourColumn = ["status"];
    let insertKeys = "";
    let insertValues = "";
    


  keys.forEach((key, i) => {
      if (ourColumn.includes(key)){
              insertValues = insertValues +"'"+request[key]+"',"
              insertKeys =insertKeys+""+key+","
      }
  });
  return await db.query("insert into book_appointment ("+insertKeys.substring(0, insertKeys.length -1)+") values ("+insertValues.substring(0, insertValues.length -1)+")");

}



//get
exports.getall = async(studio_id)=>{
    return await db.query('SELECT *from book_appointment');
  }


//delete
exports.deleteall = async (id) => {
    return await db.query('delete from book_appointment where id = $1',[id]);
};

exports.updateAppointment=async(req)=>{
  let keys=Object.keys(req);
  let ourcolums=["status","message"];
  let updateKeyValues="";

  keys.forEach((key,i)=>{
      if(ourcolums.includes(key)){
          if (updateKeyValues.length !== 0)
              updateKeyValues=updateKeyValues+`,${key}='${req[key]}'`;
          else 
              updateKeyValues=updateKeyValues+` ${key}='${req[key]}'`;

      }
  });
  let querty= await db.query("update book_appointment set "+updateKeyValues+" where status ='"+req.status+"'");
  console.log(querty)
  return querty;
}
