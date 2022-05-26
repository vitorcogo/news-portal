module.exports = (application) => {

    application.get('/notice', (req, res) => {
        var connection = application.config.dbConnection(); // Connection module passed in consign 
        var newModel = new application.app.models.NewsDAO(connection);

        newModel.getNotice((err, result) => {
            res.render('news/notice', { notice: result });
        });
    });
}