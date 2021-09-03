const logging = require('../lib/log');

const mysql_query = async (apiReference, query, params) => {
    if (!apiReference) {
        apiReference = {
            module: "databaseService",
            api: "mysqlQueryPromise"
        }
    }
    try {

        let [sqlResult, fields] = await connection.execute(query, params);

        let query1 = await connection.format(query, params);
        logging.log2(apiReference, {
            EVENT: "Executing query params" + params, QUERY: query1, SQL_ERROR: "asd",
            SQL_RESULT_LENGTH: sqlResult && sqlResult.length
        });
        return sqlResult;

    } catch (err) {
        logging.log(err);
        return err
    }
}

module.exports = {
    mysql_query: mysql_query,
}


