// var mysql = require("mysql");
// var inquirer = require("inquirer");

// var connection = mysql.createConnection({
//     host: "localhost",

//     // Your port; if not 3306
//     port: 3306,

//     // Your username
//     user: "root",

//     // Your password
//     password: "root",
//     database: "bamazondb"
// });

// connection.connect(function (err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId);
//     displayAll();
// });

// // View Product Sales by Department
// // Create New Department
// runMenu();

// function runMenu() {
//     inquirer.prompt([
//         {
//             type: "list",
//             name: "actions",
//             message: "Please Choose An Option",
//             choices: ["View Product Sales By Department", "Create New Department", "Exit"]
//         }
//     ]).then(function (response) {
//         switch (response.actions) {
//             case "View Product Sales By Department":
//                 viewProductsSalesByDepartment();
//                 break;
//             case "Create New Department":
//                 createNewDepartment();
//                 break;
//             default:
//                 connection.end();
//                 break;
//         }
//     });
// }

// function viewProductsSalesByDepartment() {
    
// }