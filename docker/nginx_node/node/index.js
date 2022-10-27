var express = require('express');
var app = express()

var mysql = require('mysql');

const port = 3000;
const config = {
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'nodedb'
        };

app.get('/', function(req, res){
    var connection = mysql.createConnection(config);
    var sql_insert = "INSERT INTO people(name) values('Aurelius')";
    connection.query(sql_insert)

    var sql_query = "SELECT * FROM people";
    connection.query(sql_query, (error, results, fields) => {
        if (error) {
          throw error
        };
        
        let table = '<table>';
        table += '<tr><th>#</th><th>Name</th></tr>';
        for(let people of results) {      
          table += `<tr><td>${people.id}</td><td>${people.name}</td></tr>`;
        }
    
        table += '</table>';    
        res.send('<h1>Full Cycle Rocks!</h1>' + table);    
      });   
      connection.end();
});

app.listen(port, () => {
    console.log('Rodando na porta: ' + port);
});