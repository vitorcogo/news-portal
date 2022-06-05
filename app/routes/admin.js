module.exports = (application) => {
    application.get('/form-add-new', (req, res) => {
        application.app.controllers.admin.formAddNew(application, req, res);
    });

    application.post('/news/save', (req, res) => {
        application.app.controllers.admin.saveNew(application, req, res);
    });
}
