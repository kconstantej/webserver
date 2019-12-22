//introduccion a express
//se crea un cosntante express que requiere a la libreia express
const express = require('express');
//se crea un cosntante app que llama a express
const app = express();
//se crea un cosntante hbs que requiere a la libreia hbs
const hbs = require('hbs');
//se crea un cosntante prt que sera igual por el   puerto en el que se va a guardar
const port =process.env.PORT || 3000;

//helpers
require('./hbs/helpers');

//el dirname me dice donde esta corriendo el server.js 
app.use(express.static(__dirname + '/public'));

//Express HBS engine

//registro de parciales
hbs.registerPartials(__dirname + '/views/parciales');



app.set('view engine','hbs');




//se crea un callback como una peticion get
app.get('/', function (req, res) {
//     let salida = {
//         nombre : 'Ken',
//         edad: 21,
//         url : req.url
//     }
//   res.send(salida);
    //se manda a renderizar el home y se envia un vector de objetos con el nombre y el anio
    res.render('home',{
        nombre: 'kEn cOnStante',
        anio: new Date().getFullYear()
    });
});

 //se crea un callback como una peticion get
app.get('/about',(req, res)=>{
    //se manda a renderizar el about
    res.render('about');
});

//el puerto puerto por donde se va a escuchar
app.listen(port,()=>{
    console.log(`escuchando peticiones en el puerto ${port}`);
});
