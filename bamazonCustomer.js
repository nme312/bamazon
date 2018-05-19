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
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    runMenu();
});

function runMenu() {
    inquirer.prompt([
        {
            type: "list",
            name: "actions",
            message: "Please Choose An Option",
            choices: ["Display All Products"]
        }
    ]).then(function (choice) {
        switch (choice) {
            case "Display All Products":
                displayAll();
                break;
        }
    });
}

function displayAll() {
    connection.query("SELECT * FROM products", function (err, data) {
        for (var i = 0; i < data.length; i++) {
            console.log(data);
        }
        runMenu();
    });
}