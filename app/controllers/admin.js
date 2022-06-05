module.exports.formAddNew = (application, req, res) => {
    res.render('admin/form_add_new', {validator: {}, notice: {}});
}

module.exports.saveNew = (application, req, res) => {
    var notice = req.body;
    console.log(notice);
    // Express validator
    req.assert('title', 'Título é obrigatório').notEmpty();
    req.assert('summary', 'Resumo é obrigatório').notEmpty();
    req.assert('summary', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('author', 'Autor é obrigatório').notEmpty();
    req.assert('notice', 'Noticia é obrigatório').notEmpty();
    req.assert('notice_date', 'Data é obrigatório').notEmpty().isDate({ format: 'YYYY-MM-DD' });

    var errors = req.validationErrors();
    if (errors) {
        res.render('admin/form_add_new', {validator: errors, notice: notice});
        return;
    }

    var connection = application.config.dbConnection(); 
    var newsModel = new application.app.models.NewsDAO(connection); 

    newsModel.saveNotice(notice, (err, result) => {
        res.redirect('/news'); // redirect to news route
    });
}