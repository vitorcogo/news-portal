module.exports.index = (application, req, res) => {
    var connection = application.config.dbConnection();
    var newsModel = new application.app.models.NewsDAO(connection);

    newsModel.getLastNews((error, result) => {
        res.render('home/index', {news: result});
    });
}