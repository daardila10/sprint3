const  {product_model} = require('../models');

getAllProducts = (req, res) => {
    product_model.find().exec((error, products) =>{
        if(error) return res.status(500).json({error:true, mensaje:error})
        res.json({products});
    })
}

