const users=require("../model/book_appointment");
// post user deails
exports.insertAppointmentInfo = async(req,res)=>{
    var check =await users.selectName(req.body.status);

        if (check && check.rowCount===0){
            var query =await users.insertAppointment(req.body);
            var result = await users.selectName(req.body.status);
            res.json({status: "TRUE", result: result.rows});
        }
        else{
            res.json({status: "FALSE", message:"Record already exist"});
        }
}
//get all details 
exports.allAppointmentId = async(req,res)=>{
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

    exports.updateAppointment=async(req,res)=>{
      var check=await users.selectName(req.body.status);
  
      if(check && check.rowCount===0){
          res.json({status:"FALSE",message:"user not present"});
      }
      else{
          var query= await users.updateAppointment(req.body);
          console.log(query);
          var result= await users.selectName(req.body);
          res.json({status:"updated",result:result.rows})
      }
      
  }
