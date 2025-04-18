//importo express
const express= require('express')
//creo variabile router il cui valore sarà un'istanza di express.router()
const router = express.Router();

//rotta per operazione index
router.get('/', function(req,res){
    res.send('Lista dei post')
});

//rotta per operazione show
router.get('/:id', function (req,res){
    res.send('dettaglio del post' + req.params.id);
});

//rotta per operazione store
router.post('/', function (req,res){
    res.send('Creazione nuovo elemento')
});