var express = require('express');
var app = express();

// setting handlebars
var handlebars = require('express-handlebars')
    .create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
    res.render('home');
});

app.use(function(req, res){
    res.status(404);
    res.render('404', {layout: 'other', test: "404 - bb"});
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - bye');
});

app.listen(app.get('port'), function(){
    console.log('server start ' + app.get('port'));
});