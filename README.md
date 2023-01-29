#   REST API con Nodejs


##  Iniciando la API: `node index.js`
##  Métodos GET
### #1 Ingresando a la API
Al ingresar a la dirección **http://localhost:80** nos deberá mostrar el mensaje agregado **Node js API**.

### #2 Mostrar la BD de la API
Al ingresar a la dirección **http://localhost/api/estudiantes** deberá de mostrar la base de datos en formato JSON de la siguiente manera:
```json
[{"id":1,"nombre":"Mike","edad":22,"inscrito":true},{"id":2,"nombre":"Maria","edad":25,"inscrito":false},{"id":3,"nombre":"Saul","edad":19,"inscrito":true},{"id":4,"nombre":"Luis","edad":27,"inscrito":false},{"id":5,"nombre":"Daniela","edad":20,"inscrito":true}]
```

### #3 Búsqueda mediante ID
Ejemplo: **http://localhost/api/estudiantes/1** y deberá de imprimir la información de ese ID
```json
{"id":1,"nombre":"Mike","edad":22,"inscrito":true}
```

### #4 Ingresando in ID que aun no se encuentra 
Usando la siguiente dirección: **http://localhost/api/estudiantes/6** , deberá de mostrar el siguiente mensaje: 
`Estudiante no encontrado`

##  Métodos POST mediante POSTMAN



##  ---------------------------------------------------------------------------

## Proceso de creación

### Creación de los componentes: `npm init`
Configuración para este proyecto básico.
En **nombre** se asigno **nodeapi** y en los demás no hubo configuración y solo es dar un ENTER.

### Instalación de las dependencias: 
####    Express: `npm install express`




