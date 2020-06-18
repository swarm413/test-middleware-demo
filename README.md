###注意 Promise是ES6语法，这意味着你可以在服务器端使用，但是在客户端你要注意兼容性问题！
另外express的中间件next()似乎有两种用法，一会可以挨个试一下。测试用console.log就行了
//测试结果显示下面两种方法结果一模一样！
###第一种方法

app.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id);
  next();
}, function (req, res, next) {
  res.send('User Info');
});

###第二种方法

app.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id);
  next()
  });

  app.get('/user/:id',function (req, res, next) {
  res.send('User Info');
});

###另外官方文档很奇怪。我试一下。
这个很有意思，测试结果显示这个能够交出执行控制权！直接执行下面的中间件。另外next('route');仅仅适用于app.METHOD或者router.METHOD
app.get('/user/:id', function (req, res, next) {
  if (req.params.id == 0) next('route');
  else next(); //
}, function (req, res, next) {
  res.render('regular');
});

app.get('/user/:id', function (req, res, next) {
  res.render('special');
});
