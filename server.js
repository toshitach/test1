var express = require('express');
var app = express();

//Reusable controllers
var ordersController=function(req, res){
  console.log("Invoking  rest api for product list");
  var orders = [
    {id:1, customer:"Raj",amount:500, status:"completed"},
    {id:2, customer:"Tanvi",amount:1512, status:"progress"},
    {id:3, customer:"kaustubh",amount:500, status:"rejected"}
    {id:4, customer:"ramlal",amount:6500, status:"inprogress"}
  ];
  res.send(orders);
};
 
// setting router to map requests  with controllers

app.get('/orders',ordersController);

var server = app.listen(8087, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8087", host, port)
})