const app = require('./app');		// Acessando o arquivo .app.js


require('dotenv').config()		// Carregando o modulo dotenv, separar HOST e PORT do codigo fonte! .env
const HOST = process.env.HOST;
const PORT = process.env.PORT;

app.listen(PORT, HOST, () => {
   console.clear();
   console.log('[]=== Framework Express 5.1.0 ===[]\n');
   console.log('(online) Servidor, para derrubar: Ctrl + C\n')
   console.log(`=> http://${HOST}:${PORT}\n`);
});
