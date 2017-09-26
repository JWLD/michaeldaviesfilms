const Express = require('express');
const Hbs = require('express-handlebars');

const app = Express();

app.engine('hbs', Hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use(Express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`Server running at ${app.get('port')}`);
});
