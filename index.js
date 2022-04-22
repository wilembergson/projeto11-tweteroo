import express from 'express'

const app = express()
app.use(express.json())

let user = {}
const users = []

app.post("/sign-up", (req, res)=>{
    user = { username: req.body.username, avatar: req.body.avatar }
    users.push(user)
    res.send("OK")
})

app.listen(5000, ()=>{
    console.log("Running...")
})