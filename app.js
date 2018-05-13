const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('./logger/logger');
const mongoose   = require('mongoose');

const app = express();
const router = require('./router');

// Put Mongoose events in their own file
mongoose.connect('mongodb://localhost:27017/zombie');
mongoose.connection.on('connected',  () => {
  logger.info('Mongoose default connection open to mongodb://localhost:27017/zombie');
}); 
mongoose.connection.on('error', (err) => {
  logger.error(`Mongoose default connection error: ${err}`);
});
mongoose.connection.on('disconnected',  () => {
  logger.info('Mongoose default connection disconnected'); 
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);

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
  res.send('error');
});

module.exports = app;
