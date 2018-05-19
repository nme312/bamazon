var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazondb"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayAll();
});

function displayAll() {
    connection.query("SELECT * FROM products;", function (err, data) {
        if (err) {
            throw err;
        }
        for (var i = 0; i < data.length; i++) {
            console.log(`${data[i].item_id} | ${data[i].product_name} | $${data[i].price}`);
        }
        start();
    });
}

function start() {
    inquirer.prompt([
        {
            type: "input",
            name: "item_id",
            message: "Please Enter The ID Of The Product You Would Like To Purchase",
        },
        {
            type: "input",
            name: "order",
            message: "How Many Of This Item Would You Like To Purchase ?"
        }
    ]).then(function (response) {
        connection.query("select * from products where item_id = ?", response.item_id, function (err, data) {
            if (err) {
                throw err;
            }
            if (response.order <= data[0].stock_quantity) {
                data[0].stock_quantity -= response.order;
                connection.query("update products set stock_quantity = ? where item_id = ?", [data[0].stock_quantity, response.item_id], function (err, data) {
                    if (err) {
                        throw err;
                    }
                    connection.query("select * from products where item_id = ?", response.item_id, function (err, data) {
                        console.log(`Purchase Successful, Your Total Is $${data[0].price * response.order}`);
                        displayAll();
                    });
                });
            } else {
                console.log("Insufficient Quantity");
                displayAll();
            }
        })
    });
}

