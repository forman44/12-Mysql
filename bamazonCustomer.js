var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  // Your username
  user: "root",
  // Your password
  password: "root",
  database: "bamazon_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM products", function (err, result) {
      if (err) throw err;
      console.table(result);
      start();
    });
    function start() {
      inquirer
        .prompt({
          name: "product_name",
          type: "items_id",
          message: "How many Items do you want?",
          
        })
        .then(function(answer) {
          // based on their answer, either call the bid or the post functions
          if (answer.postOrBid.toUpperCase() === "POST") {
            postAuction();
          }
          else {
            bidAuction();
          }
        });
    }
  });