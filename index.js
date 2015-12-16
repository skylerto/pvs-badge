var express = require('express');
var app = express();
var pvs = require('pvs-proofs');
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');

var router = express.Router();

var val = pvs.get(
  // path to top.summary
);

router.get('/', function(req, res, next) {
  var full = val == 100 ? true : false;
  var color = full ? '#42bf17' : '#cd4d3c';

  res.render('badge', {
    url: 'http://www.github.com/skylerto',
    color: color,
    val: val
  });
});


app.use('/', router);

app.set('port', 3000);
var server = require('http').createServer(app);
server.listen(app.get('port'), function() {
  console.log('running on http://localhost:3000');
});
