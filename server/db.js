const mysql = require("mysql2")



const db = mysql.createConnection({

    host:"localhost",

    user:"root",

    password:"Zr328516@DD",

    database:"mini_store",

    charset:"utf8mb4"

})




// 连接

db.connect((err)=>{


    if(err){

        console.log("MySQL连接失败")

        console.log(err)

    }else{


        console.log("MySQL连接成功")


        // 设置连接字符集

        db.query(

            "SET NAMES utf8mb4",

            (err)=>{


                if(err){

                    console.log("字符集设置失败")

                }else{

                    console.log("utf8mb4设置成功")

                }


            }


        )


    }


})




module.exports=db