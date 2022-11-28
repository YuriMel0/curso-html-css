const badyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(express.urlencoded({ extended: true}))
app.use(badyParser.json())

app.listen(8080, () => console.log('http://localhost:8080'))