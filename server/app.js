const express = require("express")

const cors = require("cors")


// 引入数据库

const db = require("./db")

const productRouter = require("./routes/products")

const app = express()



// 中间件

app.use(cors())

app.use(express.json())

app.use(
    "/api/products",
    productRouter
)

// 测试接口

app.get("/",(req,res)=>{


    res.send(
        "Mini Store API Running"
    )


})




// 测试数据库接口

app.get("/test-db",(req,res)=>{


    db.query(

        "SELECT * FROM products",

        (err,result)=>{


            if(err){

                res.status(500)
                .json(err)


            }else{


                res.json(result)


            }


        }


    )


})



// 启动服务器

app.listen(3000,()=>{


    console.log(
        "Server running at http://localhost:3000"
    )


})