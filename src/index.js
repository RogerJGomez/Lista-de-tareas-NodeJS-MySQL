const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection= require('express-myconnection');

//Importing routes

const taskRoutes = require('./routes/task');


//settings

app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares

app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host:'localhost',
    user:'root',
    password:'123456',
    port: 3306,
    database:'task'
}, 'single'));
app.use(express.urlencoded({extended:false}));
//routes

app.use('/', taskRoutes);

//Static files

app.use(express.static(path.join(__dirname,'public')))

app.listen(app.get('port'),()=>{
    console.log('Server open on port 3000');
});