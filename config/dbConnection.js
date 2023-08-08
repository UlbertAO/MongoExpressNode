const mongoose = require('mongoose');

const connect_db = async ()=>{
  try{
    const connect = await mongoose.connect(process.env['CONNECTION_STRING']);
    console.log("DB connected : ", connect.connection.host, connect.connection.name);
  }catch(err){
    console.log("ERROR in dbConnection:\n ",err);
    process.exit(1);
  }
}

module.exports = connect_db;