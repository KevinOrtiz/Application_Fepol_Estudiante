let indexObject = require('./controller/controllerIndex');
let contactObject = require('./controller/controllerContactos');
let registrosObject = require('./controller/controllerRegistros');
module.exports = (app)=>{
 //Definimos las directrices del direccionamiento
    app.get('/',indexObject.inicio);
    app.get('/registros',registrosObject.registros);
    app.get('/contactos',contactObject.contactos);
    
};