const express = require('express');
const app = express();
app.get('/', (request, response) => {
    response.locals.mylocal = 'Modified Templating local';
    response.render('index'); 
});
app.set('view engine', 'pug')
app.listen(3000);