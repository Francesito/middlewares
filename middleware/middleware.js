// middleware obetener fecha
var fecha = (req,res,next)=>{
    const fechaActual = new Date();
    console.log(fechaActual);
    next();
};

var mensaje = (req,res,next)=>{
    console.log("Bienvenido a mi Sitio Web");
    next();
};

module.exports={
    fecha,
    mensaje
};