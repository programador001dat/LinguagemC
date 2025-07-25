const app = require('./config/express');	 // Acessado a pasta config, e o arquivo express.js
const routes = require('./routes'); 		 // Acessando a pasta routes, e o arquivo index.js

// ROTA RAIZ, vindo da pasta routes
app.use('/', routes);


module.exports = app; // Importar para server.js.

