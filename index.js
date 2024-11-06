const express = require('express')
const path = require('path')
/*
    + methods for routing HTTP requests (metodos para "enrutar" peticiones HTTP)
    + configuring middleware (configurar middleware: modulariza logica de la app )
    + rendering HTML views (renderizar vistas HTML) / ejs por defecto
    + registering a template engine (registrar un motor de plantillas)
    + and modifying application settings (modificar ajustes de la aplicacion)
*/
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const port = 3000

// definicion de ruta.
app.get("/", function(req, res) {
    console.log("Renderizando saludos :)")
    var nombre = "Valeria"
    res.render("index" , { nombre })
})

app.get("/adios", function(req, res) {
    console.log("Renderizando despedida :(")
    res.render("adios")
})

app.listen(port, function(req, res) {
    console.log(`Aplicacion escucha al puerto ${port}`)
})