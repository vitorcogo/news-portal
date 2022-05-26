module.exports = (application) => {
    application.get('/form-add-new', (req, res) => {
        res.render('admin/form_add_new');
    });

    application.post('/news/save', (req, res) => {
        var notice = req.body;

        // Express validator
        req.assert('title', 'Título é obrigatório').notEmpty();
        req.assert('summary', 'Resumo é obrigatório').notEmpty();
        req.assert('summary', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('author', 'Autor é obrigatório').notEmpty();
        req.assert('new', 'Noticia é obrigatório').notEmpty();
        req.assert('notice_date', 'Data é obrigatório').notEmpty().isDate({ format: 'YYYY-MM-DD' });

        if (req.validationErrors()) {
            console.log('Erro no objeto de envio.', notice);
            res.render('admin/form_add_new');
            return;
        }

        var connection = application.config.dbConnection(); 
        var newsModel = new application.app.models.NewsDAO(connection); 

        newsModel.saveNotice(notice, (err, result) => {
            res.redirect('/news'); // redirect to news route
        });
    });
}
