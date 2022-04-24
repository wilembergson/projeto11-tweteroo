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
    users.push(user)
    res.send("OK")
})

//ENVIAR UM TWEET
app.post("/tweets", (req, res)=>{
    const tweet = {
        username: req.body.username,
        avatar: req.body.avatar,
        tweet: req.body.tweet
    }
    tweets.push(tweet)
    res.send("OK")
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