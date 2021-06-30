const express = require ('express');
require('dotenv').config();
const cors = require('cors');
const {dbConnection} = require('./database/config');

   // crear el servidor de express

   const app = express();

   // Configurar CORS
   app.use(cors());

   // Base de datos
   dbConnection();  
 

 //rutas

 app.get('/', (req, res) => {

        res.json({
            ok:true,
            msg: 'hola Mundo'
        })
 });
 //mean_user

 //Tnk5QDA53kW1xhKk

app.listen(process.env.PORT, () => {

    console.log ('servidor corriendo en puerto '+ process.env.PORT);
})