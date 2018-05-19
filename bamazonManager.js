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
    runMenu();
});

function runMenu() {
    inquirer.prompt([
        {
            type: "list",
            name: "actions",
            message: "Please Choose An Option",
            choices: ["View Products For Sale", "View Low Inventory", "Add To Inventory", "Add New Product", "Exit"]
        }
    ]).then(function (response) {
        switch (response.actions) {
            case "View Products For Sale":
                viewProductsForSale();
                break;
            case "View Low Inventory":
                viewLowInventory();
                break;
            case "Add To Inventory":
                addToInventory();
                break;
            case "Add New Product":
                addNewProduct();
                break;
            default:
                connection.end();
                break;
        }
    });
}

function viewProductsForSale() {
    connection.query("select * from products where stock_quantity > 0", function (err, data) {
        if (err) {
            throw err;
        }
        for (var i = 0; i < data.length; i++) {
            console.log(`${data[i].item_id} | ${data[i].product_name} | $${data[i].price} | ${data[i].stock_quantity}`);
        }
        runMenu();
    });
}

function viewLowInventory() {
    connection.query("select * from products where stock_quantity < 5", function (err, data) {
        if (err) {
            throw err;
        }
        for (var i = 0; i < data.length; i++) {
            console.log(`${data[i].item_id} | ${data[i].product_name} | $${data[i].price} | ${data[i].stock_quantity}`);
        }
        runMenu();
    });
}

function addToInventory() {
    inquirer.prompt([
        {
            type: "input",
            name: "item_id",
            message: "Please Enter The ID Of The Item You Would Like To Restock"
        },
        {
            type: "input",
            name: "restock",
            message: "Please Enter The Restock Quantity"
        }
    ]).then(function (response) {
        connection.query("select * from products where item_id = ?", response.item_id, function (err, data) {
            if (err) {
                throw err;
            }

            data[0].stock_quantity += +response.restock;

            connection.query("update products set stock_quantity = ? where item_id = ?", [data[0].stock_quantity, response.item_id], function (err, data) {
                // console.log(`${data[i].item_id} | ${data[i].product_name} | $${data[i].price}`)
                if (err) {
                    throw err;
                }
                connection.query("select * from products where item_id = ?", response.item_id, function (err, data) {
                    if(err) {
                        throw err;
                    }
                    console.log(`Restock Successful, Item Inventory Is Now ${data[0].stock_quantity}`);
                    runMenu();
                });
            });
        });
    });
}

function addNewProduct() {
    inquirer.prompt([
        {
            tyep: "input",
            name: "product_name",
            message: "Please Enter New Product Name"
        },
        {
            tyep: "input",
            name: "department_name",
            message: "Please Enter New Product Department"
        },
        {
            tyep: "input",
            name: "price",
            message: "Please Enter New Product Price"
        },
        {
            tyep: "input",
            name: "stock_quantity",
            message: "Please Enter New Product Quantity"
        }
    ]).then(function (response) {
        connection.query("insert into products set ?", response, function (err, data) {
            if (err) {
                throw err;
            }
            console.log("New Product Added Successfully");
            runMenu();
        })
    });
}