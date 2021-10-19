var express = require('express');
var app = express();
var random = require('mysql2');
var connection = random.createConnection({
  host: 'db-mysql-nyc3-test-3-do-user-9878515-0.b.db.ondigitalocean.com',
  user: 'doadmin',
  password: 'On3VOdvFwBceb65K',
  database: 'contacts'
});

// used to serve static files from public directory
app.use(express.static('public'));

//app.get('/', function(req, res){
  //  res.send('Hello world!');
//}); 
//check if correct


app.listen(3000, function(){
    console.log('Running on port 3000!')
});



// test with curl 'http://localhost:3000/add?firstName=peter'

app.get('/read', function(req, res){
  connection.query(
    'SELECT * FROM `contacts`',
    function(err, results, fields) {
      console.log(results);
      res.send(results);
    }
  );


});


app.post('/add', function(req, res){
    //console.log('firstName: ', req.query.firstName);
    //res.send(`echoing: ${req.query.firstName}`);
    
    connection.query(
      `INSERT INTO \`contacts\` VALUES('${req.query.firstName}', '${req.query.lastName}',
      '${req.query.phoneNumber}', ${req.query.email}', ${req.query.university}, ${req.query.major}')`,
        function(err, results, fields) {
        console.log(results);
        res.send(results);
    }
);

});

//app.get('/', function(req, res){
  //  res.send('hello');
//});

