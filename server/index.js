import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import env  from 'dotenv';
import  {Configuration, OpenAIApi} from 'openai'


const app = express()

env.config()

app.use(cors())
app.use(bodyParser.json())

const configuration = new Configuration({
    organization: "org-Oq8C8hKQFiOwrQJM4UpFWGLW",
    apiKey: process.env.APIKEY 
})

const openai = new OpenAIApi(configuration)

app.listen("3080", ()=> console.log("Running on port 3080"))

app.get("/", (req, res) => {
    res.send("Responding")
})