module.exports.getNews = (application, req, res) => {
    var connection = application.config.dbConnection(); // Connection module passed in consign 
    var newsModel = new application.app.models.NewsDAO(connection); // Model module passed in consign

    newsModel.getNews((err, result) => {
        res.render('news/news', { news: result });
    });
}

module.exports.getNew = (application, req, res) => {
    var connection = application.config.dbConnection(); // Connection module passed in consign 
    var newModel = new application.app.models.NewsDAO(connection);

    newModel.getNotice((err, result) => {
        res.render('news/notice', { notice: result });
    });
}