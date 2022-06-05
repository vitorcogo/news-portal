module.exports = (application) => {

    application.get('/news', (req, res) => {
        application.app.controllers.news.getNews(application, req, res);
    });

    application.get('/notice', (req, res) => {
        application.app.controllers.news.getNew(application, req, res);
    });
}