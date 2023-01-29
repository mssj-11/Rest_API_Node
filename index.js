const express = require('express'); //  Añadiendo la libreria EXPRESS
const app = express();


//  APP hara uso de todas las librerias JSON
app.use(express.json());

//  Base de Datos local
const estudiantes = [
    {id: 1, nombre: 'Mike', edad: 22, inscrito: true},
    {id: 2, nombre: 'Maria', edad: 25, inscrito: false},
    {id: 3, nombre: 'Saul', edad: 19, inscrito: true},
    {id: 4, nombre: 'Luis', edad: 27, inscrito: false},
    {id: 5, nombre: 'Daniela', edad: 20, inscrito: true},
];



//  Request de la API
/********* GET *********/
app.get('/', (req, res) => {
    //  Si ingresan correctamente a la URL les enviara el sig. mensaje
    res.send('Node js API');
});

app.get('/api/estudiantes', (req, res) => {
    //  Si ingresan correctamente se mostrara la BD 
    res.send(estudiantes);
});

//  Busqueda de un estudiantes mediante su ID
app.get('/api/estudiantes/:id', (req, res) => {
    //  Del arreglo de REQUEST se buscara a un estudiante por el ID
    const estudiante = estudiantes.find(c => c.id === parseInt(req.params.id));

    //  Si no hubo exito en la busqueda
    if(!estudiante) return res.status(404).send('Estudiante no encontrado');
    //  Si hubo exito en la busqueda
    else res.send(estudiante);  //  Se mostrara
});


/********* POST *********/
//  Metodo - Agregar mas estudiantes
app.post('/api/estudiantes', (req, res) => {
    const estudiante = {
        id: estudiantes.length + 1,
        nombre: req.body.nombre,
        edad: parseInt(req.body.edad),
        inscrito: (req.body.inscrito === 'true')
    }
    //  Añadiendo el estudiante
    estudiantes.push(estudiante);
    //  Si se a guardado con exito se debera agregar a la BD y se mostrara
    res.send(estudiante);
});

//  Metodo - Eliminar estudiantes mediante su ID
app.delete('/api/estudiantes/:id', (req, res) => {
    //  Busqueda por el DATO agregado en el parametro ID
    const estudiante = estudiantes.find(c => c.id === parseInt(req.params.id));
    //  Si no se encuentra
    if(!estudiante) return res.status(404).send('Estudiante no encontrado');
    
    //  Si se encuentra, sera eliminado
    const indice = estudiantes.indexOf(estudiante); // Indice del estudiante encontrado
    estudiantes.splice(indice, 1);    //  Sera borrado
    res.send(estudiante);  //  Mostrando el estudiante eliminado
});



//  Configuracion del PUERTO
const puerto = process.env.port || 80;
app.listen(puerto, () => console.log(`Corriendo en el puerto ${puerto} ...`));