const mongoose = require("mongoose");
const dbConect = () =>{
    const DB_URI =  process.env.DB_URI;
    mongoose.connect(
        DB_URI, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },).then((res)=>{
        console.log("OK CONEXION");
        }).catch(error =>{
        console.log("CONEXION FALLIDA")
    });

};
 
module.exports = dbConect;