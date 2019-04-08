const winston = require('winston');
logger = winston.createLogger({
    transports:
    [
       new (winston.transports.Console)(),
       new  (winston.transports.File)({filename:wasanLogs})
    ]
});
app.get('/',()=>{
    console.log('hi');
});
app.get('/wasan',()=>{
    console.log('wasan here');
})