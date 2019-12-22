//crear un web server
//se  cra una constante http que requiere a la libreria http
const http = require('http');
//se crea unn callback
http.createServer((req,res)=>{
    //resp.writeHead con un 200 que nos indiaca que todo anda bien y con un content-Type = applicacion/json
    res.writeHead(200,{'Content-Type' : 'applicacion/json'});
    //se crea un vector de objetos denominado salida que contiene el nombre la edad y la url
    let salida = {
        nombre : 'Ken',
        edad: 21,
        url : req.url
    }
    //res.write se escribira la salida transformada en json
    res.write(JSON.stringify(salida));
    //res.write("Hola Mundo, desde nodeJS!");
    //res.end ayuda a finalizar la coneccion
    res.end();
}).listen(8085);//se escucha en el puerto 8085

console.log("Escuchando en el puerto 8085");