const users=require("../model/users");
// post user deails
exports.insertUserInfo = async(req,res)=>{
    var check =await users.selectName(req.body.phone);

        if (check && check.rowCount===0){
            var query =await users.insertUser(req.body);
            var result = await users.selectName(req.body.phone);
            res.json({status: "TRUE", result: result.rows});
        }
        else{
            res.json({status: "FALSE", message:"Record already exist"});
        }
}
//get all details 
exports.allUserId = async(req,res)=>{
    var result = await users.getall(req.query);
   if(result && result !==0){
          res.status(200).json({status: true, result:result.rows});
   }
      else{
        console.log(result);
          res.status(400).json({status: false, message: "Error"});
      } 
  }


  exports.deleteusers= async (req, res) => {
      try {
        var result = await users.deleteall(req.query.id);
        res.status(200).send(`Data deleted with ID: ${req.query.id}`);
      } catch (err) {
        res.status(500).send(err.message);
      }
    };

    exports.updateUser=async(req,res)=>{
      var check=await users.selectName(req.body.phone);
  
      if(check && check.rowCount===0){
          res.json({status:"FALSE",message:"user not present"});
      }
      else{
          var query= await users.updateUser(req.body);
          console.log(query);
          var result= await users.selectName(req.body);
          res.json({status:"updated",result:result.rows})
      }
      
  }
