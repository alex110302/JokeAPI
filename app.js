const express = require('express')
const app = express()
const port = 3000
app.listen(port, () => console.log(`Listening On Port:${port}`))

const { request } = require('http')
const root = require('path').join(__dirname, 'public') //is the root file for the website

app.use(express.json())
app.use(express.static('public'))

//I used chat gpt for this and honestly kinda funny I cant lie, who told this guy jokes
//data
const jokes = [
    {
        "id": 1,
        "joke": "Why don't programmers like nature?",
        "punchline": "It has too many bugs."
    },
    {
        "id": 2,
        "joke": "How many programmers does it take to change a light bulb?",
        "punchline": "None. It's a hardware problem."
    },
    {
        "id": 3,
        "joke": "Why do Java developers wear glasses?",
        "punchline": "Because they don’t C#."
    },
    {
        "id": 4,
        "joke": "Why did the programmer quit his job?",
        "punchline": "Because he didn't get arrays."
    },
    {
        "id": 5,
        "joke": "Why do programmers prefer dark mode?",
        "punchline": "Because light attracts bugs!"
    }
]

//end points
app.get('/', (request, response) => response.sendFile('index.html', { root }))

app.get('/api/v1/joke/:id', (request ,response) => {
    const { id } = request.params

    if (jokes.find(j => j.id.toString() === id.toString())) response.send(jokes.find(j => j.id.toString() === id.toString()))
    else response.send({ error: { message: `could not find joke with id:${id}` } })
})

app.get('/api/v1/random-joke', (request, response) => response.send(jokes[Math.floor(Math.random() * 5)]))