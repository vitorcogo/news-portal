var mySql = require('mysql');

var connectionMySql = () => {
    console.log('Connection mySql is available.');
    return mySql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: 'news_portal'
    });
};

module.exports = () => {
    return connectionMySql; // Set connection in variable to avoid connection on init app 
}