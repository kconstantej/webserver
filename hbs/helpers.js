//se crea un constante hbs que requiere de la  libreria hbs
const hbs = require('hbs');
//los helpers son metodos que se pueden llamar desde las plantillas html de tipo hbs 
//Helpers se crea un Helper llamado getAnio
hbs.registerHelper('getAnio',()=>{
    //se retorna el año
    return new Date().getFullYear();
});

//se crea otro helper llamado capitalizar que recive como parametro un texto
hbs.registerHelper('capitalizar',(texto) =>{
    //se crea una una variable de tipo let que guarda  el texto spliteado separado por los espacios
    let palabras = texto.split(' ');
    //se crea un forEach que es un for  que recorre la palabra 
    palabras.forEach((palabra,idx)=>{
        //guarda en palabra en la posicion index, el primer caracter se trasforma a mayuscula y el resto de la palabra en minusculas
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    //retorna la palabra.join que sera la palabra unida y separada por espacios
    return palabras.join(' ');
});
