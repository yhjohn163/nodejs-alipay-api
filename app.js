
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'html');
  app.register('.html', require('ejs'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);
app.get('/paynotify',routes.paynotify);
app.get('/payreturn',routes.payreturn);
app.get('/downloadurlquery',routes.downloadurlquery);


//线上
app.post('/alipayto',routes.alipayto);
app.get('/singlequery',routes.singlequery);
app.get('/refundfastpay',routes.refundfastpay);
app.get('/refundfastquery',routes.refundfastquery);
//线下
app.get('/precreate',routes.precreate);
app.get('/payquery',routes.payquery);
app.get('/traderefund',routes.traderefund);
app.get('/refundquery',routes.refundquery);
//城市服务
app.get('/wapay',routes.wapay);
app.get('/oauthtoken',routes.oauthtoken);


app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
