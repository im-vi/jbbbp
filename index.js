const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/valorant', function(req, res) {
  res.render('calc', {
    gameTitle: 'VALORANT',
    gameCurrency: 'VALORANT Points',
    gameCurrencyShort: 'VP',
    price: 0.05
  });
});

app.get('/fortnite', function(req, res) {
  res.render('calc', {
    gameTitle: 'Fortnite',
    gameCurrency: 'vBucks',
    gameCurrencyShort: 'v$',
    price: 0.03
  });
});

app.listen(4000);
console.log('Server is running');