const winston = require('winston');

const logger = winston.createLogger({
  level: 'info', //graba los mensaje del mismo nivel o inferior (0, 1, 2)
  format: winston.format.json(),
  //defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }), //Guarda solo los de nivel error 
    new winston.transports.File({ filename: 'combined.log' }),
   
  ],
});

module.exports=logger;