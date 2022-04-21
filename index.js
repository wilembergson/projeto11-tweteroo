import express from 'express'

const app = express()

app.post("/sign-up", (req, res)=>{
    res.send("testando post")
})

app.listen(5000)