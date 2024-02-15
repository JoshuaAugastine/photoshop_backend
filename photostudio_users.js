const db = require("../../config/db");

  // post
exports.selectName = async(studio_id) => {
    return await db.query("select id,user_id,studio_id from photostudio_users where studio_id='"+studio_id+"'");
}

exports.insertPhotostudioInfo = async(request) => {
   
    let keys = Object.keys(request);
    let ourColumn = ["studio_id"];
    let insertKeys = "";
    let insertValues = "";
    


  keys.forEach((key, i) => {
      if (ourColumn.includes(key)){
              insertValues = insertValues +"'"+request[key]+"',"
              insertKeys =insertKeys+""+key+","
      }
  });
  return await db.query("insert into photostudio_users ("+insertKeys.substring(0, insertKeys.length -1)+") values ("+insertValues.substring(0, insertValues.length -1)+")");

}



//get
exports.getall = async(studio_id)=>{
    return await db.query('SELECT *from photostudio_users');
  }


//delete
exports.deleteall = async (id) => {
    return await db.query('delete from photostudio_users where id = $1',[id]);
};

exports.updatePhotostudio=async(req)=>{
  let keys=Object.keys(req);
  let ourcolums=["studio_id"];
  let updateKeyValues="";

  keys.forEach((key,i)=>{
      if(ourcolums.includes(key)){
          if (updateKeyValues.length !== 0)
              updateKeyValues=updateKeyValues+`,${key}='${req[key]}'`;
          else 
              updateKeyValues=updateKeyValues+` ${key}='${req[key]}'`;

      }
  });
  let querty= await db.query("update photostudio_users set "+updateKeyValues+" where studio_id ='"+req.studio_id+"'");
  console.log(querty)
  return querty;
}
