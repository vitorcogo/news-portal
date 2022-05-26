module.exports = () => {
    this.getNews = (connection, callback) => 
        connection.query('select * from news', callback);

    this.getNew = (connection, callback) => 
        connection.query('select * from news where new_id = 2', callback);

    return this;
}