import * as typeorm from "typeorm";

declare module 'egg' {

  // extend app
  interface Application {
    connection: typeorm.Connection;
    
  }

  // extend context
  interface Context {
     connection: typeorm.Connection;
  }

  // extend your config
  interface EggAppConfig {
    
  }

}