function NewsDAO(connection) {
    this._connection = connection;
}

NewsDAO.prototype.getNews = function(callback) {
    this._connection.query('select * from news', callback);
} 

NewsDAO.prototype.getNotice = function(callback) {
    this._connection.query('select * from news where new_id = 2', callback);
} 

NewsDAO.prototype.saveNotice = function(notice, callback) {
    this._connection.query('insert into news set ?', notice, callback); // notice is replaced in ?
}

module.exports = () => {
    return News;
}