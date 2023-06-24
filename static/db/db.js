const MongoClient = require('mongodb').MongoClient;

export default {
  // ... outras configurações do Nuxt.js ...

  serverMiddleware: [
    async (req, res, next) => {
      try {
        const url = 'mongodb://localhost:27017';
        const dbName = 'db_mongo_listatarefa';

        const client = await MongoClient.connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        const db = client.db(dbName);

        // Adicione o objeto `db` ao contexto da aplicação
        req.$db = db;

        // Continue o fluxo de middleware
        next();
      } catch (error) {
        console.error('Erro ao estabelecer conexão com o banco de dados:', error);
        next(error);
      }
    },
  ],
};
