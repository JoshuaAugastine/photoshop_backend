const db = require("../../config/db");

  // post
exports.selectName = async(location) => {
    return await db.query("select id,name,location,state,city,address from studios where location='"+location+"'");
}

exports.insertStudio = async(request) => {
   
    let keys = Object.keys(request);
    let ourColumn = ["name", "location"];
    let insertKeys = "";
    let insertValues = "";
    


  keys.forEach((key, i) => {
      if (ourColumn.includes(key)){
              insertValues = insertValues +"'"+request[key]+"',"
              insertKeys =insertKeys+""+key+","
      }
  });
  return await db.query("insert into studios ("+insertKeys.substring(0, insertKeys.length -1)+") values ("+insertValues.substring(0, insertValues.length -1)+")");

}



//get
exports.getall = async(studio_id)=>{
    return await db.query('SELECT *from studios');
  }


//delete
exports.deleteall = async (id) => {
    return await db.query('delete from studios where id = $1',[id]);
};

exports.updateStudio=async(req)=>{
  let keys=Object.keys(req);
  let ourcolums=["name","location"];
  let updateKeyValues="";

  keys.forEach((key,i)=>{
      if(ourcolums.includes(key)){
          if (updateKeyValues.length !== 0)
              updateKeyValues=updateKeyValues+`,${key}='${req[key]}'`;
          else 
              updateKeyValues=updateKeyValues+` ${key}='${req[key]}'`;

      }
  });
  let querty= await db.query("update studios set "+updateKeyValues+" where location ='"+req.location+"'");
  console.log(querty)
  return querty;
}
