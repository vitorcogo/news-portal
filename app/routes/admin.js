module.exports = (app) => {
    app.get('/form-add-new', (req, res) => {
        res.render('admin/form_add_new');
    });

    app.post('/news/save', (req, res) => {
        var news = req.body;
        res.send(news);
    });
}
