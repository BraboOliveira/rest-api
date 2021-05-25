const Atendimento = require('../models/atendimentos')
module.exports = app => {
    app.get('/atendimentos', (req, res)=> res.send('Você está na rota de atendimentos e está realizando um get!'))

    app.post('/atendimentos', (req,res) => 
    {
        console.log(req.body)
        const atendimento = req.body

        Atendimento.adiciona(atendimento)
        res.send('Você está na rota de atendimentos e está realizando um post')
    })
}
