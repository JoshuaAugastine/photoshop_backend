const db = require("../../config/db");

  // post
exports.selectName = async(name) => {
    return await db.query("select id,name,category_id from collections where name='"+name+"'");
}

exports.insertCollection = async(request) => {
   
    let keys = Object.keys(request);
    let ourColumn = ["name"];
    let insertKeys = "";
    let insertValues = "";
    


  keys.forEach((key, i) => {
      if (ourColumn.includes(key)){
              insertValues = insertValues +"'"+request[key]+"',"
              insertKeys =insertKeys+""+key+","
      }
  });
  return await db.query("insert into collections ("+insertKeys.substring(0, insertKeys.length -1)+") values ("+insertValues.substring(0, insertValues.length -1)+")");

}



//get
exports.getall = async(studio_id)=>{
    return await db.query('SELECT *from collections');
  }


//delete
exports.deleteall = async (id) => {
    return await db.query('delete from collections where id = $1',[id]);
};

exports.updateCollection=async(req)=>{
  let keys=Object.keys(req);
  let ourcolums=["name","category_id"];
  let updateKeyValues="";

  keys.forEach((key,i)=>{
      if(ourcolums.includes(key)){
          if (updateKeyValues.length !== 0)
              updateKeyValues=updateKeyValues+`,${key}='${req[key]}'`;
          else 
              updateKeyValues=updateKeyValues+` ${key}='${req[key]}'`;

      }
  });
  let querty= await db.query("update collections set "+updateKeyValues+" where name ='"+req.name+"'");
  console.log(querty)
  return querty;
}
