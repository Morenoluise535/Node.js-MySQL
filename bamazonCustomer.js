var mysql = require("mysql");
// var inquirer = require("inquirer");
var prompt = require('prompt');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "yn6aezwe",
  database: "bamazon"
});
showproduct()

var schema = {
    properties: {
      id: {
        message: 'Enter the id of the product',
        required: true
      },
      quantity: {
        message: 'Please enter the quantity desired',
        required: true
      }
    }
  };

//   var prompter = prompt.get(['id', 'quantity'], function (err, result) {
//   });

function showproduct() {
    connection.query('SELECT id, product_name, Price FROM products', function(err, rows, fields) {
    if (err) throw err;
    console.log('Available products:');
    for(var i = 0; i < rows.length; i++) {
      console.log('Item ID: ' + rows[i].id + '   Product Name: ' + rows[i].product_name + '   Price: $' + rows[i].Price);
    }
  });
  startpromt()
}

function startpromt() {
    prompt.start();
    prompt.get(schema, function(err, result) {
      var orderedproduct = result.id;
      var orderedquantity = result.quantity;
      processOrder(orderedproduct, orderedquantity);
    });
  }

  function processOrder(id, quantity) {
    connection.query('SELECT stock_quantity FROM products WHERE id = ?', [id], function(err, rows, fields) {
      if(err) throw err;
  
      if(JSON.parse(rows[0].stock_quantity) >= quantity) {
        var adjquantity = rows[0].stock_quantity - quantity;
        updateStock(adjquantity, id);
      } else {
        console.log('out of stock');
        connection.end();
      }
    });
  }

  function updateStock(adjquantity, id) {
    connection.query('UPDATE products SET stock_quantity = ? WHERE id = ?', [adjquantity, id], function(err, rows, fields) {
      if(err) throw err;
      console.log('updating inventory');
      connection.end();
    });
  }

// connection.connect(function(err) {
//     if (err) throw err;
//     runSearch();
//   });

//   function runSearch() {
//     inquirer
//       .prompt(
//           {
//         name: "id",
//         type: "input",
//         message: "What is the ID number of the product?"
//         },
//         {
//         name: "amount",
//         type: "input",
//         message: "What Amount of the product would you like?"
//         }
//       )
//       .then(function(answer) {
//         updateProduct()
//       });
//   }
         
//         function updateProduct() {
//             if(rows[i].stock_quantity > -1){
//             var query = connection.query(
//               "UPDATE products SET ? WHERE ?",
//               [
//                 {
//                   quantity: 100 - answer.amount
//                 },
//                 {
//                   id: answer.id
//                 }
//               ],
//             );
//              // logs the actual query being run
//              console.log(query.sql);
//              showproduct()
//           }
//           else {
//               console.log("sorry this product is out of stock");
//               showproduct()
//           }
//         }