module.exports = (application) => {

    application.get('/new', (req, res) => {
        var connection = application.config.dbConnection(); // Connection module passed in consign 
        var newModel = application.app.models.newsModel;

        newModel.getNew(connection, (err, result) => {
            res.render('news/new', { singleNew: result });
        });
    });
}