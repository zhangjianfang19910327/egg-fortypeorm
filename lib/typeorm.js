'use strict';
const assert = require('assert');
const path = require('path');
const { createConnection } = require('typeorm');


let count = 0;

module.exports = async (app) => {
  
  await createOneClient(app.config.typeorm,app);
};

async function createOneClient(config, app) {
  
  const connectConfig = {
    type: 'mysql',
    host: config.host,
    port: config.port,
    username: config.username,
    password: config.password,
    database: config.database,
    synchronize: !!config.synchronize,
    logging: true,
    entities:config.entities
  };
  
  

  
  if (config.entities.length > 0) {
    connectConfig.entities = config.entities;
  }

  // if (config.subscribers) {
  //   connectConfig.subscribers = config.subscribers;
  // }
  let context = app.context;
  
  await createConnection(connectConfig).then(async connection=>{
    
    Object.defineProperty(app, "connection", {
      value: connection,
      writable: false,
      configurable: true,
    });
    Object.defineProperty(context, "connection", {
      value: connection,
      writable: false,
      configurable: true,
    });
  });
  
  app.beforeStart(async () => {
    
    const rows = await app.connection.manager.query('select 1 as column1;');
    const index = count++;
    app.coreLogger.info(`[egg-typeorm] instance[${index}] status OK, rds currentTime: ${rows[0].currentTime}`);
    
  });
  
  
}