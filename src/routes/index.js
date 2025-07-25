const path = require('path');			// Carregando o modulo path(caminho).
const bodyParser = require('body-parser');	// Carregando o modulo para reconhecer todo o corpo da requisicao.
const express = require('express');		// Carregando o Express 5.1.0
const router = express.Router();		// Estanciando o modulo do Express 5.1.0

// Configurando o middleware.
const simpleMiddleware = (req, res, next) => {
   const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress; 	// Tipo do cabeçalho.
   console.log(`[+]requisição:\t\t${ip}`);
   next();									// avança para o proximo.
}
router.use(simpleMiddleware);						        // executar middleware dentro da rota.


router.use(bodyParser.urlencoded({ extended: true }));	        	// pegar o corpo da requisicao.
router.use(express.static(path.join(__dirname, '../public')));   	// Servir arquivos do caminho public.
router.get("/", (req, res) => {
   res.statusCode = 200;  						// codigo de sucesso.
   res.setHeader('Content-Type','text/html');  				// Tipo de cabeçalho.
   res.sendFile(path.join(__dirname, '../views', 'home.html'))  	// Abrir o caminho aonde contem a pasta views, abrir o html
});


module.exports = router; // Importar para usar em o app.js
