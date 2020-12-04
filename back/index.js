const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer')
const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 1000 })
const { query } = require('express')

const serverData = {
    mongoUrl: 'mongodb://localhost:27017/finalProject',
    serverUrl: 'http://localhost:3000/',
    PORT: 3000
}

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.contentType('application/json')
    next()
})
app.use(cors())

init(serverData)

const user = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        min: 6,
        max: 128,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 512
    }
})

const auction = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    participants: {
        type: [mongoose.Schema.Types.ObjectId],
        default: []
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    defaultPrice: {
        type: Number,
        required: true,
        min: 100
    },
    currentPrice: {
        type: Number,
        required: true
    }
})

async function init(serverData) {
    await mongoose.connect(serverData.mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    
    mongoose.connection.once('open', () => {
        app.listen(serverData.PORT, (err) => {
            if (err) return new Error(`Error in starting server: ${err}`)
            else console.log(`server started on \nPORT: ${serverData.PORT}\nURL: ${serverData.serverUrl}`)
        })

        app.post('/registration', async (req, res) => {
            const data = req.body
            const newUser = new user({
                login: data.login,
                password: data.password
            })
            const result = await newUser.save()
            res.status(200).json(result)
        })

        app.post('/autorization', async (req, res) => {
            const data = req.body
            const queryUser = await user.find({login: data.login}).exec()
            if (!queryUser) res.send(false)
            const result = queryUser.password === data.password
            res.send(result)
        })

        app.post('/auction', async (req, res) => {
            const data = req.body
            const newAuction = new auction({
                title: data.title,
                description: data.description,
                participants: data.participants,
                startTime: data.startTime,
                endTime: data.endTime,
                defaultPrice: data.defaultPrice,
                currentPrice: data.currentPrice
            })
            const result = await newAuction.save()
            res.status(200).json(result)
        })

        app.get('/auction/:id', async (req, res) => {
            const result = await auction.findById(req.params.id).exec()
            res.status(200).json(result)
        })

        app.put('/auction/participants', async (req, res) => {
            const data = req.body
            const result = await auction.updateOne({_id: data._id}, {$push: {participants: data.participants}})
            res.status(200).json(result)
        })

        app.put('/auction/currentPrice', async (req, res) => {
            const data = req.body
            const result = await auction.updateOne({_id: data._id}, {$set: {currentPrice: data.currentPrice}})
            res.status(200).json(result)
        })

        wss.on('connection', async ws => {
            ws.send(JSON.stringify({
                action: 'sendData',
                data: {
                    users: await user.find().exec(),
                    auctions: await auction.find().exec()
                }
            }))
        })
    })
    mongoose.connection.emit('open')
}
