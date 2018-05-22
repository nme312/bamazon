# bamazon

The Bamazon App is an Amazon-like storefront that runs in node using the mySQL database

Bamazon has two operational apps

1. bamazonCustomer
    - When running bamazonCustomer all products currently stored in the bamazon database are logged to the console

    - The user is then prompted to enter the ID of the product they wish to 

    - If the quantity of entered is greater than the stock quantity the purchase fails, if not the quantity is deducted from the stock while the total cost of the purchase is added to the product sales for the item purchased

![bamazon-customer-image](https://github.com/nme312/bamazon/blob/master/images/Screenshot%20(13).png)

2. bamazonManager
    - When running bamazonManager the user is prompted to choose one of four operations that run four functions using the bamazon database respectively
    - All bamazonManager function call the original prompt function allowing users to perform multiple functions without restarting the bamazon app

        1. View Products For Sale
            - This function logs all products with an inventory greater than 0 to the console

![bamazon-manager-available-products-image](https://github.com/nme312/bamazon/blob/master/images/Screenshot%20(14).png)

        2. View Low Inventory
            - This function logs all products with an inventory less than 5 to the console

![bamazon-manager-low-inventory-image](https://github.com/nme312/bamazon/blob/master/images/Screenshot%20(15).png)

        3. Add To Inventory
            - This function first prompts the user for the ID of the item that they would like to restock and for a restock quantity and then concatonates the user inputed restock quantity to the current stock quantity

![bamazon-manager-add-to-inventory-image](https://github.com/nme312/bamazon/blob/master/images/Screenshot%20(16).png)

        4. Add New Product
            - This function prompts the user for the name, department name, price, and stock quantity of a new unique product
            - The product is then assigned a unique item id and added to the bamazon database, allowing customer and manager users to interact with said product using all of the previous functions

![bamazon-manager-new-product-image](https://github.com/nme312/bamazon/blob/master/images/Screenshot%20(17).png)