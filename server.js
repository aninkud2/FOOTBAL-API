const port =8881
import express from "express"
import route from "./router/router.js"
const app=express()
app.use(express.json())
app.use("/api",route);
app.listen(port,()=>{
    console.log("listenining on port:"+port)
})