function NewsDAO(connection) {
    this._connection = connection;
}

NewsDAO.prototype.getNews = function(callback) {
    this._connection.query('select * from news order by create_at desc', callback);
} 

NewsDAO.prototype.getNotice = function(id, callback) {
    this._connection.query(`select * from news where new_id = ${id}`, callback);
} 

NewsDAO.prototype.saveNotice = function(notice, callback) {
    this._connection.query('insert into news set ?', notice, callback); // notice is replaced in ?
}

NewsDAO.prototype.getLastNews = function(callback) { // return last 5 news
    this._connection.query('select * from news order by create_at desc limit 5', callback);
}

module.exports = () => NewsDAO;