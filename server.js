let express= require ('express')
let multer = require('multer')

let app = express()

app.use(express.static('.'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const porta = 8081

let storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './upload')
    },
    filename: function(req, file, callback){
        callback(null, `${file.fieldname}-${Date.now()}`)
    }
})

let upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err =>{
        if(err){
            return res.send('Ocorreu um erro')
        }
        res.send('Concluído com Sucesso!')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
    ...req.body,
    id: 1
    })
})

app.get('/parouimpar/:numero', (req, res) => {
    res.send(req.params.numero % 2 == 0 ? 'par':'impar')
})


app.listen(porta, () => console.log('executando..'))