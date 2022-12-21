const express = require("express");
const router = express.Router();

const {
    getCompras,
    getComprasById,
    realizarCompra, 
    borrarCompra  } = require("../controllers/compras.controllers");


//endpoint de producto en especifico
router.get("/:ID", getComprasById);
    

//endpoint de query a todos los productos
router.get("/", getCompras);
 
//crear productos
router.post("/", realizarCompra);

//actualizar producto
//router.patch("/:ID_PRODUCTO", actualizarProducto);

// borrar producto
router.delete("/:ID", borrarCompra);

module.exports = router;