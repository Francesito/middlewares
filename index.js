const express = require('express');
require("dotenv").config();
const app =  express();
const ruta = require("./router/rutas")

app.use(ruta)

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log("Servidor en http://localhost:"+port)
});
