const db = require("../../config/db");

  // post
exports.selectName = async(collection_id) => {
    return await db.query("select id, collection_id, photo_url, description from photos where collection_id='"+collection_id+"'");
}

exports.insertPhoto = async(request) => {
   
    let keys = Object.keys(request);
    let ourColumn = ["collection_id","photo_url"];
    let insertKeys = "";
    let insertValues = "";
    


  keys.forEach((key, i) => {
      if (ourColumn.includes(key)){
              insertValues = insertValues +"'"+request[key]+"',"
              insertKeys =insertKeys+""+key+","
      }
  });
  return await db.query("insert into photos ("+insertKeys.substring(0, insertKeys.length -1)+") values ("+insertValues.substring(0, insertValues.length -1)+")");

}



//get
exports.getall = async(collection_id)=>{
    return await db.query('SELECT *from photos');
  }


//delete
exports.deleteall = async (id) => {
    return await db.query('delete from photos where id = $1',[id]);
};

exports.updatePhoto=async(req)=>{
  let keys=Object.keys(req);
  let ourcolums=["collection_id"];
  let updateKeyValues="";

  keys.forEach((key,i)=>{
      if(ourcolums.includes(key)){
          if (updateKeyValues.length !== 0)
              updateKeyValues=updateKeyValues+`,${key}='${req[key]}'`;
          else 
              updateKeyValues=updateKeyValues+` ${key}='${req[key]}'`;

      }
  });
  let querty= await db.query("update photos set "+updateKeyValues+" where collection_id ='"+req.collection_id+"'");
  console.log(querty)
  return querty;
}


