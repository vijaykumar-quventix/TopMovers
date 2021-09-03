const mysql = require('mysql2/promise');

const mysqlConnection = async () => {
  try {
    global.connection = await mysql.createConnection({
      host: process.env.HOST,
      user: process.env.DB_USER,
      password: "password",
      database: "topmovers",  
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