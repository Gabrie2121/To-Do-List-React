const server = require('./config/server')
require('./config/database')
require('./config/routes/routes')(server)//o server é parametro