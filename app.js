var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var donordetailRouter=require('./donor_routes/donordetail_routes');
var changepasswordRouter=require('./donor_routes/changepassword_routes');
var forgetpasswordRouter=require('./donor_routes/forgetpassword_routes');
var ngodetaildRouter=require('./ngo_ routes/ngodetail_routes');
var nopRouter=require('./donor_routes/nop_routes');
var mapRouter=require('./donor_routes/map_routes');
var ngodetailbynopnameRouter=require('./ngo_ routes/ngodetailbynopname_routes');
var transactionRouter=require('./donor_routes/transaction_routes')
var transactionbynopnameRouter=require('./ngo_ routes/transaction_routes');
var transactionbyallnopnameRouter=require('./ngo_ routes/transactionbyallnopname_routes');
var register1=require('./ngo_ routes/register1_routes');
var register2=require('./ngo_ routes/register2_routes');
var register3=require('./ngo_ routes/register3_routes');
var viewProfileById=require('./ngo_ routes/viewProfileById_routes');
var updateprofile1=require('./ngo_ routes/updateprofile1_routes');
var updateprofile2=require('./ngo_ routes/updateprofile2_routes');
var updateprofile3=require('./ngo_ routes/updateprofile3_routes');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/donor',donordetailRouter);
app.use('/changepassword',changepasswordRouter);
app.use('/forgetpassword',forgetpasswordRouter);
app.use('/ngo',ngodetaildRouter);
app.use('/nop',nopRouter);
app.use('/map',mapRouter);
app.use('/ngobynopname',ngodetailbynopnameRouter);
app.use('/transaction',transactionRouter);
app.use('/trancationbynop',transactionbynopnameRouter);
app.use('/trancationtotalbynop',transactionbynopnameRouter);
app.use('/trancationbyallnop',transactionbyallnopnameRouter);
app.use('/register1',register1);
app.use('/register2',register2);
app.use('/register3',register3);
app.use('/viewProfileById',viewProfileById);
app.use('/updateprofile1',updateprofile1);
app.use('/updateprofile2',updateprofile2);
app.use('/updateprofile3',updateprofile3);
// app.use('/forgetpassword',forgetpasswordRouter);
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
