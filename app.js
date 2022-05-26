var app = require('./config/server');

// Without consign
// require('./app/routes/news')(app);
// require('./app/routes/home')(app);
// require('./app/routes/form-add-new')(app);

app.listen(8080, () => {
    console.log('Server is running on port 8080.');
});