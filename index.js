import express from 'express'

const app = express()
app.use(express.json())

let user = {}
const users = []
const tweets = []

//FAZER LOGIN
app.post("/sign-up", (req, res)=>{
    user = { 
        username: req.body.username,
        avatar: req.body.avatar
    }
    if(user.username === '' || user.avatar === ''){
        res.sendStatus(400)
    }else{
        users.push(user)
        res.status(201).send("OK")
    }
})

//ENVIAR UM TWEET
app.post("/tweets", (req, res)=>{
    if(req.body.username === '' || req.body.tweet === ''){
        res.sendStatus(400)
    }else{
        const tweet = {
            username: req.body.username,
            avatar: user.avatar,
            tweet: req.body.tweet
        }
        tweets.push(tweet)
        res.status(201).send("OK")
    }
})

//OBTER OS 10 ULTIMOS TWEETS
app.get("/tweets", (req, res)=>{
    const lastTweets = []
    let limit = 10
    const copyTweets = [...tweets]
    copyTweets.reverse()

    if(copyTweets.length < 10){
        limit = copyTweets.length
    }

    for(let i=0; i<limit; i++){
        lastTweets.push(copyTweets[i])
    }
    
    res.send(lastTweets)
})

app.listen(5000, ()=>{
    console.log("Running...")
})