var winston = require('winston');
logger = winston.createLogger({
    transports:
    [
       new (winston.transports.Console)(),
       new  (winston.transports.File)({filename:wasanLogs})
    ]
});