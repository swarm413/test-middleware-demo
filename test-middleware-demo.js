var express=require('express');
var app=express();
var router = express.Router();
/*
app.get('/user', function (req, res, next) {
  console.log(req.url);
  next();
}, function (req, res, next) {
  res.send('User Info');
});
*/
/*
app.get('/user', function (req, res, next) {
  console.log(req.url);
  next()
  });

  app.get('/user',function (req, res, next) {
  res.send('User Info');
});
*/
app.get('/user', function (req, res, next) {
  if (req.query.id == 0) next('route');
  else next(); //
}, function (req, res, next) {
  console.log('常规');
  res.send('regular');
});

app.get('/user', function (req, res, next) {
  console.log('特殊');
  res.send('special');
});
app.listen(3000,function(){
  console.log('Running!')
})
