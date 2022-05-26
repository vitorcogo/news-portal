module.exports = (application) => {

    application.get('/news', (req, res) => {
        var connection = application.config.dbConnection(); // Connection module passed in consign 
        var newsModel = application.app.models.newsModel; // Model module passed in consign

        newsModel.getNews(connection, (err, result) => {
            res.render('news/news', { news: result });
        });
    });
}