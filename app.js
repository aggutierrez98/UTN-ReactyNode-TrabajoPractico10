"use strict"
var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded());

app.post("/respuesta", function(req, res) {
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let edad = req.body.edad;
    let numero = req.body.numero;
    let nacimiento = req.body.nacimiento;
    let residencia = req.body.residencia;
    let html = `<link rel="stylesheet" href="style.css" />
    <div class="contenido">
        <h1>Resultado del formulario ingresado: </h1>
        <div class="tabla">
            <table>
                <tr>
                    <th>Nombre</th>
                    <td>${nombre}</td>
                </tr>
                <tr>
                    <th>Apellido</th>
                    <td>${apellido}</td>
                </tr>
                <tr>
                    <th>Edad</th>
                    <td>${edad}</td>
                </tr>
                <tr>
                    <th>Numero de telefono</th>
                    <td>${numero}</td>
                </tr>
                <tr>
                    <th>Pais de nacimiento</th>
                    <td>${nacimiento}</td>
                </tr>
                <tr>
                    <th>Pais de residencia</th>
                    <td>${residencia}</td>
                </tr>
            </table>
        </div>
        <a href="/index.html">Volver a enviar formulario</a>
    </div>`
    res.send(html);
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});