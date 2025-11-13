const express = require('express')
const app = express()
let morgan = require('morgan')
const {token} = require("morgan");


morgan.token('body', req => JSON.stringify(req.body))
app.use(express.json())
app.use(morgan(':method :url :date :body'))

app.get("/", (req,res) => {
    res.json(data)
})

app.get("/api/person/:id", (req, res) => {
    const id = req.params.id
    const person = data.find(item => item.id === id)
    if(person){
        res.json(person)
    }
    else{
        res.status(404).end()
    }
})

app.delete("/api/person/:id", (req,res) => {
    const body = req.params.id
    data = data.filter(item => item.id !== body)

    res.status(204).end()
})


app.post("/api/person", (req, res) => {
    const body = req.body

    if(!body.content){
        return res.status(404).json({
            error : "content missing"
        })
    }

    const person = {
        content:body.content,
        important : body.important || false,
        id: Math.floor(Math.random() * 1000)
    }

    data.push(person)
    res.json(person)

})

const PORT = 3001
app.listen(PORT,() => console.log("Server Listening"))

let data = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]