const express= require('express');
 require ('dotenv').config();

 // Creamos el servidor
 const app= express();

 // Exponiemos el backend

 const cors = require('cors');
 app.use(cors());

 // Captuar el cuerpo de las peticiones


 app.use(express.urlencoded({extended : false}));
 app.use(express.json());

 // Configurar la conexión con el mongo atlas 
 const mongoose = require('mongoose');
 const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.qnbuy.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority` 
 
 const option = {useNewUrlParser: true, useUnifiedTopology: true};

 mongoose.connect(uri, option)
 .then(()=> console.log("Base de datos conectada correctamente"))
 .catch((e)=> console.log("Error en la conexión: "+e));
 
 // Importemos  las rutas 
 const {product_routes} = require('./routes');
 app.use('/api/v1/product', product_routes);

 // Activar el servidor 

 app.listen(process.env.PORT, () => {console.log("Estoy listo para ayudarte " + process.env.PORT)});