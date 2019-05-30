var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, './public', 'test.html'));
});

app.post('/calcular', function(req, res, next) {
  console.log(req.body); //aqui esta el dato que viene del formulario, ver la consola
  var edad = req.body.b;
  var estatura = req.body.a;
  var circunferencia = req.body.c;
  if (req.body.d == 'si') {
    var antecedentes = 1;
  } else {
    var antecedentes = 0;
  }
  var pre = 1 / (1 + Math.exp(-(-5.30 + (edad) * 0.017 + circunferencia * 0.042 + estatura * (-0.028) + antecedentes * 0.91)));
  // calculos
  if (pre >= 0.01) {
    var preResult = 'ALTO';
  } else{
    var preResult = 'BAJO';
  }
  var resultado = {
    resultadoNum: pre,
    resultado: preResult
  }; //calculo
  res.json(resultado);
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;



// descargar node.js e instalar
// bajar todos estos archivos en una carpeta
// abrir una consola en esta carpeta
// ejecutar "npm i"
// ejecutar "nodemon ./bin/www"
// abrir en el navegador la url "localhost:8081"
// ahi esta la pagina y el server corriendo, cuando se le envien datos desde el formulario, se veran en la consola
