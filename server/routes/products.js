const express = require("express")

const router = express.Router()

const db = require("../db")




// 获取商品

router.get("/",(req,res)=>{


    db.query(

        "SELECT * FROM products",

        (err,result)=>{


            if(err){

                res.status(500).json(err)

            }else{

                res.json(result)

            }


        }


    )


})





// 新增商品

router.post("/",(req,res)=>{


    console.log("收到的数据：", req.body)



    const {

        name,

        price,

        image,

        description


    } = req.body




    const sql = `

    INSERT INTO products

    (name,price,image,description)

    VALUES(?,?,?,?)

    `



    db.query(

        sql,

        [

            name,

            price,

            image,

            description

        ],


        (err,result)=>{


            if(err){

                res.status(500).json(err)


            }else{


                res.json({

                    message:"商品添加成功",

                    id:result.insertId

                })


            }


        }


    )


})







// 删除商品

router.delete("/:id",(req,res)=>{


    const id=req.params.id



    db.query(

        "DELETE FROM products WHERE id=?",

        [id],


        (err,result)=>{


            if(err){

                res.status(500).json(err)


            }else{


                res.json({

                    message:"删除成功"

                })


            }


        }


    )


})








// 修改商品价格

router.put("/:id",(req,res)=>{


    const id=req.params.id


    const {

        price

    } = req.body




    db.query(

        "UPDATE products SET price=? WHERE id=?",


        [

            price,

            id

        ],


        (err,result)=>{


            if(err){

                res.status(500).json(err)


            }else{


                res.json({

                    message:"修改成功"

                })


            }


        }


    )



})







module.exports = router