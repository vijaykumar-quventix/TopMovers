const mysql = require('mysql2/promise');
const config = require('config')

const mysqlConnection = async () => {
  try {
    global.connection = await mysql.createConnection({
      host: config.databaseSettings.host,
      user: config.databaseSettings.user,
      password: config.databaseSettings.password,
      database: config.databaseSettings.database,  
    });
    
    console.table([{
      title: 'MYSQL',
      value: 'CONNECTED'
    }]);

  } catch (e) {
    console.table([{
      title: 'MYSQL',
      value: e.message
    }]);
  }
}

module.exports = {
  mysqlConnection: mysqlConnection
};