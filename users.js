const db = require("../../config/db");

var admin = require("firebase-admin");

var serviceAccount = require("../../config/firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

  // post
exports.selectName = async(phone) => {
    return await db.query("select id,name,phone,uid from users where phone='"+phone+"'");
}

exports.insertUser = async(request) => {
   
    let keys = Object.keys(request);
    let ourColumn = ["name", "phone"];
    let insertKeys = "";
    let insertValues = "";
    


  keys.forEach((key, i) => {
      if (ourColumn.includes(key)){
              insertValues = insertValues +"'"+request[key]+"',"
              insertKeys =insertKeys+""+key+","
      }
  });
  return await db.query("insert into users ("+insertKeys.substring(0, insertKeys.length -1)+") values ("+insertValues.substring(0, insertValues.length -1)+")");

}



//get
exports.getall = async(user_id)=>{
    return await db.query('SELECT *from users');
  }


//delete
exports.deleteall = async (id) => {
    return await db.query('delete from users where id = $1',[id]);
};

exports.updateUser=async(req)=>{
  let keys=Object.keys(req);
  let ourcolums=["name","phone"];
  let updateKeyValues="";

  keys.forEach((key,i)=>{
      if(ourcolums.includes(key)){
          if (updateKeyValues.length !== 0)
              updateKeyValues=updateKeyValues+`,${key}='${req[key]}'`;
          else 
              updateKeyValues=updateKeyValues+` ${key}='${req[key]}'`;

      }
  });
  let querty= await db.query("update users set "+updateKeyValues+" where phone ='"+req.phone+"'");
  console.log(querty)
  return querty;
}