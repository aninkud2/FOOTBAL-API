
import { getallplayer ,getoneplayer,update,deleteall } from "../controller/controller.js"
import express from "express"
const route=express.Router()
route.get("/all",getallplayer)
route.get("/one/:id",getoneplayer)
route.patch("/patch/:id",update)
route.delete("/delete/:id",deleteall)

export default route 