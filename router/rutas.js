const express = require('express');
const router = express.Router();
var middleware = require("../middleware/middleware");

router.get("/",middleware.fecha,middleware.mensaje,(req,res)=>{
    res.send("hola estas en raiz");
});

router.get("/home",middleware.fecha,middleware.mensaje,(req,res)=>{
    res.send("Estas en home");
});


module.exports = router;