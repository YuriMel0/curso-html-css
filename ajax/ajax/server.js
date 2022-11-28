const badyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(express.urlencoded({ extended: true}))
app.use(badyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, '.')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.send('Ocorreu um erro...')
        }

        res.send('Concluido com sucesso')
    })
})

app.listen(8080, () => console.log('http://localhost:8080'))