module.exports = (application) => {
    application.get('/form-add-new', (req, res) => {
        res.render('admin/form_add_new');
    });

    application.post('/news/save', (req, res) => {
        var notice = req.body;

        var connection = application.config.dbConnection(); 
        var newsModel = new application.app.models.NewsDAO(connection); 

        newsModel.saveNotice(notice, (err, result) => {
            res.redirect('/news'); // redirect to news route
        });
    });
}
