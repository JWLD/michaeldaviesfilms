const Express = require('express')
const Handlebars = require('express-handlebars')
const { navCategories, portfolio } = require('./data.json')

const app = Express()

app.engine(
  'hbs',
  Handlebars({
    defaultLayout: 'main',
    partialsPath: './partials',
    extname: 'hbs'
  })
)

app.set('view engine', 'hbs')

app.use(Express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    navCategories,
    portfolio
  })
})

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
  console.log(`Server running at ${app.get('port')}`)
})
