console.log("Fuck World");

var express = require('express');
var mysql = require('mysql');
var path = require("path");
var fs = require("fs");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'heawymetal',
    database: 'books'
});

var app = express();

/*connect server to frontend*/{
app.set('views', path.join(__dirname, ' ../frontend'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', function (req, res) {
    fs.createReadStream('index.html').pipe(res);
});}
/*end*/

connection.connect();   //connect server to database


app.get('/singin', function (req, res) {
    console.log(req);
    console.log(res);

});
// 'user/' + '/\w{3,10}'
app.get(/user\/John/, function (req, res) {
    connection.query("select Author.Name, Book.Title, Book.Year from Book, Author " +
        "where Book.idBook in " +
        "(select User_has_Book.Book_idBook from User_has_Book " +
        "where User_has_Book.User_idUser = " +
        "(select User.idUser from User where User.Name = 'John')) " +
        "and Author.idAuthor = Book.Author_idAuthor;", function (err, result) {
        res.statusCode = 201;
        res.send(result);
    })
});

app.get(/user\/James/, function (req, res) {
    connection.query("select Author.Name, Book.Title, Book.Year from Book, Author " +
        "where Book.idBook in " +
        "(select User_has_Book.Book_idBook from User_has_Book " +
        "where User_has_Book.User_idUser = " +
        "(select User.idUser from User where User.Name = 'James')) " +
        "and Author.idAuthor = Book.Author_idAuthor;", function (err, result) {
        res.statusCode = 201;
        res.send(result);
    })
});

app.get(/user\/Jason/, function (req, res) {
    connection.query("select Author.Name, Book.Title, Book.Year from Book, Author " +
        "where Book.idBook in " +
        "(select User_has_Book.Book_idBook from User_has_Book " +
        "where User_has_Book.User_idUser = " +
        "(select User.idUser from User where User.Name = 'Jason')) " +
        "and Author.idAuthor = Book.Author_idAuthor;", function (err, result) {
        res.statusCode = 201;
        res.send(result);
    })
});

app.get('/writers/books', function (req, res) {
    connection.query("select Author.Name, Book.Title, Book.Year from Book, Author where Book.Author_idAuthor = Author.idAuthor;", function (err, result) {
        res.statusCode = 201;
        res.send(result);
    })
});

app.get('/writers', function (req, res) {
    connection.query("select Author.Name from Author;", function (err, result) {
        res.statusCode = 201;
        res.send(result);
    })
});



/*connect server to localhost*/
app.listen(3000);
