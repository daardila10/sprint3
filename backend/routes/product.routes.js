const router= require('express').Router();
const{product_controller}= require('../controllers');


router.get('/list', product.product_controller.getAllProducts);

module.exports= router;
