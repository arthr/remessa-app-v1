const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongo = require('mongoose');
const db = mongo.connect(
    'mongodb://localhost:27017/remessa-db',
    {
        useNewUrlParser: true
    },
    (err, res) => {
        if (err) { console.log(err) }
        else { console.log(`Connected to ${db}`, `+ ${res}`) }
    })

const app = express();
app.use(bodyParser());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const Schema = mongo.Schema;

const UsersSchema = new Schema(
    {
        nome: { type: String },
        login: { type: String },
        senha: { type: String },
        bloqueado: { type: Boolean },
        created_at: { type: Date },
        updated_at: { type: Date },
        deleted_at: { type: Date }
    },
    { versionKey: false }
);

const model = mongo.model('usuario', UsersSchema, 'usuario');

app.post('/api/users/save', (req, res) => {
    const mod = new model(req.body);
    const exists = model.find({ login: req.body.login });
    console.log(exists);
    if (req.body.mode == 'save') {
        mod.save((err, data) => {
            if (err) { res.send(err) }
            else { res.send({ data: 'Record has been inserted!' }) }
        })
    } else {
        model.findByIdAndUpdate(
            req.body.id,
            { name: req.body.name, address: req.body.address },
            (err, data) => {
                if (err) { res.send(err) }
                else { res.send({ data: 'Record has been updated!' }) }
            }
        )
    }
})

app.get('/api/users', (req, res) => {
    model.find({}, (err, data) => {
        if (err) { res.send(err) }
        else { res.send(data) }
    })
})

app.listen(8000, () => {
    console.log('Listening on port 8000...')
})