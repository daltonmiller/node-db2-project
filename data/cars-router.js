const express = require('express')
const knex = require('knex')
const db = require("./config")

const router = express.Router()

router.get("/", async (req,res,next)=>{
    try{
       const cars = await db.select("*").from("cars")
       res.json(cars)

    }catch(err){
next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try{
        const{id} = req.params
        const car = await db("cars").where({id}).first()
        res.status(200).json(car)
    }catch(err){
        next(err)
    }
})

// router.post("/", async (req, res, next) => {
//     try {
//         const [id] = await db("cars").insert(req.body)
//         const newCar = await db("cars").where({ id }).first()
//         res.status(201).json(newCar)
//     } catch(error) {
//         next(error)
//     }
// })

router.post("/", (req, res) => {
    const carData = req.body

    db("cars")
    .insert(carData)
    .returning("id")
    .then(ids => {
        res.status(200).json({data: ids})
    })
    .catch(error => {
        res.status(500).json({message: error.message})
    })
})

router.put("/:id", async (req,res, next) => {
    try{
        const {id} = req.params
        const updatedCar = await
        db("cars").where({id}).update(req.body)
        res.json(updatedCar)
    }catch(err){
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    const {id} = req.params
    const car = await db("cars").where({id}).del()
    res.json(car)
})



module.exports = router

