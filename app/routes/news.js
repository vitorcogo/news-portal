module.exports = (application) => {

    application.get('/news', (req, res) => {
        var connection = application.config.dbConnection(); // Connection module passed in consign 
        var newsModel = new application.app.models.NewsDAO(connection); // Model module passed in consign

        newsModel.getNews((err, result) => {
            res.render('news/news', { news: result });
        });
    });
}