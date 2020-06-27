let express= require ('express')
let bodyParser = require('body-parser')
let app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json)


app.listen(8080, () => console.log('executando..'))